import pkg from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssPrefixer from 'postcss-prefixer';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import cssimport from 'postcss-import';
import autoprefixer from 'autoprefixer';

const extensions = ['.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

const setUpRollup = ({ input, output }) => {
    return {
        input,
        exports: 'named',
        output,
        plugins: [
            peerDepsExternal(),
            json(),
            resolve({ extensions }),
            babel({
                babelHelpers: 'bundled',
                presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            }),
            commonjs({
                include: /node_modules/,
            }),
            postcss({
                extract: true,
                modules: true,
                sourceMap: true,
                plugins: [
                    postcssPrefixer({
                        prefix: `${pkg.name}__`,
                    }),
                    cssimport(),
                    autoprefixer(),
                ],
            }),
            terser(),
            typescript(),
        ],
        external: ['react', 'react-dom'],
    };
};

export default [
    setUpRollup({
        input: 'src/index.ts',
        output: {
            file: 'dist/bundle.js',
            sourcemap: true,
            format: 'es',
        },
    }),
];
