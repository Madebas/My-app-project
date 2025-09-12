/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm:"350px",
            md:"768px",
            lg:"1024px",
            xl:"1280px",
            "2xl":"1536px",
        },
        colors: {
            brown: "#53423e",
            lightBrown: "#645550",
            darkBrown: "#3b2f2c",
            black: "#1e1917",
            white: "#ffffff",
            cyan: "#00bcd4",
            lightCyan: "#b2ebf2",
            darkCyan: "#00838f",
            orange: "#ff9800",
            lightOrange: "#ffb74d",
            darkOrange: "#e65100",
            grey: "#9e9e9e",
            lightGrey: "#e0e0e0",
            darkGrey: "#424242",
            green: "#4caf50",
            blue:"#58A6FF",
            lightblue:"#1E90FF",
            navyblue:"#1A252F",
            purple:"#8A2BE2",
        },
        extend: {
            boxShadow: {
                cyanshadow:'0px 0px 20px 0px rgba(94, 244, 220, 0.5)',
                cyanMediumShadow: '10px 10px 200px 150px rgba(94, 205, 220, 0.5)',
                orangeMediumShadow: '10px 10px 200px 150px rgba(240, 164, 0, 0.5)',
            },
        },
       fontFamily: {
            body: ['"Josefin Sans"'],
            special: ['Roboto'],
            inter: ['Inter', 'sans-serif'],
            lato: ['Lato', 'sans-serif'],
            nunito: ['Nunito', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
            source: ['"Source Sans Pro"', 'sans-serif'],
            robotoMono: ['"Roboto Mono"', 'monospace'],
            helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        },
    },
    plugins: []
}