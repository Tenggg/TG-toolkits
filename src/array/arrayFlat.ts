/**
 * @author Tenggg
 * @desc 数组平铺
 * @param {Array} arr
 * @return {Array}
 */
function arrayFlat(array: any) {
  let newArray: any = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      newArray = newArray.concat(arrayFlat(array[i]));
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

export default arrayFlat;
