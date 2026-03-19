import { Head } from '@inertiajs/react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';

export default function MainLayout({ children, title = 'Nudo' }) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
                <Navigation />
                <main className="grow">{children}</main>
                <Footer />
            </div>
        </>
    );
}

