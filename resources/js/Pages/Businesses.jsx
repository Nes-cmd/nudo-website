import MainLayout from '../Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function Businesses({ businesses = [] }) {

    const toUrl = (path) =>
        path && /^https?:\/\//i.test(path) ? path : `/storage/${path}`;

    return (
        <MainLayout title="Businesses">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-500/15 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-300 uppercase tracking-wide">
                        Featured Businesses
                    </span>
                    <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                        ታዋቂ የንግድ ተቋማት እና ኤጀንሲዎች <span className="text-primary-600 dark:text-primary-300"> በገበያ ማዕከላችን ውስጥ</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
                        የታመኑ አስመጪዎች፣ ምርት አቅራቢዎችን፣ በውጭ ሀገር ስራ አገናኝ ኤጀንሲዎችን እና የህግ፣ የቴክኖሎጂ፣ የሂሳብ ስራ አገልግሎቶችን ያግኙ።
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {businesses.map((business) => {
                        const images = Array.isArray(business.image)
                            ? business.image
                            : business.image
                            ? [business.image]
                            : [];
                        const primaryImage = images[0] || null;

                        return (
                            <Link
                                key={business.id}
                                href={`/businesses/${business.id}`}
                                className="group relative block overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-800 backdrop-blur shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100/70 dark:border-slate-700"
                            >
                                {/* Image */}
                                <div className="relative h-40 sm:h-44 overflow-hidden">
                                    {primaryImage && (
                                        <img
                                            src={toUrl(primaryImage)}
                                            alt={business.name}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-80" />
                                    <div className="absolute bottom-3 left-4 flex items-center space-x-2">
                                        <span className="inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                                            {business.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col gap-4">
                                    <header>
                                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                                            {business.name}
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 min-h-[3.75rem]">
                                            {business.description}
                                        </p>
                                    </header>

                                    {/* Services tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {business.services.map((service) => (
                                            <span
                                                key={service}
                                                className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-500/15 px-2.5 py-1 text-xs font-medium text-primary-700 dark:text-primary-300"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-3 flex items-center justify-between">
                                        {business.website ? (
                                            <a
                                                href={business.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-xs font-medium shadow hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
                                            >
                                                Visit Website
                                                <svg
                                                    className="ml-2 h-3.5 w-3.5"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7 5L13 5L13 11"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M7 13L13 5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        ) : (
                                            <span className="text-[11px] uppercase tracking-wide text-gray-400 dark:text-gray-500">
                                                Available now
                                            </span>
                                        )}

                                        <span className="text-xs font-semibold text-primary-600 dark:text-primary-300 group-hover:text-primary-700 dark:group-hover:text-primary-200 transition-colors">
                                            View details &rarr;
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Empty state */}
                {businesses.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">No businesses available at the moment.</p>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}

