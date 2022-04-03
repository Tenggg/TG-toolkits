/**
 *  base64转file
 *  @param { base64 } base64
 *  @param { string } filename 转换后的文件名
 */
function base64ToFile(base64: string, filename: string): any {
  const arr = base64.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1];
  if (!mime) {
    return false;
  }
  const suffix = mime.split('/')[1]; // 图片后缀
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  // eslint-disable-next-line no-undef
  return new File([u8arr], `${filename}.${suffix}`, { type: mime });
}
