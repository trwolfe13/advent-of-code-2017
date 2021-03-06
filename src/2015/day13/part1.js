const array = require('../../util/array');
const seating = require('./seating');

module.exports = function (input) {
  const g = seating.parse(input);
  const p = seating.perms(g);
  return array.projectReduce(p, n => seating.permDelta(n, g), (p, c) => c > p).value;
}