import { useState } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import RoomCard from '@/Components/RoomCard';

export default function RoomDetail({ room, otherRooms = [] }) {
    const [showPhone, setShowPhone] = useState(false);
    const phoneNumber = '+251911234567'; // You can make this dynamic later

    const formatPrice = (value) => {
        if (value === null || value === undefined) return '-';
        const num = Number(value);
        if (Number.isNaN(num)) return value;
        return new Intl.NumberFormat('en-ET', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(num);
    };

    const handleBookClick = () => {
        setShowPhone(true);
    };
    if (!room) {
        return (
            <MainLayout title="Room Not Found">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Room Not Found
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            The room you're looking for doesn't exist or is no longer available.
                        </p>
                        <Link
                            href="/open-rooms"
                            className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
                        >
                            View All Rooms
                        </Link>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout title={room.name}>
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Back button */}
                <Link
                    href="/open-rooms"
                    className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
                >
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Rooms
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 dark:bg-slate-800">
                            {room.image && (
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="h-full w-full object-cover"
                                />
                            )}
                        </div>
                        <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
                                Available
                            </span>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-6">
                        {/* Header */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                {room.floor && (
                                    <span className="inline-flex items-center rounded-md bg-primary-100 dark:bg-primary-500/15 px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-300">
                                        {room.floor}
                                    </span>
                                )}
                                {room.size && (
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {room.size} m²
                                    </span>
                                )}
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                                {room.name}
                            </h1>
                            {room.description && room.description !== room.name && (
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {room.description}
                                </p>
                            )}
                        </div>

                        {/* Price */}
                        <div className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                    {formatPrice(room.price)}
                                </span>
                                <span className="text-lg text-gray-500 dark:text-gray-400">
                                    ETB
                                </span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {room.period}
                            </span>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Features & Amenities
                            </h2>
                            {room.features && room.features.length > 0 && (
                                <div className="flex flex-wrap gap-3">
                                    {room.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="inline-flex items-center rounded-lg bg-primary-50 dark:bg-primary-500/15 px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Booking Button */}
                        <div className="pt-4 space-y-3">
                            {!showPhone ? (
                                <button
                                    type="button"
                                    onClick={handleBookClick}
                                    className="w-full inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white hover:bg-primary-700 transition-colors shadow-lg"
                                >
                                    Book This Room
                                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            ) : (
                                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                                    <p className="text-sm text-gray-600 mb-2">Call us to book this room:</p>
                                    <a
                                        href={`tel:${phoneNumber}`}
                                        className="inline-flex items-center text-lg font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                                    >
                                        <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {phoneNumber}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Other Rooms Section */}
                {otherRooms.length > 0 && (
                    <div className="mt-16 pt-16 border-t border-gray-200 dark:border-slate-800">
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                Other Available Rooms
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Explore more spaces that might suit your needs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherRooms.map((otherRoom) => (
                                <RoomCard key={otherRoom.id} room={otherRoom} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}

