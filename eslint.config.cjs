const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const prettier = require("eslint-plugin-prettier");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    plugins: {
        "@typescript-eslint": typescriptEslint,
        prettier,
    },

    rules: {
        "prettier/perttier": "error",
    },

    extends: compat.extends("plugin:prettier/recommended"),
}, globalIgnores([
    "dist/*",
    "html/*",
    "**/.local",
    "node_modules/**/*",
    "**/*.svg",
    "**/*.sh",
    "public/*",
])]);
