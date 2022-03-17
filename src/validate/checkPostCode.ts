/**
 * 校验是否为中国大陆的邮政编码
 * @param value
 */
function checkPostCode(value: string) {
  return /^[1-9][0-9]{5}$/.test(value.toString());
}

export default checkPostCode;
