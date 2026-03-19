import { Link, router } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import RoomCard from '@/Components/RoomCard';

export default function OpenRooms({ rooms }) {
    const items = Array.isArray(rooms?.data)
        ? rooms.data
        : Array.isArray(rooms)
        ? rooms
        : [];
    const formatPrice = (value) => {
        if (value === null || value === undefined) return '-';
        const num = Number(value);
        if (Number.isNaN(num)) return value;
        return new Intl.NumberFormat('en-ET', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(num);
    };
    return (
        <MainLayout title="Open Rooms">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-500/15 px-4 py-2 text-xs font-medium text-primary-700 dark:text-primary-300 uppercase tracking-wide mb-4">
                        Available for Rent
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Rooms <span className="text-primary-600 dark:text-primary-300">Available for Rent</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Premium meeting spaces and conference rooms available for monthly rental. Perfect for your business needs.
                    </p>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((room) => (
                        <RoomCard key={room.id} room={room} />
                    ))}
                </div>

                {/* Pagination */}
                {rooms?.links && rooms.links.length > 1 && (
                    <nav className="mt-10 flex flex-col items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <div className="mb-1">
                            Page {rooms.current_page} of {rooms.last_page}
                        </div>
                        <div className="flex flex-wrap justify-center gap-1">
                            {rooms.links.map((link, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    disabled={link.page === null || link.page === undefined}
                                    onClick={() => {
                                        if (!link.page || link.active) return;
                                        router.visit(`/open-rooms?page=${link.page}`, {
                                            preserveScroll: true,
                                        });
                                    }}
                                    className={`px-2.5 py-1 rounded-md border text-xs ${
                                        link.active
                                            ? 'bg-primary-600 border-primary-600 text-white'
                                            : !link.page
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

                {/* Empty state */}
                {items.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">No rooms available at the moment.</p>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}

