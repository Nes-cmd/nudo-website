import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function BusinessIndex({ businesses }) {
    // Support both paginator objects and plain arrays (e.g. older responses or tests)
    const items = Array.isArray(businesses?.data) ? businesses.data : Array.isArray(businesses) ? businesses : [];
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [businessToDelete, setBusinessToDelete] = useState(null);
    const [form, setForm] = useState({
        name: '',
        description: '',
        category: '',
        image: [],
        website: '',
        servicesText: '',
        available: true,
    });

    const resetForm = () =>
        setForm({
            name: '',
            description: '',
            category: '',
            image: [],
            website: '',
            servicesText: '',
            available: true,
        });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            setForm((prev) => ({
                ...prev,
                [name]: files ? Array.from(files) : [],
            }));
        } else {
            setForm((prev) => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };

    const handleCreate = (e) => {
        e.preventDefault();
        const payload = {
            name: form.name,
            description: form.description,
            category: form.category,
            website: form.website || null,
            services: form.servicesText
                ? form.servicesText.split(',').map((s) => s.trim()).filter(Boolean)
                : [],
            available: form.available,
        };

        if (form.image.length > 0) {
            payload.image = form.image;
        }

        router.post(route('dashboard.businesses.store'), payload, {
            onSuccess: () => {
                resetForm();
                setShowCreateModal(false);
            },
        });
    };

    const handleUpdate = (business, changes) => {
        router.patch(
            route('dashboard.businesses.update', business.id),
            {
                ...business,
                ...changes,
                services: changes.servicesText
                    ? changes.servicesText.split(',').map((s) => s.trim()).filter(Boolean)
                    : business.services,
            },
        );
    };

    const requestDelete = (business) => {
        setBusinessToDelete(business);
    };

    const confirmDelete = () => {
        if (!businessToDelete) return;
        router.delete(route('dashboard.businesses.destroy', businessToDelete.id), {
            onFinish: () => setBusinessToDelete(null),
        });
    };

    return (
        <AuthenticatedLayout
            header={<span>Businesses</span>}
        >
            <Head title="Businesses" />

            <div className="px-4 py-6 sm:px-6 lg:px-8 space-y-6">
                {/* Toolbar */}
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Businesses
                    </h2>
                    <button
                        type="button"
                        onClick={() => setShowCreateModal(true)}
                        className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-colors"
                    >
                        Add business
                    </button>
                </div>

                {/* List */}
                <section className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm p-6">
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4">
                        Existing businesses
                    </h2>
                    {items.length === 0 ? (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            No businesses yet. Create one above.
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {items.map((business) => {
                                const servicesText = (business.services || []).join(', ');
                                return (
                                    <div
                                        key={business.id}
                                        className="rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
                                    >
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                                    {business.name}
                                                </span>
                                                <span className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-500/15 px-2 py-0.5 text-[11px] font-medium text-primary-700 dark:text-primary-300">
                                                    {business.category}
                                                </span>
                                                {business.available && (
                                                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600">
                                                        Available
                                                    </span>
                                                )}
                                            </div>
                                            {business.description && (
                                                <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                                                    {business.description}
                                                </p>
                                            )}
                                            {servicesText && (
                                                <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                                                    Services: {servicesText}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mt-2 flex items-center gap-2 md:mt-0">
                                            <Link
                                                href={route('dashboard.businesses.show', business.id)}
                                                className="inline-flex items-center rounded-lg border border-gray-300 dark:border-slate-600 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                                            >
                                                View
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleUpdate(business, {
                                                        available: !business.available,
                                                    })
                                                }
                                                className="inline-flex items-center rounded-lg border border-gray-300 dark:border-slate-600 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                                            >
                                                {business.available ? 'Mark unavailable' : 'Mark available'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => requestDelete(business)}
                                                className="inline-flex items-center rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </section>

                {/* Pagination */}
                {businesses.links && businesses.links.length > 1 && (
                    <nav className="flex justify-between items-center text-xs text-gray-600 dark:text-gray-300">
                        <div>
                            Page {businesses.current_page} of {businesses.last_page}
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {businesses.links.map((link, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    disabled={!link.url}
                                    onClick={() => {
                                        if (!link.url || link.active) return;
                                        router.visit(link.url, { preserveScroll: true });
                                    }}
                                    className={`px-2.5 py-1 rounded-md border text-xs ${
                                        link.active
                                            ? 'bg-primary-600 border-primary-600 text-white'
                                            : !link.url
                                            ? 'border-transparent text-gray-400'
                                            : 'border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800'
                                    }`}
                                >
                                    <span
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                </button>
                            ))}
                        </div>
                    </nav>
                )}

                {/* Create modal */}
                {showCreateModal && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center">
                        <div
                            className="absolute inset-0 bg-black/40"
                            onClick={() => {
                                setShowCreateModal(false);
                                resetForm();
                            }}
                        />
                        <div className="relative z-50 w-full max-w-2xl mx-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xl">
                            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-slate-800">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                    Add new business
                                </h3>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowCreateModal(false);
                                        resetForm();
                                    }}
                                    className="rounded-md p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-slate-800"
                                >
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M6 18L18 6M6 6l12 12"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <form className="px-5 py-4 grid gap-4 md:grid-cols-2" onSubmit={handleCreate}>
                                <div className="md:col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Category <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={form.category}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        rows={3}
                                        value={form.description}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={form.website}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Images
                                    </label>
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        multiple
                                        onChange={handleChange}
                                        className="mt-1 block w-full text-sm text-gray-700 dark:text-gray-200 file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-gray-700 hover:file:bg-gray-200 dark:file:bg-slate-800 dark:file:text-gray-200 dark:hover:file:bg-slate-700"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Services (comma separated)
                                    </label>
                                    <input
                                        type="text"
                                        name="servicesText"
                                        value={form.servicesText}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                        placeholder="Consulting, Design, Development"
                                    />
                                </div>
                                <div className="flex items-center gap-2 md:col-span-2">
                                    <input
                                        id="available"
                                        type="checkbox"
                                        name="available"
                                        checked={form.available}
                                        onChange={handleChange}
                                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <label htmlFor="available" className="text-sm text-gray-700 dark:text-gray-200">
                                        Available
                                    </label>
                                </div>
                                <div className="md:col-span-2 flex justify-end gap-2 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowCreateModal(false);
                                            resetForm();
                                        }}
                                        className="inline-flex items-center rounded-lg border border-gray-300 dark:border-slate-700 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-colors"
                                    >
                                        Save business
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Delete confirmation modal */}
                {businessToDelete && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center">
                        <div
                            className="absolute inset-0 bg-black/40"
                            onClick={() => setBusinessToDelete(null)}
                        />
                        <div className="relative z-50 w-full max-w-md mx-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xl p-5 space-y-4">
                            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                Delete business
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Are you sure you want to delete{' '}
                                <span className="font-semibold">
                                    {businessToDelete.name}
                                </span>
                                ? This action cannot be undone.
                            </p>
                            <div className="flex justify-end gap-2 pt-1">
                                <button
                                    type="button"
                                    onClick={() => setBusinessToDelete(null)}
                                    className="inline-flex items-center rounded-lg border border-gray-300 dark:border-slate-700 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={confirmDelete}
                                    className="inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}

