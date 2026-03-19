import { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function BusinessEdit({ business }) {
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState(null);
    const initialImages = Array.isArray(business.image)
        ? business.image
        : business.image
        ? [business.image]
        : [];
    const [keptImages, setKeptImages] = useState(initialImages);
    const [form, setForm] = useState({
        name: business.name || '',
        description: business.description || '',
        category: business.category || '',
        image: [],
        website: business.website || '',
        servicesText: (business.services || []).join(', '),
        available: !!business.available,
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
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

        payload.keep_images = keptImages;

        if (form.image.length > 0) {
            payload.image = form.image;
        }

        router.post(route('dashboard.businesses.update', business.id), { _method: 'patch', ...payload }, {
            forceFormData: true,
            onError: (err) => {
                setErrors(err || {});
                setProcessing(false);
            },
            onSuccess: () => {
                setProcessing(false);
                setToast('Business updated successfully.');
            },
        });
    };

    useEffect(() => {
        if (!toast) return;
        const id = setTimeout(() => setToast(null), 3000);
        return () => clearTimeout(id);
    }, [toast]);

    return (
        <AuthenticatedLayout
            header={<span>Edit business</span>}
        >
            <Head title={`Edit ${business.name}`} />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Edit {business.name}
                        </h1>
                        <Link
                            href={route('dashboard.businesses.show', business.id)}
                            className="text-sm text-primary-600 dark:text-primary-300 hover:underline"
                        >
                            View details
                        </Link>
                    </div>

                    {toast && (
                        <div className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200">
                            {toast}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 grid gap-4 md:grid-cols-2"
                    >
                        <div className="md:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                required
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div className="md:col-span-1">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-lg border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-100 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                required
                            />
                            {errors.category && (
                                <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                                    {errors.category}
                                </p>
                            )}
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
                            {errors.description && (
                                <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                                    {errors.description}
                                </p>
                            )}
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                                Existing images
                            </label>
                            {keptImages.length === 0 ? (
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    No images will be kept. Upload new ones below if needed.
                                </p>
                            ) : (
                                <div className="flex flex-wrap gap-3">
                                    {keptImages.map((img) => (
                                        <div
                                            key={img}
                                            className="relative h-20 w-32 rounded-md overflow-hidden border border-gray-200 dark:border-slate-700"
                                        >
                                            <img
                                                src={img.startsWith('http') ? img : `/storage/${img}`}
                                                alt={business.name}
                                                className="h-full w-full object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setKeptImages((prev) =>
                                                        prev.filter((p) => p !== img),
                                                    )
                                                }
                                                className="absolute top-1 right-1 rounded-full bg-black/60 text-white hover:bg-black/80 p-1"
                                            >
                                                <svg
                                                    className="h-3 w-3"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
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
                                    ))}
                                </div>
                            )}
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
                            {errors.website && (
                                <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                                    {errors.website}
                                </p>
                            )}
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
                            {business.image && (
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    Current images kept unless new files are uploaded.
                                </p>
                            )}
                            {errors.image && (
                                <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                                    {errors.image}
                                </p>
                            )}
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
                            <Link
                                href={route('dashboard.businesses.index')}
                                className="inline-flex items-center rounded-lg border border-gray-300 dark:border-slate-700 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {processing ? 'Saving...' : 'Save changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

