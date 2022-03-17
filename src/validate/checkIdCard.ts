/**
 * 校验身份证号
 * @param value
 */
function checkIdCard(value: string): boolean {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
}

export default checkIdCard;
