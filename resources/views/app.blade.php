<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', config('seo.default_html_lang', 'am')) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        @php
            $seoSite = config('seo.site_name');
            $descEn = config('seo.description_en');
            $descAm = config('seo.description_am');
            $keywordsEn = config('seo.keywords_en');
            $keywordsAm = config('seo.keywords_am');
            $descCombined = collect([$descAm, $descEn])->filter()->implode(' ');
            $keywordsCombined = collect([$keywordsAm, $keywordsEn])->filter()->implode(', ');
            $descSocial = filled($descAm) ? $descAm : $descEn;
            $appUrl = rtrim(config('app.url'), '/');
            $ogImagePath = ltrim(config('seo.og_image'), '/');
            $ogImageUrl = $appUrl !== '' ? $appUrl.'/'.$ogImagePath : '/'.$ogImagePath;
        @endphp

        <meta name="description" content="{{ $descCombined }}">
        <meta name="keywords" content="{{ $keywordsCombined }}">
        <meta name="author" content="{{ $seoSite }}">
        <meta name="robots" content="index, follow">
        <link rel="canonical" href="{{ $appUrl }}{{ request()->getRequestUri() }}">

        <meta property="og:site_name" content="{{ $seoSite }}">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ $appUrl }}{{ request()->getRequestUri() }}">
        <meta property="og:title" content="{{ $seoSite }}">
        <meta property="og:description" content="{{ $descSocial }}">
        <meta property="og:locale" content="am_ET">
        <meta property="og:locale:alternate" content="en_US">
        <meta property="og:image" content="{{ $ogImageUrl }}">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ $seoSite }}">
        <meta name="twitter:description" content="{{ $descSocial }}">
        <meta name="twitter:image" content="{{ $ogImageUrl }}">

        <script>
            (function () {
                try {
                    var saved = localStorage.getItem('darkMode');
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    var isDark = saved === null ? prefersDark : saved === 'true';
                    document.documentElement.classList.toggle('dark', isDark);
                } catch (e) {
                    // Ignore storage access issues and keep default theme.
                }
            })();
        </script>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/logo/Nudo-favicon-removebg-preview.png" type="image/x-icon">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', 'resources/css/app.css'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
