const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== -1) {
      newArr.push(arr[i]);
    }
  }
  newArr = newArr.sort((a, b) => a - b);
  console.log(newArr);
  let resultArr = [];
  let countOfI = 0;
  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      resultArr.push(arr[i]);
      countOfI += 1;
    }
    else {
      resultArr.push(newArr[i-countOfI]);
    }
  }
  return resultArr;
}

module.exports = {
  sortByHeight
};
