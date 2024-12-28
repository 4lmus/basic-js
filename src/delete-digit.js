const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nAsString = String(n);
  let maxNumber = +(nAsString.slice(1));
  let number;
  for (let i = 0; i < nAsString.length; i += 1) {
      let str2 = nAsString;
      if(i === 0) {
          number = +(str2.slice(1));
      }
      if(i === str2.length-1) {
          number = +(str2.slice(0, str2.length-1));
      }
      else {
          number = +(str2.slice(0, i) + str2.slice(i + 1));
      }
      if(number > maxNumber) {
          maxNumber = number;
      }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
