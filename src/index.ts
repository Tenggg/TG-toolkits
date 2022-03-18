import arrayFlat from './array/arrayFlat';

/**
 * 数据校验
 */
import checkIdCard from './validate/checkIdCard';
import checkEmail from './validate/checkEmail';
import checkCNChars from './validate/checkCNChars';
import checkPhone from './validate/checkPhone';
import checkIPv6 from './validate/checkIPv6';
import checkPostCode from './validate/checkPostCode';

/**
 * 浏览器操作
 */
import exitFullscreen from './browser/exitFullscreen';
import openFullScreen from './browser/openFullScreen';
import scrollToBottom from './browser/scrollToBottom';
import scrollToTop from './browser/scrollToTop';
import scrollToElement from './browser/scrollToElement';

/**
 * cookie操作
 */
import getCookie from './cookie/getCookie';
import removeCookie from './cookie/removeCookie';
import setCookie from './cookie/setCookie';

/**
 * 设备操作
 */
import isAndroidDevice from './device/isAndroidDevice';
import isAppleDevice from './device/isAppleDevice';
import isMobile from './device/isMobile';
import osType from './device/osType';

/**
 * localStorage
 */
import getLocalStorage from './localStorage/getLocalStorage';
import removeLocalStorage from './localStorage/removeLocalStorage';
import setLocalStorage from './localStorage/setLocalStorage';

/**
 * 数字操作
 */
import randomNum from './number/randomNum';

/**
 * 字符串操作
 */
import camelFormat from './string/camelFormat';
import fistLetterUpper from './string/fistLetterUpper';
import phoneFormat from './string/phoneFormat';

/**
 * 时间操作
 */
import dateFormat from './time/dateFormat';

/**
 * 常用工具
 */
import getType from './tools/getType';

/**
 * url操作
 */
import queryToStr from './url/queryToStr';

export default {
  arrayFlat,
  checkIdCard,
  checkEmail,
  exitFullscreen,
  openFullScreen,
  scrollToBottom,
  scrollToTop,
  scrollToElement,
  getCookie,
  setCookie,
  removeCookie,
  isAppleDevice,
  isMobile,
  isAndroidDevice,
  osType,
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
  randomNum,
  camelFormat,
  fistLetterUpper,
  phoneFormat,
  dateFormat,
  getType,
  queryToStr,
  checkIPv6,
  checkPostCode,
  checkCNChars,
  checkPhone,
};
