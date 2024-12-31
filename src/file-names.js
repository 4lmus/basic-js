const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if(names.length === 0) {
    return []
  }
  let newNames = [];
  newNames.push(names[0]);
  for(let i = 1; i < names.length; i += 1) {
    let countRepeatedFiles = 0;
    for(let k = 0; k < i; k += 1) {
      if(names[k] === names[i]) {
        countRepeatedFiles += 1;
      }
    }
    if(countRepeatedFiles !== 0) {
      newNames.push(names[i]+`(${countRepeatedFiles})`);
    }
    else {
      newNames.push(names[i]);
      for(let k = 0; k < i; k += 1) {
        if(newNames[k] === newNames[i]) {
            countRepeatedFiles += 1;
        }
      }
      if(countRepeatedFiles !== 0) {
        newNames = newNames.slice(0, -1);
        newNames.push(names[i]+`(${countRepeatedFiles})`);
      }
    }
  }
  return newNames;
}

module.exports = {
  renameFiles
};
