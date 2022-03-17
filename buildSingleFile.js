const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const typescript = require('rollup-plugin-typescript');
// const { terser } = require('rollup-plugin-terser');
const { rollup } = require('rollup');
const fs = require('fs');
const path = require('path');

const extensions = ['.js', '.ts', '.json'];
const defaultPlugins = [
  typescript(), // 解析TypeScript
  commonjs({
    include: 'node_modules/**', // 包括
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
];
// 导出单个函数
function buildSingleFile() {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }

  const targetPath1 = path.resolve(__dirname, 'src/');
  // 获取src下目录第一层所有文件夹及文件
  const dir1 = fs.readdirSync(targetPath1);
  // 遍历文件夹及文件
  dir1.forEach((type) => {
    // 排除index.ts文件
    if (/index.ts/.test(type)) return;
    // console.log(type);
    const targetPath2 = path.resolve(__dirname, `src/${type}`);
    const dir2 = fs.readdirSync(targetPath2);
    // 遍历指定文件夹下的所有文件 比如 src/tools 下的所有文件
    dir2.forEach((fn) => {
      if (/index.ts/.test(fn)) return;
      try {
        // 获取打包指定文件的路径，比如 src/tools/checkEmail.ts
        const inputFilePath = path.resolve(__dirname, `src/${type}/${fn}`);
        // 输出模块名
        const moduleName = firstUpperCase(fn.replace(/.ts/, ''));
        // 打包输出文件名
        const outPutName = fn.replace(/.ts/, '.js');
        const config = {
          input: inputFilePath,
          plugins: defaultPlugins,
          external: ['tslib'], // 由于函数用ts编写，使用external外部引用tslib，减少打包体积
          output: {
            file: `dist/${outPutName}`,
            format: 'umd',
            name: `TG-${moduleName}`,
            globals: {
              tslib: 'tslib',
            },
          },
        };
        buildEntry(config);
      } catch (e) {
        console.log(e);
      }
    });
  });
}

// 处理字符串，头字母大写
function firstUpperCase(str) {
  return str.replace(/^\S/, function (s) {
    return s.toUpperCase();
  });
}

// 获取文件大小
function getSize(code) {
  return `${(code.length / 1024).toFixed(2)}kb`;
}

// 设置颜色
function blue(str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m';
}

// 构建单文件
function buildEntry(config) {
  const output = config.output;
  const { file } = output;
  return rollup(config)
    .then((bundle) => bundle.generate(output))
    .then(({ output: [{ code }] }) => {
      return write(file, code);
    });
}

// 打印日志
function write(dest, code) {
  return new Promise((resolve, reject) => {
    function report(extra) {
      console.log(`${blue(path.relative(process.cwd(), dest))}  ${getSize(code)}${extra || ''}`);
      resolve();
    }
    fs.writeFile(dest, code, (err) => {
      if (err) return reject(err);
      report();
    });
  });
}

// 打包单文件
buildSingleFile();
