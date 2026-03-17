import { useState } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function RoomDetail({ room, otherRooms = [] }) {
    const [showPhone, setShowPhone] = useState(false);
    const phoneNumber = '+251911234567'; // You can make this dynamic later

    const handleBookClick = () => {
        setShowPhone(true);
    };
    if (!room) {
        return (
            <MainLayout title="Room Not Found">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Room Not Found</h1>
                        <p className="text-gray-600 mb-6">The room you're looking for doesn't exist or is no longer available.</p>
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
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                >
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Rooms
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
                            <img
                                src={room.image}
                                alt={room.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        {room.available && (
                            <div className="absolute top-4 right-4">
                                <span className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
                                    Available
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="space-y-6">
                        {/* Header */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="inline-flex items-center rounded-md bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
                                    {room.floor}
                                </span>
                                <span className="text-sm text-gray-500">{room.size}</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                                {room.name}
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {room.description}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-4xl font-bold text-gray-900">
                                    {room.price}
                                </span>
                                <span className="text-lg text-gray-500">ETB</span>
                            </div>
                            <span className="text-sm text-gray-500">{room.period}</span>
                        </div>

                        {/* Capacity */}
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="font-medium">Capacity:</span>
                                <span>Up to {room.capacity} people</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                Features & Amenities
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {room.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="inline-flex items-center rounded-lg bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
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
                    <div className="mt-16 pt-16 border-t border-gray-200">
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                Other Available Rooms
                            </h2>
                            <p className="text-gray-600">
                                Explore more spaces that might suit your needs
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherRooms.map((otherRoom) => (
                                <Link
                                    key={otherRoom.id}
                                    href={`/open-rooms/${otherRoom.id}`}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-300"
                                >
                                    {/* Room Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={otherRoom.image}
                                            alt={otherRoom.name}
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
                                                {otherRoom.floor}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Room name */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                            {otherRoom.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {otherRoom.description}
                                        </p>

                                        {/* Size and capacity */}
                                        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                </svg>
                                                {otherRoom.size}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                Up to {otherRoom.capacity} people
                                            </span>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-xl font-bold text-gray-900">
                                                        {otherRoom.price}
                                                    </span>
                                                    <span className="text-xs text-gray-500">
                                                        ETB
                                                    </span>
                                                </div>
                                                <span className="text-xs text-gray-500">
                                                    {otherRoom.period}
                                                </span>
                                            </div>
                                            <span className="inline-flex items-center text-primary-600 text-sm font-medium">
                                                View Details
                                                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}

