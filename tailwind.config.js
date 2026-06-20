export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["Kanit", "Inter", "ui-sans-serif", "system-ui"],
                sans: ["Inter", "ui-sans-serif", "system-ui"],
            },
            colors: {
                ink: "#171b24",
                muted: "#677080",
                paper: "#f7f7f4",
                shell: "#eceff4",
                teal: "#315f8f",
                forest: "#586d8f",
                gold: "#b08a2e",
                rose: "#7b5570",
            },
            boxShadow: {
                lift: "0 24px 70px rgba(24, 32, 38, 0.12)",
                soft: "0 14px 42px rgba(24, 32, 38, 0.08)",
            },
        },
    },
    plugins: [],
};
