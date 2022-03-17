/**
 * 获取localStorage
 * @param key
 */
function getLocalStorage(key: string) {
  if (!key) return;
  return window.localStorage.getItem(key);
}

export default getLocalStorage;
