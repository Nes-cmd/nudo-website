import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function OpenRooms({ rooms = [] }) {
    return (
        <MainLayout title="Open Rooms">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-xs font-medium text-primary-700 uppercase tracking-wide mb-4">
                        Available for Rent
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Rooms <span className="text-primary-600">Available for Rent</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Premium meeting spaces and conference rooms available for monthly rental. Perfect for your business needs.
                    </p>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rooms.map((room) => (
                        <div
                            key={room.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-300"
                        >
                            {/* Room Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                                
                                {/* Available badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                                        Available
                                    </span>
                                </div>

                                {/* Floor badge */}
                                <div className="absolute bottom-4 left-4">
                                    <span className="inline-flex items-center rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-gray-900">
                                        {room.floor}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Room name */}
                                <Link href={`/open-rooms/${room.id}`}>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors cursor-pointer">
                                        {room.name}
                                    </h3>
                                </Link>

                                {/* Description */}
                                <p className="text-sm text-gray-600 mb-4">
                                    {room.description}
                                </p>

                                {/* Size and capacity */}
                                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                        </svg>
                                        {room.size}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Up to {room.capacity} people
                                    </span>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {room.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Price and booking */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-bold text-gray-900">
                                                {room.price}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                ETB
                                            </span>
                                        </div>
                                        <span className="text-xs text-gray-500">
                                            {room.period}
                                        </span>
                                    </div>
                                    <Link
                                        href={`/open-rooms/${room.id}`}
                                        className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-xs font-medium text-white hover:bg-primary-700 transition-colors"
                                    >
                                        Book Now
                                        <svg className="ml-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty state */}
                {rooms.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No rooms available at the moment.</p>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}

