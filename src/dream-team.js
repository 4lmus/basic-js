const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  for(let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === 'string') {
      members[i] = members[i].trimStart();
      members[i] = members[i].toUpperCase();
    }
  }
  members.sort();
  let dreamTeam = '';
  for(let i = 0; i < members.length; i += 1) {
      if (typeof members[i] === 'string') {
          dreamTeam += members[i][0];
      }
  }
  return dreamTeam;
}

module.exports = {
  createDreamTeam
};
