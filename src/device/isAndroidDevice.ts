/**
 * 判断是否是安卓移动设备
 */
function isAndroidDevice() {
  return /android/i.test(navigator.userAgent.toLowerCase());
}

export default isAndroidDevice;
