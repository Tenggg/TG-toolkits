/**
 * 手机号中间四位变成*
 * @param phone
 */
function phoneFormat(phone: string) {
  phone = String(phone);
  return phone.substr(0, 3) + '****' + phone.substr(7);
}

export default phoneFormat;
