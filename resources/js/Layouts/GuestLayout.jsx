import ApplicationLogo from '@/Components/ApplicationLogo';
import DarkModeToggle from '@/Components/DarkModeToggle';
import Starfield from '@/Components/Starfield';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="relative flex min-h-screen flex-col items-center bg-gray-100 pt-6 text-gray-900 dark:bg-slate-900/95 dark:text-gray-100 sm:justify-center sm:pt-0">
            <div className="midnight-starfield pointer-events-none fixed inset-0 z-0 hidden dark:block">
                <Starfield />
            </div>
            <div className="absolute right-4 top-4 z-10">
                <DarkModeToggle />
            </div>

            <div className="relative z-10">
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500 dark:text-gray-300" />
                </Link>
            </div>

            <div className="relative z-10 mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md dark:border dark:border-slate-800 dark:bg-slate-900/95 sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
