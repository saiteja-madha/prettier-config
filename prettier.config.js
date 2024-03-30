/** @type {import("prettier").Config} */
module.exports = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    singleQuote: false,
    quoteProps: "consistent",
    trailingComma: "all",
    bracketSpacing: true,
    bracketSameLine: true,
    arrowParens: "always",
    endOfLine: "lf",

    overrides: [
        {
            files: "*.json",
            options: {
                printWidth: 150,
            },
        },
        {
            files: ["*.yml", ".yaml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
