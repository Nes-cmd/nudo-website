import { useEffect, useRef, useState } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';

export default function Home({ rooms = [], businesses = [], heroes = [] }) {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [heroImageIndex, setHeroImageIndex] = useState(0);

    const toUrl = (path) =>
        path && /^https?:\/\//i.test(path) ? path : `/storage/${path}`;

    const formatPrice = (value) => {
        if (value === null || value === undefined) return '-';
        const num = Number(value);
        if (Number.isNaN(num)) return value;
        return new Intl.NumberFormat('en-ET', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(num);
    };

    const openRooms = rooms;

    const scrollToIndex = (index) => {
        const el = scrollRef.current;
        if (!el) return;
        const slides = el.children;
        if (!slides || !slides[index]) return;

        const target = slides[index];
        el.scrollTo({
            left: target.offsetLeft,
            behavior: 'smooth',
        });
        setActiveIndex(index);
    };

    // Hero image rotation
    useEffect(() => {
        if (!heroes || heroes.length === 0) {
            return;
        }

        const interval = setInterval(() => {
            setHeroImageIndex((prev) => (prev + 1) % heroes.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [heroes.length]);

    // Gallery auto-scroll
    useEffect(() => {
        const el = scrollRef.current;
        if (!el || businesses.length === 0) return;

        const slides = el.children;
        if (!slides || !slides.length) return;

        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % slides.length;
            scrollToIndex(index);
        }, 5000);

        return () => clearInterval(interval);
    }, [businesses.length]);

    return (
        <MainLayout title="Home">
            {/* Full-width Hero Section */}
            <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Images with smooth transitions */}
                <div className="absolute inset-0 overflow-hidden">
                    {heroes && heroes.length > 0 ? (
                        heroes.map((hero, index) => (
                            <div
                                key={hero.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                    heroImageIndex === index ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <img
                                    src={toUrl(hero.image)}
                                    alt={hero.title || `Nudo Commercial Building ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
                    )}
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/60" />
                    {/* Gradient overlay with primary color accent */}
                    <div className="absolute inset-0 bg-linear-to-r from-primary-900/80 via-black/50 to-primary-800/70" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <span className="inline-flex items-center rounded-full bg-primary-500/20 px-4 py-2 text-xs font-medium tracking-wide uppercase text-white/90 border border-primary-400/30 backdrop-blur-sm mb-6">
                            Premium Commercial Building
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                            እንኳን ደህና መጡ! {' '}
                            <span className="text-primary-500">
                                ኑዶ የገበያ ማዕከል
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
                            ንግድዎ የሚመነደግበት፣ ፈጠራ ከዕድል ጋር የሚገናኝበት ቀዳሚ የንግድ ሕንፃ። ደረጃቸውን የጠበቁ ቢሮዎችን እና ምቹ የሥራ ቦታዎችን የሚያገኙበት ህንፃ።
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                            <Link
                                href="/businesses"
                                className="inline-flex items-center rounded-full bg-white text-gray-900 px-6 py-3 text-base font-semibold shadow-xl hover:bg-gray-100 transition-all hover:scale-105"
                            >
                                ቢስነሶችን ለማግኘት
                                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link
                                href="/open-rooms"
                                className="inline-flex items-center rounded-full border-2 border-primary-400/60 bg-primary-500/20 backdrop-blur-sm px-6 py-3 text-base font-medium text-white hover:bg-primary-500/30 hover:border-primary-300/80 transition-all hover:scale-105"
                            >
                                የሚከራዩ ክፍሎች
                            </Link>
                        </div>

                        {/* Stats */}
                        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                            <div className="space-y-2">
                                <dt className="text-white/80 text-sm uppercase tracking-wide">የንግድ ተቋማት</dt>
                                <dd className="text-3xl sm:text-4xl font-bold">250+</dd>
                            </div>
                            <div className="space-y-2">
                                <dt className="text-white/80 text-sm uppercase tracking-wide">አገልግሎቶች</dt>
                                <dd className="text-3xl sm:text-4xl font-bold">300+</dd>
                            </div>
                            <div className="space-y-2">
                                <dt className="text-white/80 text-sm uppercase tracking-wide">ኤጀንሲዎች</dt>
                                <dd className="text-3xl sm:text-4xl font-bold">50+</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="animate-bounce">
                        <svg className="h-6 w-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Businesses Section */}
                {businesses.length > 0 && (
                    <div className="mt-16 space-y-6">
                        <div className="flex flex-col items-center justify-center text-center gap-3 mb-6">
                            <span className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-600/60 shadow-sm">
                                በኑዶ የገበያ ማዕከል ውስጥ
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white drop-shadow-md">
                                <span className="bg-clip-text  bg-linear-to-r from-primary-500 via-amber-300 to-primary-400">
                                    ኑዶ ውስጥ በቀላሉ የሚያገኝዋቸው የንግድ ተቋማት እና አገልግሎቶች!
                                </span>
                            </h2>
                            <p className="mt-1 text-base text-gray-600 dark:text-gray-300 max-w-xl">
                                መሸመት የሚፈልጉት ምርት ወይም ማግኘት የሚፈልጉዋቸውን አገልግሎቶችን ይመልከቱ፣ ኑዶ መጥተው ምን አጥተው!
                            </p>
                        </div>

                        {/* Horizontal scrollable businesses gallery */}
                        <div className="relative">
                            {/* Gradient edges */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-gray-50 via-gray-50/0 dark:from-gray-900 dark:via-transparent z-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-gray-50 via-gray-50/0 dark:from-gray-900 dark:via-transparent z-10" />

                            <div
                                ref={scrollRef}
                                className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden"
                                style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
                            >
                                {businesses.map((business) => {
                                    const images = Array.isArray(business.image)
                                        ? business.image
                                        : business.image
                                        ? [business.image]
                                        : [];
                                    const primaryImage = images[0] || null;
                                    const secondary = images[1] || null;
                                    const tertiary = images[2] || null;

                                    return (
                                        <Link
                                            key={business.id}
                                            href={`/businesses/${business.id}`}
                                            className="group relative flex-none w-[85vw] sm:w-[70vw] lg:w-[50vw] overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/70 dark:border-slate-700 snap-start"
                                        >
                                            {/* Image / collage */}
                                            <div className="relative h-64 sm:h-80 md:h-88 overflow-hidden">
                                                {primaryImage && images.length === 1 && (
                                                    <img
                                                        src={toUrl(primaryImage)}
                                                        alt={business.name}
                                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                )}

                                                {primaryImage && images.length === 2 && (
                                                    <div className="grid grid-cols-2 gap-1 h-full p-1">
                                                        <img
                                                            src={toUrl(primaryImage)}
                                                            alt={business.name}
                                                            className="h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                                        />
                                                        <img
                                                            src={toUrl(secondary)}
                                                            alt={business.name}
                                                            className="h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                                        />
                                                    </div>
                                                )}

                                                {primaryImage && images.length >= 3 && (
                                                    <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full p-1">
                                                        <img
                                                            src={toUrl(primaryImage)}
                                                            alt={business.name}
                                                            className="row-span-2 h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                                        />
                                                        <img
                                                            src={toUrl(secondary)}
                                                            alt={business.name}
                                                            className="h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                                        />
                                                        <div className="relative">
                                                            <img
                                                                src={toUrl(tertiary)}
                                                                alt={business.name}
                                                                className="h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                            {images.length > 3 && (
                                                                <div className="absolute inset-0 rounded-xl bg-black/50 flex items-center justify-center text-xs font-semibold text-white">
                                                                    +{images.length - 3} ሌሎችም
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                                                {/* Category badge */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white border border-white/20">
                                                        {business.category}
                                                    </span>
                                                </div>

                                                {/* Name overlay */}
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <h3 className="text-xl sm:text-2xl font-semibold text-white drop-shadow-sm mb-2">
                                                        {business.name}
                                                    </h3>
                                                    <p className="text-sm text-white/90 line-clamp-2">
                                                        {business.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Services preview */}
                                            <div className="p-4 bg-white dark:bg-slate-900">
                                                <div className="flex flex-wrap gap-2">
                                                    {business.services.slice(0, 3).map((service) => (
                                                        <span
                                                            key={service}
                                                            className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-500/15 px-2.5 py-1 text-xs font-medium text-primary-700 dark:text-primary-300"
                                                        >
                                                            {service}
                                                        </span>
                                                    ))}
                                                    {business.services.length > 3 && (
                                                        <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">
                                                            +{business.services.length - 3} ሌሎችም
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 pt-2">
                            {businesses.map((business, index) => (
                                <button
                                    key={business.id}
                                    type="button"
                                    onClick={() => scrollToIndex(index)}
                                    className={`h-2.5 rounded-full transition-all ${
                                        activeIndex === index
                                            ? 'w-6 bg-primary-500'
                                            : 'w-2.5 bg-gray-300'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* View all link */}
                        <div className="text-center mt-6">
                            <Link
                                href="/businesses"
                                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                            >
                                ሁሉንም ለመመልከት
                                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Available Rooms for Rent Section */}
            <section className="bg-linear-to-br from-primary-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-500/15 px-4 py-2 text-xs font-medium text-primary-700 dark:text-primary-300 uppercase tracking-wide mb-4">
                            አሁን ክፍት የሆኑ
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            ለኪራይ ክፍት የሆኑ<span className="text-primary-600 dark:text-primary-300"> ክፍሎች</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            ለንግድ፣ ለኤጀንሲ ወይም ልቢሮ የሚሆኑ ሰፋ ያሉ ወይም በአቅምዎ ልክ የሆኑ ሱቆች እኛ ጋር ያገኛሉ።
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {openRooms.map((room) => {
                            const hasSize = !!room.size;
                            const hasFeatures = Array.isArray(room.features) && room.features.length > 0;

                            return (
                                <div
                                    key={room.id}
                                    className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:border-primary-300"
                                >
                                    {/* Room Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        {room.image && (
                                            <img
                                                src={room.image}
                                                alt={room.name}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                                        {/* Available badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                                                የሚከራይ
                                            </span>
                                        </div>

                                        {/* Floor & size chips */}
                                        <div className="absolute bottom-3 left-4 flex flex-wrap gap-2">
                                            {room.floor && (
                                                <span className="inline-flex items-center rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-gray-900">
                                                    {room.floor}
                                                </span>
                                            )}
                                            {hasSize && (
                                                <span className="inline-flex items-center rounded-md bg-white/80 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-gray-800">
                                                    {room.size} m²
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col gap-4">
                                        {/* Room name */}
                                        <Link href={`/open-rooms/${room.id}`}>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors cursor-pointer">
                                                {room.name}
                                            </h3>
                                        </Link>

                                        {/* Description */}
                                        {room.description && room.description !== room.name && (
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {room.description}
                                            </p>
                                        )}

                                        {/* Features */}
                                        {hasFeatures && (
                                            <div className="flex flex-wrap gap-2">
                                                {room.features.slice(0, 3).map((feature) => (
                                                    <span
                                                        key={feature}
                                                        className="inline-flex items-center rounded-md bg-gray-100 dark:bg-slate-700 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-200"
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                                {room.features.length > 3 && (
                                                    <span className="inline-flex items-center rounded-md bg-gray-100 dark:bg-slate-700 px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-300">
                                                        +{room.features.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        )}

                                        {/* Price and booking */}
                                        <div className="mt-2 flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-700">
                                            <div>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                                        {formatPrice(room.price)}
                                                    </span>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                                        ብር
                                                    </span>
                                                </div>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    {room.period}
                                                </span>
                                            </div>
                                            <Link
                                                href={`/open-rooms/${room.id}`}
                                                className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-xs font-medium text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 transition-colors"
                                            >
                                                ዝርዝሩን ለማየት
                                                <svg className="ml-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* View all link */}
                    <div className="text-center mt-10">
                        <Link
                            href="/open-rooms"
                            className="inline-flex items-center text-primary-600 dark:text-primary-300 font-semibold hover:text-primary-700 dark:hover:text-primary-200 transition-colors"
                        >
                            ሁሉንም ለማየት 
                            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Location — Nudo Market Center */}
            <section className="bg-gray-100 dark:bg-slate-950 py-16 sm:py-20 border-t border-gray-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-500/15 px-4 py-2 text-xs font-medium text-primary-700 dark:text-primary-300 uppercase tracking-wide mb-4">
                           በካርታ ላይ ቦታችንን ያግኙን
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                        ኑዶ የገበያ ማዕከል
                        </h2>
                        
                    </div>
                    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-700 shadow-xl bg-slate-200 dark:bg-slate-800 aspect-[4/3] sm:aspect-[21/9] min-h-[280px] max-h-[560px]">
                        <iframe
                            title="Nudo Market Center on Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3612827994257!2d38.74340477595848!3d9.03076959103063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f10236aacb%3A0x5d3c0d0d5fb0155b!2sNudo%20Market%20Center!5e0!3m2!1sen!2set!4v1774730566035!5m2!1sen!2set"
                            className="absolute inset-0 h-full w-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

