module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            display: ['IBM Plex Mono', 'Menlo', 'monospace'],
            body: ['IBM Plex Mono', 'Menlo', 'monospace'],
        },

        extend: {
            maxWidth: {
                app: '1440px',
                footer: '1024px',
            },
            screen: {
                xs: '480px',

                colors: {
                    primary: {
                        DEFAULT: '#6268F1',
                        50: 'rgb(238 242 255)',
                        100: 'rgb(224 231 255)',
                        200: 'rgb(199 210 254)',
                        300: 'rgb(165 180 252)',
                        400: 'rgb(129 140 248)',
                        500: 'rgb(99 102 241)',
                        600: 'rgb(79 70 229)',
                        700: 'rgb(67 56 202)',
                        800: 'rgb(55 48 163)',
                        900: 'rgb(49 46 129)',
                    },
                    tango: {
                        DEFAULT: '#F37124',
                        50: '#FFFEFE',
                        100: '#FEEEE5',
                        200: '#FBCFB5',
                        300: '#F8B085',
                        400: '#F69054',
                        500: '#F37124',
                        600: '#D8580C',
                        700: '#A84409',
                        800: '#773107',
                        900: '#471D04',
                    },
                    'great-blue': {
                        DEFAULT: '#2A669F',
                        50: '#E4F7F8',
                        100: '#CCEEF2',
                        200: '#9CD7E5',
                        300: '#6CB9D8',
                        400: '#3B94CB',
                        500: '#2A669F',
                        600: '#234B83',
                        700: '#1B3366',
                        800: '#14204A',
                        900: '#0C102E',
                    },
                    fantasy: {
                        DEFAULT: '#FDFBF9',
                        50: '#FFFFFF',
                        100: '#FFFFFF',
                        200: '#FDFBF9',
                        300: '#EFDFCF',
                        400: '#E1C3A5',
                        500: '#D3A77B',
                        600: '#C58B51',
                        700: '#A66F37',
                        800: '#7C5329',
                        900: '#52371B',
                    },
                },
            },
        },

        plugins: [require('@tailwindcss/forms'), require('tailwind-children')],
    },
};
