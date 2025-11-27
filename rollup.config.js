import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/black-friday-promo.js',
            format: 'umd',
            name: 'BlackFridayPromo',
            sourcemap: true
        },
        {
            file: 'dist/black-friday-promo.min.js',
            format: 'umd',
            name: 'BlackFridayPromo',
            sourcemap: true,
            plugins: [terser()]
        },
        {
            file: 'dist/black-friday-promo.esm.js',
            format: 'es',
            sourcemap: true
        },
        {
            file: 'dist/black-friday-promo.esm.min.js',
            format: 'es',
            sourcemap: true,
            plugins: [terser()]
        }
    ],
    plugins: [
        postcss({
            inject: true,
            minimize: true
        }),
        typescript({
            tsconfig: './tsconfig.json'
        })
    ]
};
