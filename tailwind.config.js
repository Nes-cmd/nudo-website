import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: '#fff6e6',
                    100: '#ffe7bf',
                    200: '#ffd080',
                    300: '#ffb347',
                    400: '#ff980f',
                    500: '#f97316',
                    600: '#c46c00',
                    700: '#9c5600',
                    800: '#7a4300',
                    900: '#623600',
                },
            },
        },
    },

    plugins: [forms],
};
