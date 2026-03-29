/**
 * Static Nudo Market Center tenant list by category (Amharic).
 * Data comes from config/market_directory.php via Home page props.
 */

const iconClass = 'h-6 w-6';

function CategoryIcon({ index }) {
    const common = {
        className: iconClass,
        fill: 'none',
        viewBox: '0 0 24 24',
        stroke: 'currentColor',
        strokeWidth: 1.75,
        'aria-hidden': true,
    };

    switch (index % 12) {
        case 0:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"
                    />
                </svg>
            );
        case 1:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-2.496c.18-.18.35-.37.51-.571a3.08 3.08 0 010-3.856 3.08 3.08 0 00-4.286 0 3.08 3.08 0 010 3.856c-.14.2-.3.39-.51.571l-2.496 2.496zm3.5-9.14l.77-.77a.75.75 0 000-1.06l-.548-.547a.75.75 0 00-1.06 0l-.77.77m3.5 9.14l-3.5-3.5"
                    />
                </svg>
            );
        case 2:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            );
        case 3:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                </svg>
            );
        case 4:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                </svg>
            );
        case 5:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.75v-3.375c0-.621-.504-1.125-1.125-1.125H18m-9.75-3.75h3.375c.621 0 1.125.504 1.125 1.125V21M3.375 18h9.75a1.125 1.125 0 001.125-1.125V7.875C15.375 6.505 14.87 6 14.25 6H3.75A1.125 1.125 0 002.625 7.875V18A1.125 1.125 0 003.75 19.5z"
                    />
                </svg>
            );
        case 6:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                </svg>
            );
        case 7:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                </svg>
            );
        case 8:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                    />
                </svg>
            );
        case 9:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                </svg>
            );
        case 10:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                </svg>
            );
        default:
            return (
                <svg {...common}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25z"
                    />
                </svg>
            );
    }
}

/** Per-category header gradient + icon tile (Tailwind classes). */
const categoryHeaderStyles = [
    {
        gradient: 'from-amber-500/15 via-white to-orange-50/50 dark:from-amber-950/40 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-amber-700 dark:text-amber-300 ring-amber-200/70 dark:ring-amber-800/50 bg-amber-500/[0.14] dark:bg-amber-500/15',
    },
    {
        gradient: 'from-slate-500/12 via-white to-slate-100/60 dark:from-slate-800/60 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-slate-700 dark:text-slate-200 ring-slate-200/80 dark:ring-slate-600/50 bg-slate-500/[0.12] dark:bg-slate-500/15',
    },
    {
        gradient: 'from-sky-500/14 via-white to-sky-50/50 dark:from-sky-950/40 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-sky-700 dark:text-sky-300 ring-sky-200/70 dark:ring-sky-800/50 bg-sky-500/[0.12] dark:bg-sky-500/15',
    },
    {
        gradient: 'from-violet-500/12 via-white to-violet-50/45 dark:from-violet-950/35 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-violet-700 dark:text-violet-300 ring-violet-200/70 dark:ring-violet-800/50 bg-violet-500/[0.12] dark:bg-violet-500/15',
    },
    {
        gradient: 'from-emerald-500/12 via-white to-emerald-50/45 dark:from-emerald-950/35 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-emerald-700 dark:text-emerald-300 ring-emerald-200/70 dark:ring-emerald-800/50 bg-emerald-500/[0.12] dark:bg-emerald-500/15',
    },
    {
        gradient: 'from-rose-500/12 via-white to-rose-50/45 dark:from-rose-950/35 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-rose-700 dark:text-rose-300 ring-rose-200/70 dark:ring-rose-800/50 bg-rose-500/[0.12] dark:bg-rose-500/15',
    },
    {
        gradient: 'from-cyan-500/12 via-white to-cyan-50/45 dark:from-cyan-950/35 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-cyan-700 dark:text-cyan-300 ring-cyan-200/70 dark:ring-cyan-800/50 bg-cyan-500/[0.12] dark:bg-cyan-500/15',
    },
    {
        gradient: 'from-fuchsia-500/12 via-white to-fuchsia-50/40 dark:from-fuchsia-950/30 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-fuchsia-700 dark:text-fuchsia-300 ring-fuchsia-200/70 dark:ring-fuchsia-800/50 bg-fuchsia-500/[0.12] dark:bg-fuchsia-500/15',
    },
    {
        gradient: 'from-orange-500/12 via-white to-orange-50/40 dark:from-orange-950/30 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-orange-700 dark:text-orange-300 ring-orange-200/70 dark:ring-orange-800/50 bg-orange-500/[0.12] dark:bg-orange-500/15',
    },
    {
        gradient: 'from-pink-500/12 via-white to-pink-50/40 dark:from-pink-950/30 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-pink-700 dark:text-pink-300 ring-pink-200/70 dark:ring-pink-800/50 bg-pink-500/[0.12] dark:bg-pink-500/15',
    },
    {
        gradient: 'from-indigo-500/12 via-white to-indigo-50/40 dark:from-indigo-950/35 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-indigo-700 dark:text-indigo-300 ring-indigo-200/70 dark:ring-indigo-800/50 bg-indigo-500/[0.12] dark:bg-indigo-500/15',
    },
    {
        gradient: 'from-primary-500/15 via-white to-primary-50/50 dark:from-primary-950/40 dark:via-slate-900 dark:to-slate-900',
        iconWrap: 'text-primary-700 dark:text-primary-300 ring-primary-200/70 dark:ring-primary-800/50 bg-primary-500/[0.12] dark:bg-primary-500/15',
    },
];

/** Normalize config item: `{ name, address }` or legacy string. */
function normalizeDirectoryItem(raw) {
    if (raw && typeof raw === 'object' && 'name' in raw) {
        return {
            name: String(raw.name ?? ''),
            address: String(raw.address ?? '').trim(),
        };
    }
    if (typeof raw === 'string') {
        return { name: raw, address: '' };
    }
    return { name: '', address: '' };
}

const scrollListClass =
    'h-full min-h-0 overflow-y-auto overscroll-y-contain pb-1 ' +
    '[scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgb(203_213_225)_transparent] ' +
    'dark:[scrollbar-color:rgb(71_85_105)_transparent] ' +
    '[&::-webkit-scrollbar]:w-2 ' +
    '[&::-webkit-scrollbar-track]:bg-transparent ' +
    '[&::-webkit-scrollbar-thumb]:rounded-full ' +
    '[&::-webkit-scrollbar-thumb]:bg-slate-300/90 ' +
    'hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 ' +
    'dark:[&::-webkit-scrollbar-thumb]:bg-slate-600 ' +
    'dark:hover:[&::-webkit-scrollbar-thumb]:bg-slate-500';

export default function MarketDirectoryGrid({ categories = [] }) {
    if (!Array.isArray(categories) || categories.length === 0) {
        return null;
    }

    return (
        <section
            className="mt-16 sm:mt-20 border-t border-gray-200 dark:border-slate-800 pt-14 sm:pt-16"
            aria-labelledby="market-directory-heading"
        >
            <div className="text-center mb-10 sm:mb-12">
                <span className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-600/50">
                    ዝርዝር ማውጫ
                </span>
                <h2
                    id="market-directory-heading"
                    className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white"
                >
                    በገበያ ማዕከሉ ያሉ አገልግሎቶች
                </h2>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    በምድብ የተደራጁ የንግድ ተቋማት እና አገልግሎቶች።
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {categories.map((category, catIndex) => {
                    const items = Array.isArray(category.items) ? category.items : [];
                    const title = category.title || `ምድብ ${catIndex + 1}`;
                    const styles = categoryHeaderStyles[catIndex % categoryHeaderStyles.length];

                    return (
                        <article
                            key={`${title}-${catIndex}`}
                            className="group flex flex-col rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/30 dark:bg-slate-950/20 backdrop-blur-xl shadow-md shadow-gray-200/20 dark:shadow-black/20 overflow-hidden ring-1 ring-black/[0.04] dark:ring-white/[0.06]"
                        >
                            <div
                                className={`relative overflow-hidden border-b border-gray-100/90 dark:border-slate-800 bg-gradient-to-br ${styles.gradient} px-5 py-4 sm:py-5`}
                            >
                                <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-white/50 blur-2xl dark:bg-white/[0.06]" />
                                <div className="pointer-events-none absolute -left-4 bottom-0 h-16 w-32 rounded-full bg-primary-400/10 blur-2xl dark:bg-primary-400/5" />
                                <div className="relative flex items-center gap-4">
                                    <div
                                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-2 shadow-md backdrop-blur-[2px] ${styles.iconWrap}`}
                                    >
                                        <CategoryIcon index={catIndex} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                                            ምድብ {String(catIndex + 1).padStart(2, '0')}
                                        </p>
                                        <h3 className="mt-1 text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug">
                                            {title}
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex-1 min-h-0 bg-transparent p-4 sm:p-5">
                                {items.length === 0 ? (
                                    <div
                                        className="flex items-center justify-center rounded-xl border border-dashed border-gray-300/50 dark:border-white/15 bg-white/25 dark:bg-white/[0.06] backdrop-blur-md px-4"
                                        style={{ minHeight: 'min(22rem, 55vh)' }}
                                    >
                                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center leading-relaxed py-10">
                                            በዚህ ክፍል ውስጥ አገልግሎቶች ይገኛሉ።
                                        </p>
                                    </div>
                                ) : (
                                    <div
                                        className="relative rounded-xl border border-gray-200/50 dark:border-white/10 bg-white/20 dark:bg-white/[0.04] backdrop-blur-md shadow-inner shadow-black/5 dark:shadow-black/20"
                                        style={{ height: 'min(22rem, 55vh)' }}
                                    >
                                        <ul
                                            className={`${scrollListClass} grid grid-cols-1 sm:grid-cols-2 gap-2.5 content-start p-3 sm:p-4`}
                                        >
                                            {items.map((raw, i) => {
                                                const { name, address } = normalizeDirectoryItem(raw);
                                                return (
                                                    <li
                                                        key={`${title}-${i}-${name}`}
                                                        className="flex items-start gap-2.5 rounded-xl border border-gray-200/50 dark:border-white/10 bg-white/45 dark:bg-white/[0.07] backdrop-blur-sm px-3 py-2.5 text-sm text-gray-800 dark:text-gray-100 shadow-sm transition-all duration-200 hover:border-primary-300/70 hover:bg-white/70 dark:hover:border-primary-400/30 dark:hover:bg-white/[0.12]"
                                                    >
                                                        <span
                                                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-sm ring-2 ring-primary-500/20"
                                                            aria-hidden
                                                        />
                                                        <div className="min-w-0 flex-1">
                                                            <span className="block font-medium leading-snug">{name}</span>
                                                            {address ? (
                                                                <span className="mt-1 block text-[11px] leading-tight text-gray-500 dark:text-gray-400">
                                                                    {address}
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <div
                                            className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-b-xl bg-gradient-to-t from-stone-100/75 via-stone-50/25 to-transparent dark:from-slate-950/45 dark:via-transparent dark:to-transparent"
                                            aria-hidden
                                        />
                                    </div>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
