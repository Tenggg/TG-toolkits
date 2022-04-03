/**
 * file转base64
 * @param { * } file 图片文件
 */
function fileToBase64(file: any) {
  // eslint-disable-next-line no-undef
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    return e.target?.result;
  };
}

export default fileToBase64;
