/**
 * 判断是Windows还是Mac系统
 */
function osType() {
  const agent = navigator.userAgent.toLowerCase();
  const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  const isWindows =
    agent.indexOf('win64') >= 0 ||
    agent.indexOf('wow64') >= 0 ||
    agent.indexOf('win32') >= 0 ||
    agent.indexOf('wow32') >= 0;
  if (isWindows) {
    return 'windows';
  }
  if (isMac) {
    return 'mac';
  }
}

export default osType;
