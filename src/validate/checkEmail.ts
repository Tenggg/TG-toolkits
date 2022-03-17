/**
 * 校验邮箱
 * @param value
 */
function checkEmail(value: string): boolean {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
}

export default checkEmail;
