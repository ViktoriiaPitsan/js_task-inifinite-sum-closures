'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  const adder = (num) => {
    if (num === undefined) {
      const result = totalSum;

      totalSum = 0;

      return result;
    } else {
      totalSum = totalSum + num;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
