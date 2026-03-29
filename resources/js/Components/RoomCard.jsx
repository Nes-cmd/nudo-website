import { Link } from '@inertiajs/react';

export default function RoomCard({ room }) {
    if (!room) return null;

    const formatPrice = (value) => {
        if (value === null || value === undefined) return '-';
        const num = Number(value);
        if (Number.isNaN(num)) return value;
        return new Intl.NumberFormat('en-ET', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(num);
    };

    const hasSize = !!room.size;
    const hasFeatures = Array.isArray(room.features) && room.features.length > 0;

    return (
        <div className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-primary-300">
            {/* Room Image */}
            <div className="relative h-48 overflow-hidden">
                {room.image && (
                    <img
                        src={room.image}
                        alt={room.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                {/* Available badge */}
                <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                        የሚከራይ
                    </span>
                </div>

                {/* Floor & size chips */}
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                    {room.floor && (
                        <span className="inline-flex items-center rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-gray-900">
                            {room.floor}
                        </span>
                    )}
                    {hasSize && (
                        <span className="inline-flex items-center rounded-md bg-white/80 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-gray-800">
                            {room.size} m²
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
                {/* Room name */}
                <Link href={`/open-rooms/${room.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors cursor-pointer">
                        {room.name}
                    </h3>
                </Link>

               
                {/* Features */}
                {hasFeatures && (
                    <div className="flex flex-wrap gap-2">
                        {room.features.slice(0, 3).map((feature) => (
                            <span
                                key={feature}
                                className="inline-flex items-center rounded-md bg-gray-100 dark:bg-slate-700 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
                            >
                                {feature}
                            </span>
                        ))}
                        {room.features.length > 3 && (
                            <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-slate-700 px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-300">
                                +{room.features.length - 3} more
                            </span>
                        )}
                    </div>
                )}

                {/* Price and link */}
                <div className="mt-2 flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700">
                    <div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                {formatPrice(room.price)}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                ብር
                            </span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            {room.period}
                        </span>
                    </div>
                    <Link
                        href={`/open-rooms/${room.id}`}
                        className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-xs font-medium text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-colors"
                    >
                        ዝርዝሩን እይ
                        <svg className="ml-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}

