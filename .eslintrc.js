module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    plugins: ["react", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended", // Make sure this is always the last element in the array.
    ],
    rules: {
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "import/no-anonymous-default-export": "off",
        "@typescript-eslint/no-var-requires": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react/no-unescaped-entities": "off",
        "@typescript-eslint/no-explicit-any": "off",
        // "@typescript-eslint/no-unused-vars": "off",
        // "jsx-a11y/anchor-is-valid": [
        //     "error",
        //     {
        //         components: ["Link"],
        //         specialLink: ["hrefLeft", "hrefRight"],
        //         aspects: ["invalidHref", "preferButton"],
        //     },
        // ],
    },
}
