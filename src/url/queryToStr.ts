/**
 * 键值对拼接成URL参数
 * @param value
 */
interface Obj {
  [key: string]: any;
}
function queryToStr(obj: Obj) {
  const params = [];
  for (const key in obj) {
    params.push(`${key}=${obj[key]}`);
  }
  return encodeURIComponent(params.join('&'));
}

export default queryToStr;
