/**
 * 校验数字和字母组成
 * @param value
 */
function checkNumAndStr(value: string) {
  return /^[A-Za-z0-9]+$/g.test(value);
}
export default checkNumAndStr;
