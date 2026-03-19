import { Head } from '@inertiajs/react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Starfield from '../Components/Starfield';

export default function MainLayout({ children, title = 'Nudo' }) {
    return (
        <>
            <Head title={title} />
            <div className="relative min-h-screen bg-gray-50 dark:bg-slate-900/95 text-gray-900 dark:text-gray-100 flex flex-col">
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

