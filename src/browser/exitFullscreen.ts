/**
 * 退出浏览器全屏
 */
function exitFullscreen() {
  const element: any = document;
  if (element.exitFullscreen) {
    element.exitFullscreen();
  } else if (element.msExitFullscreen) {
    element.msExitFullscreen();
  } else if (element.mozCancelFullScreen) {
    element.mozCancelFullScreen();
  } else if (element.webkitExitFullscreen) {
    element.webkitExitFullscreen();
  }
}

export default exitFullscreen;
