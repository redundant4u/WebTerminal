module.exports = {
    plugins: ['prettier'],
    extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:prettier/recommended'],
    rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        'prettier/prettier': 0,
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'no-shadow': 0,
    },
    parserOptions: {
        ecmaVersion: 2017,
    },
    env: {
        es6: true,
    },
};
