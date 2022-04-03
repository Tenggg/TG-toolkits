/**
 * 金钱格式化，三位加逗号
 * @param num
 */
function formatMoney(num: string | number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default formatMoney;
