// 如需使用npm run plop创建工具函数模板，node版本需大于16
module.exports = (plop) => {
  plop.setGenerator('tool', {
    description: '创建工具函数',
    prompts: [
      {
        type: 'input',
        name: 'toolName',
        message: '请输入工具函数名称',
        validate: (value) => {
          if (!value || value.trim === '') {
            return '函数名称不能为空';
          } else {
            return true;
          }
        },
      },
      {
        type: 'input',
        name: 'filePath',
        message: '请输入工具函数所存放的目录名',
        default: 'tools',
      },
    ],
    actions: [
      {
        type: 'add',
        // 生成的文件存放路径
        path: 'src/{{filePath}}/{{toolName}}.ts',
        // 模板文件路径
        templateFile: 'plop-template/src/tool.hbs',
      },
    ],
  });
};
