<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default SEO (English + Amharic)
    |--------------------------------------------------------------------------
    |
    | Used in resources/views/app.blade.php. Override any value via .env.
    | Per-page titles/descriptions can still be set from Inertia <Head>.
    |
    */

    'site_name' => env('SEO_SITE_NAME', env('APP_NAME', 'Nudo')),

    'description_en' => env('SEO_DESCRIPTION_EN', 'Nudo Market Center — a premier commercial building in Addis Ababa with businesses, services, and office and meeting rooms for rent. Discover tenants, book a space, and visit us.'),

    'description_am' => env('SEO_DESCRIPTION_AM', 'ኑዶ ገበያ ማዕከል — በአዲስ አበባ ውስጥ ንግድ፣ አገልግሎቶች እና ለኪራይ የሚሰጡ የቢሮ እና የስብሰባ ክፍሎች ያሉት ታዋቂ ኮሜርሻል ህንጻ። ተጠቃሚዎችን ያግኙ፣ ቦታ ይያዙ፣ ይጎብኙን።'),

    /*
    | Comma-separated lists (English and Amharic terms for search relevance).
    */
    'keywords_en' => env('SEO_KEYWORDS_EN', 'Nudo Market Center, Nudo, commercial building Addis Ababa, business center Ethiopia, office rent Addis Ababa, meeting room rent, open offices, tenants, Bole, commercial property'),

    'keywords_am' => env('SEO_KEYWORDS_AM', 'ኑዶ ገበያ ማዕከል, ኑዶ, ኮሜርሻል ህንጻ, አዲስ አበባ, የቢሮ ኪራይ, የስብሰባ ክፍል, ንግድ ማዕከል, ቦሌ'),

    'og_image' => env('SEO_OG_IMAGE', '/logo/Nudo-logo-main-removebg-preview.png'),

];
