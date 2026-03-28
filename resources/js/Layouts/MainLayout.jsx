import { Head } from '@inertiajs/react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Starfield from '../Components/Starfield';

export default function MainLayout({ children, title = 'Nudo' }) {
    return (
        <>
            <Head title={title} />
            <div className="relative min-h-screen bg-stone-50 text-gray-900 dark:bg-slate-900/95 dark:text-gray-100 flex flex-col">
                {/* Light: warm layered backdrop — hidden in dark */}
                <div
                    className="light-layout-backdrop pointer-events-none fixed inset-0 z-0 block overflow-hidden dark:hidden"
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-orange-50/40 to-stone-100/95" />
                    <div className="absolute -top-48 left-[5%] h-[32rem] w-[32rem] rounded-full bg-primary-300/25 blur-3xl" />
                    <div className="absolute top-1/4 -right-40 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
                    <div className="absolute bottom-0 left-1/2 h-72 w-[min(140%,56rem)] -translate-x-1/2 rounded-[100%] bg-gradient-to-t from-primary-100/50 via-orange-50/30 to-transparent" />
                    <div className="absolute inset-0 opacity-[0.45] light-layout-dots" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200/40 to-transparent" />
                </div>
                {/* Midnight starfield — dark mode only */}
                <div className="midnight-starfield pointer-events-none fixed inset-0 z-0 hidden dark:block">
                    <Starfield />
                </div>
                <div className="relative z-10 flex min-h-screen flex-1 flex-col">
                    <Navigation />
                    <main className="grow">{children}</main>
                    <Footer />
                </div>
            </div>
        </>
    );
}

