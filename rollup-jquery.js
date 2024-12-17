import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'build-jquery.js',
  output: {
    file: 'dist/jquery.js',
    format: 'iife',
    extend: true,
    name: 'window'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    terser({maxWorkers: 8}),
  ],
  treeshake: false
};
