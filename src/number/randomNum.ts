/**
 * 生成指定范围随机数
 * @param start 起始值
 * @param end 结束值
 */
function randomNum(start: number, end: number) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

export default randomNum;
