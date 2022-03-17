/**
 * 存储loalStorage
 * @param key
 * @param value
 */
function setLocalStorage(key: string, value: string | object) {
  if (!key) return;
  if (typeof value !== 'string') {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
}

export default setLocalStorage;
