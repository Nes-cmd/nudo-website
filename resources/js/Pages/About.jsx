import MainLayout from '../Layouts/MainLayout';

export default function About() {
    const milestones = [
        {
            year: '2008',
            title: 'Vision Becomes Reality',
            description:
                'A group of visionary members come together to invest in a modern commercial building around Piassa T/Haymanot.',
        },
        {
            year: '2010',
            title: 'Opening of Nudo Market Center',
            description:
                'The building officially opens its doors and starts welcoming shops, offices and service providers.',
        },
        {
            year: '2015',
            title: 'Growing Tenant Community',
            description:
                'Nudo Market Center becomes a known address in the area, hosting a diverse mix of businesses and visitors every day.',
        },
        {
            year: '2019',
            title: 'Facility Improvements',
            description:
                'Common areas, security and internal services are improved to keep the building clean, safe and organized.',
        },
        {
            year: '2023',
            title: 'Modern Management',
            description:
                'The management starts adopting more structured processes and tools to better serve tenants and visitors.',
        },
        {
            year: 'Today',
            title: 'Looking Ahead',
            description:
                'After more than 15 years, Nudo Market Center continues to plan for upgrades, better services and a stronger community.',
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
        { label: 'ዓመት በስራ ላይላይ', value: '12+' },
        { label: 'የንግድ ተቋማትተቋማት', value: '210+' },
        { label: 'የተለያዩ አገልግሎቶች', value: '300+' },
        { label: 'በየቀን የሚገለገሉ ደንበኞች', value: '3000+' }, 
    ];

    return (
        <MainLayout title="About">
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 sm:py-24">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm">
                            በፒያሳ ተ/ሃይማኖት አካባቢ
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            የተሟላ የንግድ ህንፃ
                            <p className="bg-clip-text text-transparent bg-linear-to-r from-amber-200 to-yellow-200 dark:text-primary-300">
                                በ አዲስ አበባ ኢትዮጵያ
                            </p>
                        </h1>
                        <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
                            ኑዶ ማርኬት ሴንተር በፒያሳ ተክለሃይማኖት አካባቢ የሚገኝ ታዋቂ የንግድ ማዕከል ሲሆን፣ ከ15 ዓመታት በፊት አርቆ አሳቢ በሆኑ ግለሰቦች የተገነባ ባለ 11 ወለል የንግድ ማዕከል ነው። ሕንፃው ሱቆችን፣ ቢሮዎችን እና ልዩ ልዩ አገልግሎቶችን በአንድ ወጥ፣ ምቹ እና ሥርዓት ባለው ሁኔታ አቀናጅቶ የያዘ ቀዳሚ የንግድ መዳረሻ ነው።
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
                                ታሪካችን
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                የኑዶ የገበያ ማዕከል ታሪክ
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    ኑዶ ማርኬት ሴንተር በፒያሳ ተክለሃይማኖት አካባቢ የሚገኝ ታዋቂ የንግድ ማዕከል ሲሆን፣ ከ15 ዓመታት በፊት አርቆ አሳቢ በሆኑ ግለሰቦች የተገነባ ህንጻህንጻ ነው። ሕንፃው ሱቆችን፣ ቢሮዎችን እና ልዩ ልዩ አገልግሎቶችን በአንድ ወጥ፣ ምቹ እና ሥርዓት ባለው ሁኔታ አቀናጅቶ የያዘ ቀዳሚ የንግድ መዳረሻ ነው።
                                </p>
                                <p>
                                    ከ15 ዓመታት በላይ በታማኝነት ያገለገለው ሕንፃችን፤ ለንግድ ተቋማትና ለገበያተኞች ተመራጭ ቦታ ሆኗል። ብዙዎች ኑዶን የመረጡት ባለው ምቹ ቦታ፣ ተደራሽነት እና ለሥራ ተስማሚ በሆነው መዋቅሩ ነው።
                                </p>
                                <p>
                                    ዛሬም ቢሆን ኑዶ ማርኬት ሴንተር የጥንት ራዕዩን ሳይዘነጋ ራሱን እያዘመነ ይገኛል፤ ይህም ሰዎች በጋራ የሚሰሩበት፣ ደንበኞችዎ በቀላሉ እርስዎ ጋር የሚደርሱበት፣ የሚገበያዩበት እና አገልግሎቶችን በቀላሉ የሚያገኙበት፣ ንጹህ፣ ደህንነቱ የተጠበቀ እና እንግዳ ተቀባይ የንግድ ስፍራ መሆን ነው። ሕንፃ ከሚሰጠው ትልቁ ጥቅም ዋነኛው የአካባቢውን ማህበረሰብ በታማኝነት ለማገልገል የባለቤቶቹ የረጅም ጊዜ ቃል ኪዳን መገለጫ ሲሆን ነው።
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
                                <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-1">12+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">አመታት በግልጋሎት ላይ</div>
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
                            ጉዟችን
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            የኑዶ የገበያ ማዕከል ታሪክ
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Key moments that have shaped Nudo Market Center into the building it is today
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
                            A Practical, Welcoming Place for Business
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                            Our mission is simple: to keep Nudo Market Center a clean, safe and accessible building where
                            businesses can operate smoothly and customers feel comfortable to visit. We focus on good
                            management, clear communication and steady improvement rather than short‑term promises.
                        </p>
                    <div className="bg-primary-50 dark:bg-primary-500/10 rounded-xl p-8 border border-primary-100 dark:border-primary-700/60">
                        <p className="text-lg text-gray-700 dark:text-gray-200 italic">
                            "Nudo Market Center was built by people who believed in long‑term value, not quick gains.
                            Our goal is to take care of the building, respect our tenants and be a reliable part of the
                            Piassa T/Haymanot community for many years to come."
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

