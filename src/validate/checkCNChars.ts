/**
 * 校验是否包含中文
 * @param value
 */
function checkCNChars(value: string) {
  return /[\u4e00-\u9fa5]/.test(value);
}

export default checkCNChars;
