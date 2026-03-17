import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { url } = usePage();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Businesses', href: '/businesses' },
        { name: 'Open Rooms', href: '/open-rooms' },
    ];

    const isActive = (href) => {
        if (href === '/') {
            return url === '/';
        }
        return url.startsWith(href);
    };

    return (
        <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <div className="shrink-0 flex items-center">
                            <Link 
                                href="/" 
                                className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-primary-600 via-primary-500 to-primary-600 hover:from-primary-700 hover:via-primary-600 hover:to-primary-700 transition-all duration-300"
                            >
                                Nudo
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
                                                ? 'text-primary-600 bg-primary-50'
                                                : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
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
                        <div className="hidden sm:block">
                            <DarkModeToggle />
                        </div>
                        <div className="sm:hidden flex items-center space-x-2">
                            <DarkModeToggle />
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
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
                <div className="sm:hidden border-t border-gray-200 bg-white">
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
                                            : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
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
                    </div>
                </div>
            )}
        </nav>
    );
}

