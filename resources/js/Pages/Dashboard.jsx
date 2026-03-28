import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

const defaultStats = {
    businesses: 0,
    rooms: 0,
    totalRooms: 0,
    customersIn: 0,
    customersOut: 0,
};

export default function Dashboard({ heroes = [], stats: statsProp }) {
    const stats = { ...defaultStats, ...statsProp };
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

    const toUrl = (path) =>
        path && /^https?:\/\//i.test(path) ? path : `/storage/${path}`;

    const requestDelete = (hero) => {
        setHeroToDelete(hero);
    };

    const confirmDelete = () => {
        if (!heroToDelete) return;
        router.delete(route('dashboard.hero-images.destroy', heroToDelete.id), {
            onFinish: () => setHeroToDelete(null),
        });
    };

    const statCards = [
        {
            label: 'Businesses',
            value: stats.businesses,
            valueClass:
                'text-gray-900 dark:text-white',
            accent: 'border-l-primary-500 bg-gradient-to-br from-primary-50/80 to-white dark:from-primary-950/40 dark:to-slate-900',
        },
        {
            label: 'Rooms',
            value: stats.rooms,
            valueClass: 'text-gray-900 dark:text-white',
            accent:
                'border-l-sky-500 bg-gradient-to-br from-sky-50/80 to-white dark:from-sky-950/35 dark:to-slate-900',
        },
        {
            label: 'Total rooms',
            value: stats.totalRooms,
            valueClass:
                'text-primary-700 dark:text-primary-300',
            accent:
                'border-l-violet-500 bg-gradient-to-br from-violet-50/80 to-white dark:from-violet-950/35 dark:to-slate-900',
        },
        {
            label: 'Customers in',
            value: stats.customersIn,
            valueClass:
                'text-emerald-700 dark:text-emerald-300',
            accent:
                'border-l-emerald-500 bg-gradient-to-br from-emerald-50/80 to-white dark:from-emerald-950/35 dark:to-slate-900',
        },
        {
            label: 'Customers out',
            value: stats.customersOut,
            valueClass:
                'text-amber-700 dark:text-amber-300',
            accent:
                'border-l-amber-500 bg-gradient-to-br from-amber-50/80 to-white dark:from-amber-950/30 dark:to-slate-900',
        },
    ];

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                    Overview
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="px-4 py-6 sm:px-6 lg:px-8 space-y-8">
                <section
                    aria-labelledby="dashboard-stats-heading"
                    className="rounded-2xl border border-gray-200/90 dark:border-slate-700/90 bg-white dark:bg-slate-900 shadow-md shadow-gray-200/40 dark:shadow-black/20 overflow-hidden"
                >
                    <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-gray-100 dark:border-slate-800/80 bg-gradient-to-r from-gray-50/90 to-white dark:from-slate-800/40 dark:to-slate-900">
                        <h3
                            id="dashboard-stats-heading"
                            className="text-base font-semibold text-gray-900 dark:text-white tracking-tight"
                        >
                            At a glance
                        </h3>
                        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                            Key numbers across your site
                        </p>
                    </div>
                    <div className="p-4 sm:p-6">
                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
                            {statCards.map((card) => (
                                <div
                                    key={card.label}
                                    className={`rounded-2xl border border-gray-200/70 dark:border-slate-700/80 border-l-4 pl-4 pr-3 py-4 shadow-sm transition-shadow hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/25 ${card.accent}`}
                                >
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                        {card.label}
                                    </p>
                                    <p
                                        className={`mt-2 text-3xl font-bold tabular-nums tracking-tight ${card.valueClass}`}
                                    >
                                        {card.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    aria-labelledby="dashboard-hero-heading"
                    className="rounded-2xl border border-gray-200/90 dark:border-slate-700/90 bg-white dark:bg-slate-900 shadow-md shadow-gray-200/40 dark:shadow-black/20 overflow-hidden"
                >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-5 py-4 sm:px-6 sm:py-5 border-b border-gray-100 dark:border-slate-800/80 bg-gradient-to-r from-gray-50/90 to-white dark:from-slate-800/40 dark:to-slate-900">
                        <div>
                            <h3
                                id="dashboard-hero-heading"
                                className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight"
                            >
                                Hero images
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 max-w-xl">
                                Images shown on the home page carousel. Add, preview, or remove slides below.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowCreateModal(true)}
                            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-colors"
                        >
                            Add hero
                        </button>
                    </div>
                    <div className="p-5 sm:p-6 bg-gray-50/50 dark:bg-slate-950/20">
                        {(!heroes || heroes.length === 0) ? (
                            <div className="rounded-xl border border-dashed border-gray-300 dark:border-slate-600 bg-white/60 dark:bg-slate-900/40 px-6 py-10 text-center">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    No hero images yet. Use <span className="font-medium text-gray-800 dark:text-gray-200">Add hero</span> to create one.
                                </p>
                            </div>
                        ) : (
                            <div className="flex gap-4 overflow-x-auto pb-2 pt-0.5">
                                {heroes.map((hero) => (
                                    <div
                                        key={hero.id}
                                        className="relative flex-shrink-0 w-44 h-28 rounded-xl overflow-hidden bg-gray-200 dark:bg-slate-800 ring-1 ring-gray-200/80 dark:ring-slate-700 shadow-sm"
                                    >
                                        {hero.image && (
                                            <img
                                                src={toUrl(hero.image)}
                                                alt={hero.title || 'Hero image'}
                                                className="h-full w-full object-cover"
                                            />
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => requestDelete(hero)}
                                            className="absolute top-2 right-2 inline-flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/75 h-7 w-7 text-sm font-medium shadow-md backdrop-blur-sm transition-colors"
                                            title="Remove"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>

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
        </AuthenticatedLayout>
    );
}
