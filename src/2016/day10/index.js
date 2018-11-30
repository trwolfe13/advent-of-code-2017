const file = require('../../util/file');
const part1 = require('./part1');
const part2 = require('./part2');

console.log('  Day 10');
let input = file.readString(__dirname, 'input.txt');

console.log('    Part 1:', part1(input));
console.log('    Part 2:', part2(input));
