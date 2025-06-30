module.exports = {
    input: [
        "src/**/*.{js,jsx,ts,tsx}", 
        "!src/**/*.spec.{js,jsx,ts,tsx}", 
        "!i18n/**",
        "!**/node_modules/**",
    ],
    output: "./",
    options: {
        compatibilityJSON: "v3",
        debug: true,
        func: {
            list: ["i18next.t", "i18n.t", "t"],
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        trans: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        lngs: ["en", "ru", "tr"],
        ns: ["translation"],
        defaultLng: "ru",
        defaultNs: "translation",
        resource: {
            loadPath: "public/locales/{{lng}}/{{ns}}.json",
            savePath: "public/locales/{{lng}}/{{ns}}.json",
        },
    },
};