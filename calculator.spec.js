//const calculator = require('./js/calculatorEC.js');
import { sum } from './js/calculatorEC.js';


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});