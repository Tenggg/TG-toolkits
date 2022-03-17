module.exports = {
  presets: [['@babel/preset-env', { targets: 'last 2 version', modules: false }]],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        // useESModules: true,
      },
    ],
  ],
};
