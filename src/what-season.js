const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if(!(date instanceof Date && !isNaN(date.getTime()))){
    throw new Error("Invalid date!")
  }
  let monthNow = date.getMonth();
  let day;
  if(monthNow === 0) {
    day = 31;
  } else {
    if(monthNow === 1) {
      day = 28;
    } else {
      if(monthNow <= 6 && monthNow % 2 === 0 && monthNow > 2 || monthNow > 6 && monthNow % 2 === 1) {
        day = 31
      }
      else {
        day = 30
      }
    }
  }
  let dayNow = date.getDate();
  if(dayNow > day) {
    monthNow += 1;
  }

  if(monthNow >= 0 && monthNow < 2 || monthNow === 11) {
    return 'winter';
  } else {
    if(monthNow >= 2 && monthNow < 5) {
      return 'spring';
    }
    else {
      if(monthNow >= 5 && monthNow < 8) {
        return 'summer';
      }
      else {
        if(monthNow >= 8 && monthNow < 11) {
          return 'autumn';
        }
      }
    }
  }
}

module.exports = {
  getSeason
};
