/**
 * 设置cookie
 * @param key 属性
 * @param value 值
 * @param expire 过期时间,单位天
 */
function setCookie(key: string, value: string, expire: number) {
  const time = new Date();
  time.setDate(time.getDate() + expire);
  document.cookie = `${key}=${value};expires=${time.toUTCString()}`;
}

export default setCookie;
