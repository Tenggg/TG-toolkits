/**
 * 暂停代码运行
 * @param milliseconds
 */
async function sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export default sleep;