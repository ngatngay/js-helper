import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: 'build-js.js',
  output: {
    file: 'dist/ngatngay.js',
    format: 'iife',
    name: 'ngatngay'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser({maxWorkers: 8}),
  ],
  treeshake: false
};

