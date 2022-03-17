/**
 * 设置cookie
 * @param key
 * @param value
 * @param expire
 */
function setCookie(key: string, value: string, expire: number) {
  const time = new Date();
  time.setDate(time.getDate() + expire);
  document.cookie = `${key}=${value};expires=${time.toUTCString()}`;
}

export default setCookie;
