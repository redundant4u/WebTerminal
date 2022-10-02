module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        '@typescript-eslint/no-unused-vars': 2,
        'prettier/prettier': 0,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'no-shadow': 0,
    },
};
