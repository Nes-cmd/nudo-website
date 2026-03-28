import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import ApplicationLogo from './ApplicationLogo';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { url, props } = usePage();
    const { auth } = props;

    const navigation = [
        { name: 'ዋና ገፅ', href: '/' },
        { name: 'ስለ ኑዶ', href: '/about' },
        { name: 'ንግዶች', href: '/businesses' },
        { name: 'የሚከራዩ ክፍሎች', href: '/open-rooms' },
    ];

    const isActive = (href) => {
        if (href === '/') {
            return url === '/';
        }
        return url.startsWith(href);
    };

    return (
        <nav className="sticky top-0 z-50 overflow-hidden border-b border-orange-100/70 bg-white/80 shadow-sm backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/95">
            {/* Light: warm glass bar — matches MainLayout */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-50/70 via-white/55 to-amber-50/55 dark:hidden" />
            <div className="pointer-events-none absolute -top-20 left-[18%] h-40 w-[min(42rem,85vw)] rounded-full bg-primary-200/30 blur-2xl dark:hidden" />
            <div className="pointer-events-none absolute -top-8 right-[8%] h-28 w-48 rounded-full bg-amber-200/25 blur-2xl dark:hidden" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-300/35 to-transparent dark:hidden" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <div className="shrink-0 flex items-center">
                        <Link href="/">
                            <ApplicationLogo />
                        </Link>
                        </div>
                        <div className="hidden sm:ml-10 sm:flex sm:space-x-1">
                            {navigation.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                                            active
                                                ? 'text-primary-600 bg-primary-50 dark:text-primary-300 dark:bg-slate-800'
                                                : 'text-gray-600 hover:text-primary-600 hover:bg-orange-50/80 dark:text-gray-200 dark:hover:text-primary-300 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        {item.name}
                                        {active && (
                                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="hidden sm:flex items-center space-x-3">
                            <DarkModeToggle />
                            {auth?.user ? (
                                <>
                                    <Link
                                        href="/dashboard"
                                        className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                   
                                </>
                            ) : (
                                <>
                                    {/* <Link
                                        href="/login"
                                        className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300"
                                    >
                                        Log in
                                    </Link> */}
                                    <Link
                                        href="/login"
                                        className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-colors"
                                    >
                                        Login
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className="sm:hidden flex items-center space-x-2">
                            <DarkModeToggle />
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-orange-50/90 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 dark:hover:bg-slate-800"
                                aria-label="Toggle menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    {mobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="relative z-10 sm:hidden border-t border-orange-100/70 bg-gradient-to-b from-white/98 to-orange-50/45 dark:border-slate-800 dark:from-slate-900 dark:to-slate-900">
                    <div className="pt-2 pb-4 space-y-1 px-2">
                        {navigation.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative flex items-center pl-4 pr-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                                        active
                                            ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-500'
                                            : 'text-gray-600 hover:text-primary-600 hover:bg-orange-50/80 dark:hover:bg-slate-800'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                    {active && (
                                        <svg
                                            className="ml-auto h-5 w-5 text-primary-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </Link>
                            );
                        })}

                        <div className="mt-4 border-t border-orange-100/60 pt-4 space-y-2 dark:border-slate-800">
                            {auth?.user ? (
                                <>
                                    <Link
                                        href="/dashboard"
                                        className="block w-full text-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Dashboard
                                    </Link>
                                   
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="block w-full text-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-orange-50/90 transition-colors dark:border-slate-600 dark:text-gray-200 dark:hover:bg-slate-800"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="block w-full text-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Sign up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

