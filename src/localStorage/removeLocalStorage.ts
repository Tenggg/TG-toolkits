/**
 * 删除localStorage
 * @param key
 */
function removeLocalStorage(key: string) {
  if (!key) return;
  window.localStorage.removeItem(key);
}

export default removeLocalStorage;
