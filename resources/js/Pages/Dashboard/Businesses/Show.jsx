import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function BusinessShow({ business }) {
    const services = business.services || [];
    const images = Array.isArray(business.image)
        ? business.image
        : business.image
        ? [business.image]
        : [];
    const toUrl = (path) =>
        path && /^https?:\/\//i.test(path) ? path : `/storage/${path}`;
    const hasImage = images.length > 0;

    return (
        <AuthenticatedLayout
            header={<span>Business details</span>}
        >
            <Head title={business.name} />

            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto space-y-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {business.name}
                        </h1>
                        <div className="flex items-center gap-3">
                            <Link
                                href={route('dashboard.businesses.edit', business.id)}
                                className="text-sm text-primary-600 dark:text-primary-300 hover:underline"
                            >
                                Edit
                            </Link>
                            <Link

                                href={route('dashboard.businesses.index')}
                                className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
                            >
                                Back to list
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                        {/* Image / preview */}
                        <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
                            {hasImage ? (
                                <>
                                    <img
                                        src={toUrl(images[0])}
                                        alt={business.name}
                                        className="h-64 w-full object-cover"
                                    />
                                    {images.length > 1 && (
                                        <div className="px-4 py-3 border-t border-gray-200 dark:border-slate-800 flex gap-2 overflow-x-auto">
                                            {images.slice(1).map((img, idx) => (
                                                <img
                                                    key={idx}
                                                    src={toUrl(img)}
                                                    alt={`${business.name} ${idx + 2}`}
                                                    className="h-16 w-24 object-cover rounded-md border border-gray-200 dark:border-slate-700"
                                                />
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="h-64 w-full flex items-center justify-center bg-linear-to-br from-slate-800 to-slate-900 text-gray-200 text-sm">
                                    No image provided
                                </div>
                            )}
                        </div>

                        {/* Details */}
                        <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-500/15 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-300">
                                    {business.category}
                                </span>
                                {business.available && (
                                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                                        Available
                                    </span>
                                )}
                            </div>

                            {business.description && (
                                <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                                    {business.description}
                                </p>
                            )}

                            {services.length > 0 && (
                                <div>
                                    <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                        Services
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {services.map((service) => (
                                            <span
                                                key={service}
                                                className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-500/15 px-2.5 py-1 text-xs font-medium text-primary-700 dark:text-primary-300"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <dt className="text-gray-500 dark:text-gray-400">Website</dt>
                                    <dd className="mt-1">
                                        {business.website ? (
                                            <a
                                                href={business.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary-600 dark:text-primary-300 hover:underline break-all"
                                            >
                                                {business.website}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400">Not set</span>
                                        )}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-gray-500 dark:text-gray-400">ID</dt>
                                    <dd className="mt-1 text-gray-700 dark:text-gray-200">
                                        {business.id}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

