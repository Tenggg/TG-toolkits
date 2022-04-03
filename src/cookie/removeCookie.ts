/**
 * 删除cookie
 * @param key 属性
 */
function removeCookie(key: string) {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
}

export default removeCookie;
