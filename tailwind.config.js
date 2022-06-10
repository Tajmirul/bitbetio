module.exports = {
    content: [
        './src/**/*.css',
        './*.html'
    ],
    theme: {
        "fontFamily": {
            roboto: ["Roboto", "sans-serif"],
            oswald: ["Oswald", "sans-serif"],
        },
        extend: {
            colors: {
                primary: {
                    lighter: '#322A71',
                    light: '#202342',
                    DEFAULT: '#09102a',
                },
                secondary: "#571CE0",
            },
            screens: {
                'xs': '480px',
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}
