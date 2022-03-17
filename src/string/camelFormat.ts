/**
 * 驼峰命名转换成短横线命名
 * @param str
 */
function camelFormat(str: string) {
  return str.replace(/[A-Z]/g, (item) => '-' + item.toLowerCase());
}

export default camelFormat;
