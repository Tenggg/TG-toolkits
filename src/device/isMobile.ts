/**
 * 判断是移动还是PC设备
 */
function isMobile() {
  if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i)) {
    return 'mobile';
  }
  return 'desktop';
}

export default isMobile;
