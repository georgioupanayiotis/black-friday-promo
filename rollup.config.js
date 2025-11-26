import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

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
            file: 'dist/black-friday-promo.esm.js',
            format: 'es',
            sourcemap: true
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
