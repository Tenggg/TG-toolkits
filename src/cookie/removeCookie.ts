/**
 * 删除cookie
 * @param key
 */
function removeCookie(key: string) {
  document.cookie = `${encodeURIComponent(key)}=;expires=${new Date()}`;
}

export default removeCookie;
