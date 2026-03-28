import MainLayout from '../../Layouts/MainLayout';

export default function BusinessShow({ business }) {
    const services = business.services || [];
    const images = Array.isArray(business.image)
        ? business.image
        : business.image
        ? [business.image]
        : [];

    const toUrl = (path) =>
        path && /^https?:\/\//i.test(path) ? path : `/storage/${path}`;

    const primaryImage = images[0] || null;
    const secondary = images[1] || null;
    const tertiary = images[2] || null;

    return (
        <MainLayout title={business.name}>
            <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Image / collage */}
                    <div className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
                        {primaryImage ? (
                            <>
                                {images.length === 1 && (
                                    <img
                                        src={toUrl(primaryImage)}
                                        alt={business.name}
                                        className="h-80 w-full object-cover"
                                    />
                                )}
                                {images.length === 2 && (
                                    <div className="grid grid-cols-2 gap-1 h-80 p-1">
                                        <img
                                            src={toUrl(primaryImage)}
                                            alt={business.name}
                                            className="h-full w-full object-cover rounded-xl"
                                        />
                                        <img
                                            src={toUrl(secondary)}
                                            alt={business.name}
                                            className="h-full w-full object-cover rounded-xl"
                                        />
                                    </div>
                                )}
                                {images.length >= 3 && (
                                    <div className="grid grid-cols-2 grid-rows-2 gap-1 h-80 p-1">
                                        <img
                                            src={toUrl(primaryImage)}
                                            alt={business.name}
                                            className="row-span-2 h-full w-full object-cover rounded-xl"
                                        />
                                        <img
                                            src={toUrl(secondary)}
                                            alt={business.name}
                                            className="h-full w-full object-cover rounded-xl"
                                        />
                                        <div className="relative">
                                            <img
                                                src={toUrl(tertiary)}
                                                alt={business.name}
                                                className="h-full w-full object-cover rounded-xl"
                                            />
                                            {images.length > 3 && (
                                                <div className="absolute inset-0 rounded-xl bg-black/50 flex items-center justify-center text-xs font-semibold text-white">
                                                    +{images.length - 3} more
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="h-80 w-full flex items-center justify-center bg-gray-100 dark:bg-slate-800 text-sm text-gray-500 dark:text-gray-300">
                                No image available
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                                {business.name}
                            </h1>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                {business.category}
                            </p>
                        </div>

                        {business.description && (
                            <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                                {business.description}
                            </p>
                        )}

                        {services.length > 0 && (
                            <div>
                                <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                    አገልግሎቶች
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

                        {business.website && (
                            <div>
                                <h2 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                    Website
                                </h2>
                                <a
                                    href={business.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary-600 dark:text-primary-300 hover:underline break-all"
                                >
                                    {business.website}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

