import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import banner from 'rollup-plugin-banner';
import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import merge from 'webpack-merge';

import pkg from './package.json';

const formatName = 'TG';
// const isProd = process.env.NODE_ENV === 'production';

const extensions = ['.js', '.ts', '.json'];

const bannerText = ` * TG-toolkits v${pkg.version}\n` + ` * author Tenggg\n` + ' * javascript utils';

// umd格式配置
const config = {
  input: './src/index.ts',
  output: {
    file: pkg.umd,
    format: 'umd',
    name: formatName,
  },
  plugins: [
    json(),
    typescript(),
    commonjs({
      include: 'node_modules/**',
    }),
    resolve({
      extensions,
    }),
    babel({
      include: 'src/**/*',
      exclude: '**/node_modules/**',
      runtimeHelpers: true,
      extensions,
    }),
    banner(bannerText),
  ],
};

const [minUmd, es, cjs] = [merge({}, config), merge({}, config), merge({}, config)];

// 将打包成umd格式的代码进行压缩
minUmd.output.file = 'lib/tg-utils.umd.min.js';
minUmd.plugins.unshift(terser());

// EsModule格式
es.output.file = pkg.module;
es.output.format = 'esm';

// commonjs格式
cjs.output.file = pkg.main;
cjs.output.format = 'cjs';

export default [config, minUmd, es, cjs];
