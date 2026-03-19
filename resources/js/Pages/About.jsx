import MainLayout from '../Layouts/MainLayout';

export default function About() {
    const milestones = [
        {
            year: '1995',
            title: 'Foundation',
            description: 'Nudo Commercial Building was established, marking the beginning of a new era in commercial real estate.',
        },
        {
            year: '2000',
            title: 'First Expansion',
            description: 'Completed first major expansion, doubling our capacity and welcoming 20+ new businesses.',
        },
        {
            year: '2010',
            title: 'Modernization',
            description: 'Underwent comprehensive modernization, introducing state-of-the-art facilities and sustainable practices.',
        },
        {
            year: '2015',
            title: 'Award Recognition',
            description: 'Received the prestigious Commercial Building Excellence Award for outstanding service and innovation.',
        },
        {
            year: '2020',
            title: 'Digital Transformation',
            description: 'Launched digital platform to enhance tenant experience and streamline operations.',
        },
        {
            year: '2024',
            title: 'Continued Growth',
            description: 'Celebrating nearly 30 years of excellence with 50+ businesses and 200+ services.',
        },
    ];

    const values = [
        {
            icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: 'Excellence',
            description: 'We maintain the highest standards in everything we do, from facility management to tenant relations.',
        },
        {
            icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Community',
            description: 'Building a thriving ecosystem where businesses collaborate, grow, and succeed together.',
        },
        {
            icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Innovation',
            description: 'Continuously evolving our facilities and services to meet the changing needs of modern businesses.',
        },
        {
            icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: 'Commitment',
            description: 'Dedicated to providing exceptional service and creating lasting value for our tenants.',
        },
    ];

    const stats = [
        { label: 'Years of Excellence', value: '30+' },
        { label: 'Active Businesses', value: '50+' },
        { label: 'Services Offered', value: '200+' },
        { label: 'Satisfied Tenants', value: '1000+' },
    ];

    return (
        <MainLayout title="About">
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 sm:py-24">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm">
                            Since 1995
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Building Success Stories for{' '}
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-200 to-yellow-200">
                                Three Decades
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
                            Nudo Commercial Building has been a cornerstone of business excellence, providing premium spaces
                            where innovation meets opportunity and dreams become reality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white dark:bg-slate-900 py-12 border-b border-gray-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl sm:text-5xl font-bold text-primary-600 dark:text-primary-300 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-500/15 px-4 py-2 text-xs font-medium text-primary-700 dark:text-primary-300 uppercase tracking-wide mb-4">
                                Our Story
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                A Legacy of Excellence
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Founded in 1995, Nudo Commercial Building emerged as a vision to create a premier business
                                    hub that would serve as the foundation for countless success stories. What started as a
                                    single building has grown into a thriving commercial ecosystem.
                                </p>
                                <p>
                                    Over the years, we've witnessed businesses grow from startups to industry leaders, hosted
                                    thousands of meetings and events, and built a community that values collaboration and
                                    innovation. Our commitment to excellence has made us a trusted name in commercial real estate.
                                </p>
                                <p>
                                    Today, Nudo stands as a testament to what can be achieved when vision meets dedication.
                                    We continue to evolve, embracing new technologies and practices while maintaining the
                                    values that have guided us for nearly three decades.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Nudo Commercial Building"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-slate-700 hidden lg:block">
                                <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-1">30+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Years Serving Businesses</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-500/15 px-4 py-2 text-xs font-medium text-primary-700 dark:text-primary-300 uppercase tracking-wide mb-4">
                            Our Journey
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Milestones & Achievements
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Key moments that have shaped our journey and contributed to our success
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-900 hidden md:block" />

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative flex items-start gap-6">
                                    {/* Year badge */}
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm shadow-lg z-10">
                                        {milestone.year}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-gray-50 dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-500/15 px-4 py-2 text-xs font-medium text-primary-700 dark:text-primary-300 uppercase tracking-wide mb-4">
                            What Drives Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            The principles that guide our decisions and shape our community
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all hover:border-primary-300 dark:hover:border-primary-500"
                            >
                                <div className="text-primary-600 dark:text-primary-300 mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-500/15 px-4 py-2 text-xs font-medium text-primary-700 dark:text-primary-300 uppercase tracking-wide mb-4">
                        Our Mission
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Empowering Business Success
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                        To provide exceptional commercial spaces and services that enable businesses to thrive,
                        innovate, and achieve their full potential. We are committed to creating an environment
                        where every tenant can succeed and contribute to a vibrant business community.
                    </p>
                    <div className="bg-primary-50 dark:bg-primary-500/10 rounded-xl p-8 border border-primary-100 dark:border-primary-700/60">
                        <p className="text-lg text-gray-700 dark:text-gray-200 italic">
                            "Building not just spaces, but foundations for success. That's what Nudo has been
                            doing for nearly three decades, and that's what we'll continue to do for generations to come."
                        </p>
                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                            — Nudo Commercial Building Leadership
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

