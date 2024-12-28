const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
let minWord = domains[0];
let maxWord = domains[0];
for(let i = 0; i < domains.length; i += 1) {
    if(domains[i].length < minWord.length) {
        minWord = domains[i];
    }
    if(domains[i].length > maxWord.length) {
        maxWord = domains[i];
    }
}

const indexOfDot = minWord.indexOf('.');
const country = minWord.slice(indexOfDot);
let numOfCountry = 0;
for(let i = 0; i < domains.length; i += 1) {
    if(domains[i].includes(country)) {
        numOfCountry += 1;
    }
}
let numOfMinWord = 0;
for(let i = 0; i < domains.length; i += 1) {
    if(domains[i].includes(minWord)) {
        numOfMinWord += 1;
    }
}

let map = new Map();
map.set(`${minWord.slice(indexOfDot)}`, numOfCountry);
map.set(`${minWord.slice(indexOfDot)+'.'+minWord.slice(0, indexOfDot)}`, numOfMinWord);
let obj = Object.fromEntries(map);

return obj
}

module.exports = {
  getDNSStats
};
