/**
 * 判断是否是苹果设备
 */
function isAppleDevice() {
  const reg = /iphone|ipod|ipad|Macintosh/i;
  return reg.test(navigator.userAgent.toLowerCase());
}

export default isAppleDevice;
