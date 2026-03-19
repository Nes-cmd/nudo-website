import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function HeroImagesIndex({ heroes }) {
    const items = Array.isArray(heroes?.data) ? heroes.data : Array.isArray(heroes) ? heroes : [];
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [heroToDelete, setHeroToDelete] = useState(null);
    const [form, setForm] = useState({
        title: '',
        subtitle: '',
        image: null,
        sort: 0,
        active: true,
    });

    const resetForm = () =>
        setForm({
            title: '',
            subtitle: '',
            image: null,
            sort: 0,
            active: true,
        });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            setForm((prev) => ({
                ...prev,
                [name]: files && files[0] ? files[0] : null,
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
            title: form.title,
            subtitle: form.subtitle,
            sort: form.sort ?? 0,
            active: form.active,
        };

        if (form.image) {
            payload.image = form.image;
        }

        router.post(route('dashboard.hero-images.store'), payload, {
            forceFormData: true,
            onSuccess: () => {
                resetForm();
                setShowCreateModal(false);
            },
        });
    };

    const handleToggleActive = (hero) => {
        router.patch(
            route('dashboard.hero-images.update', hero.id),
            {
                title: hero.title,
                subtitle: hero.subtitle,
                sort: hero.sort,
                active: !hero.active,
            },
        );
    };

    const requestDelete = (hero) => {
        setHeroToDelete(hero);
    };

    const confirmDelete = () => {
        if (!heroToDelete) return;
        router.delete(route('dashboard.hero-images.destroy', heroToDelete.id), {
            onFinish: () => setHeroToDelete(null),
        });
    };

    const toUrl = (path) =>
        path && /^https?:\/\//i.test(path) ? path : `/storage/${path}`;

    return (
        <AuthenticatedLayout header={<span>Hero images</span>}>
            <Head title="Hero images" />

            <div className="px-4 py-6 sm:px-6 lg:px-8 space-y-6">
                {/* Toolbar */}
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Hero images
                    </h2>
                    <button
                        type="button"
                        onClick={() => setShowCreateModal(true)}
                        className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-colors"
                    >
                        Add hero
                    </button>
                </div>

                {/* List */}
                <section className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-sm p-6">
                    <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4">
                        Existing hero images
                    </h2>
                    {items.length === 0 ? (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            No hero images yet. Create one above.
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {items.map((hero) => (
                                <div
                                    key={hero.id}
                                    className="rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 p-3 flex items-center gap-4"
                                >
                                    <div className="h-16 w-28 rounded-md overflow-hidden bg-gray-200 dark:bg-slate-700 flex-shrink-0">
                                        {hero.image && (
                                            <img
                                                src={toUrl(hero.image)}
                                                alt={hero.title || 'Hero image'}
                                                className="h-full w-full object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                                {hero.title || 'Untitled'}
                                            </span>
                                            {!hero.active && (
                                                <span className="inline-flex items-center rounded-full bg-gray-200 dark:bg-slate-700 px-2 py-0.5 text-[10px] font-medium text-gray-600 dark:text-gray-300">
                                                    Inactive
                                                </span>
                                            )}
                                        </div>
                                        {hero.subtitle && (
                                            <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-1">
                                                {hero.subtitle}
                                            </p>
                                        )}
                                        <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                                            Sort: {hero.sort}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => handleToggleActive(hero)}
                                            className="inline-flex items-center rounded-lg border border-gray-300 dark:border-slate-600 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                                        >
                                            {hero.active ? 'Deactivate' : 'Activate'}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => requestDelete(hero)}
                                            className="inline-flex items-center rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Pagination */}
                {heroes.links && heroes.links.length > 1 && (
                    <nav className="flex justify-between items-center text-xs text-gray-600 dark:text-gray-300">
                        <div>
                            Page {heroes.current_page} of {heroes.last_page}
                        </div>
                        <div className="flex flex-wrap gap-1">
                            {heroes.links.map((link, idx) => (
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
                                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
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
                        <div className="relative z-50 w-full max-w-md mx-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xl">
                            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-slate-800">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                    Add hero image
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
                            <form className="px-5 py-4 space-y-4" onSubmit={handleCreate}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Subtitle
                                    </label>
                                    <input
                                        type="text"
                                        name="subtitle"
                                        value={form.subtitle}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                        Image <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleChange}
                                        className="mt-1 block w-full text-sm text-gray-700 dark:text-gray-200 file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-gray-700 hover:file:bg-gray-200 dark:file:bg-slate-800 dark:file:text-gray-200 dark:hover:file:bg-slate-700"
                                        required
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                            Sort order
                                        </label>
                                        <input
                                            type="number"
                                            name="sort"
                                            value={form.sort ?? 0}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                            placeholder="0"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 mt-5">
                                        <input
                                            id="active"
                                            type="checkbox"
                                            name="active"
                                            checked={form.active}
                                            onChange={handleChange}
                                            className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                        />
                                        <label htmlFor="active" className="text-xs text-gray-700 dark:text-gray-200">
                                            Active
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 pt-2">
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
                                        Save hero
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Delete confirmation modal */}
                {heroToDelete && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center">
                        <div
                            className="absolute inset-0 bg-black/40"
                            onClick={() => setHeroToDelete(null)}
                        />
                        <div className="relative z-50 w-full max-w-md mx-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xl p-5 space-y-4">
                            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                Delete hero image
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                Are you sure you want to delete{' '}
                                <span className="font-semibold">
                                    {heroToDelete.title || 'this hero image'}
                                </span>
                                ? This action cannot be undone.
                            </p>
                            <div className="flex justify-end gap-2 pt-1">
                                <button
                                    type="button"
                                    onClick={() => setHeroToDelete(null)}
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

