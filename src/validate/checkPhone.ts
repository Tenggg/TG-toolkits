/**
 * 校验手机号
 * @param value
 */
function checkPhone(value: string) {
  return /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value.toString());
}

export default checkPhone;
