import { Link } from '@inertiajs/react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About', href: '/about' },
            { name: 'Businesses', href: '/businesses' },
            { name: 'Open Rooms', href: '/open-rooms' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
        ],
        social: [
            { name: 'Twitter', href: '#', icon: 'twitter' },
            { name: 'GitHub', href: '#', icon: 'github' },
            { name: 'LinkedIn', href: '#', icon: 'linkedin' },
        ],
    };

    return (
        <footer className="relative mt-auto overflow-hidden border-t border-orange-100/70 bg-gradient-to-b from-white via-orange-50/30 to-stone-100/90 dark:border-slate-800 dark:from-slate-900/95 dark:via-slate-900/95 dark:to-slate-900/95">
            {/* Light: texture + glow — matches MainLayout */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.35] light-layout-dots dark:hidden" />
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-56 w-[min(56rem,100%)] -translate-x-1/2 rounded-full bg-primary-200/25 blur-3xl dark:hidden" />
            <div className="pointer-events-none absolute top-0 right-[12%] h-36 w-44 rounded-full bg-amber-200/20 blur-2xl dark:hidden" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200/40 to-transparent dark:hidden" />

            <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                            Nudo
                        </Link>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            Building modern, reactive applications with cutting-edge technology.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase">
                            Legal
                        </h3>
                        <ul className="mt-4 space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase">
                            Connect
                        </h3>
                        <ul className="mt-4 space-y-4">
                            {footerLinks.social.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-orange-100/60 dark:border-slate-800 pt-8">
                    <p className="text-base text-gray-500 dark:text-gray-400 text-center">
                        &copy; {currentYear} Nudo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

