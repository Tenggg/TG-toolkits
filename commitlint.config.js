// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 108], // header上最大108字符
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'perf', // 优化相关，比如性能提升、体验
        'style', // 仅仅修改了空格,格式缩进,逗号等等（不影响代码运行的变动）
        'docs', // 文档（documentation）
        'test', // 增加测试
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'build', // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        'ci', // cli配置相关,如对k8s，docker相关配置
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回滚到上一个版本
      ],
    ],
  },
};
