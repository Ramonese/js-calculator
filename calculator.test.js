const calculator = require('./js/calculatorEC.js');
//import { sum } from './js/calculatorEC.js';
var data = [
  {
    users: 5,
    defaultPrice: 170,
    basicOption: 20,
    videoOption: 35,
    implementation: 3,
  },
  {
    users: 10,
    defaultPrice: 250,
    basicOption: 30,
    videoOption: 35,
    implementation: 3,
  },
  {
    users: 15,
    defaultPrice: 320,
    basicOption: 40,
    videoOption: 40,
    implementation: 3,
  },
  {
    users: 20,
    defaultPrice: 400,
    basicOption: 50,
    videoOption: 50,
    implementation: 4,
  },
  {
    users: 25,
    defaultPrice: 480,
    basicOption: 60,
    videoOption: 60,
    implementation: 4,
  },
  {
    users: 30,
    defaultPrice: 560,
    basicOption: 70,
    videoOption: 70,
    implementation: 5,
  },
  {
    users: 35,
    defaultPrice: 640,
    basicOption: 80,
    videoOption: 80,
    implementation: 5,
  }
]

test('find user price data from array', () => {
  expect(calculator.findUserData(10)).toEqual({
    users: 10,
    defaultPrice: 250,
    basicOption: 30,
    videoOption: 35,
    implementation: 3,
  });
});
// test('returns price based on user count', () => {
//   expect(calculator.price(5)).toBe(170);
// });
test('returns option price based on user count', () => {
  expect(calculator.options(data, 10)).toBe(30);
});
test('get option price based on user count , option price & option count', () => {
  expect(calculator.sumOptions(5, 2)).toBe(40);
});
test('get option price based on user count , option price & option count', () => {
  expect(calculator.sumOptions(5, 2)).toBe(40);
});
test('calculate user price per month', () => {
  expect(calculator.pricePerUser(10, 250)).toBe(25);
});


