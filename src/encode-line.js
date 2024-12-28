const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strForLoop = str;
  let resultStr = '';
  for (let i = 0; i < str.length; i += 1){
      let char = str[i];
      if(!resultStr.includes(char)) {
          let num = 0;
          num += 1;
          strForLoop = strForLoop.slice(strForLoop.indexOf(char)+1);
          for (let j = 0; j < strForLoop.length; j += 1) {
              if(strForLoop[0] !== char){
                  break;
              }
              if(strForLoop[j] === char) {
                  num += 1;
              }
          }
          if (num === 1) {
              resultStr += char
          }
          else {
              let charPlusNum = num+char;
              resultStr = resultStr + charPlusNum;
          }
          continue;
      }
      if(resultStr.includes(char) && !Number.isInteger(+resultStr[resultStr.lastIndexOf(char)-1])){
          let num = 0;
          num += 1;
          strForLoop = strForLoop.slice(strForLoop.indexOf(char)+1);
          for (let j = 0; j < strForLoop.length; j += 1) {
              if(strForLoop[0] !== char){
                  break;
              }
              if(strForLoop[j] === char) {
                  num += 1;
              }
          }
          if (num === 1) {
              resultStr += char
          }
          else {
              let charPlusNum = num+char;
              resultStr = resultStr + charPlusNum;
          }
      }
  }
  return resultStr;
}

module.exports = {
  encodeLine
};
