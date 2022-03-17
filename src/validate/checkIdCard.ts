/**
 * 校验身份证号
 * @param value
 */
function checkIdCard(value: string): boolean {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(value);
}

export default checkIdCard;
