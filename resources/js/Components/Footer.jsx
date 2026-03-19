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
        <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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

                <div className="mt-8 border-t border-gray-200 dark:border-slate-800 pt-8">
                    <p className="text-base text-gray-500 dark:text-gray-400 text-center">
                        &copy; {currentYear} Nudo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

