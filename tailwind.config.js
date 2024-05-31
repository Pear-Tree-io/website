const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2bdcd2',
                    'primary-content': '#171717',
                    secondary: '#016968',
                    info: '#2bdcd2',
                    'info-content': '#171717',
                },
                mytheme: {
          
                    "primary": "#ffa317",
                             
                    "secondary": "#fed7aa",
                             
                    "accent": "#0041c7",
                             
                    "neutral": "#f3f4f6",
                             
                    "base-100": "#f5f5f4",
                             
                    "info": "#c7d2fe",
                             
                    "success": "#00ff00",
                             
                    "warning": "#ca8a04",
                             
                    "error": "#ff0000",
                             },
            }
        ]
    },
    plugins: [require('daisyui')]
};
