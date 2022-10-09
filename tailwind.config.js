module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
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
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
