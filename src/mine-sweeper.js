const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  let rows = [];
  let cols = [];
  for(let i = 0; i < matrix.length; i += 1) {
    for(let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === true) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  for(let i = 0; i < matrix.length; i += 1) {
    let minesRow = [];
    for(let j = 0; j < matrix[i].length; j += 1) {
      let mines = 0;
      for(let k = 0; k < rows.length; k += 1) {
        if (!(i === rows[k] && j === cols[k])) {
          if (Math.abs(rows[k] - i) <= 1 && Math.abs(cols[k] - j) <= 1) {
            mines += 1;
          }
        }
      }
      minesRow.push(mines);
    }
    result.push(minesRow);
  }
  return result
}

module.exports = {
  minesweeper
};
