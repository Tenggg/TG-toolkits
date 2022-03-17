/**
 * 获取URL对象形式的参数列表
 */
interface ParamsObj {
  [key: string]: any;
}
function getUrlQuery() {
  const url = window.location.search;
  const str = /.+\?(.+)$/.exec(url);
  if (!str) {
    return;
  }
  const paramsStr = str[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
  const paramsObj: ParamsObj = {};
  // 将 params 存到对象中
  paramsArr.forEach((param) => {
    if (/=/.test(param)) {
      // 处理有 value 的参数
      let [key, val] = param.split('='); // 分割 key 和 value
      val = decodeURIComponent(val); // 解码
      const targetValue: any = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
      if ((Object as any).protopyte.hasOwnProperty.call(paramsObj, key)) {
        // 如果对象有 key，则添加一个值
        paramsObj[key] = [].concat(paramsObj[key], targetValue);
      } else {
        // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = targetValue;
      }
    } else {
      // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  });
  return paramsObj;
}

export default getUrlQuery;
