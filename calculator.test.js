const calculator = require('./js/calculatorEC.js');
//import { sum } from './js/calculatorEC.js';
//Get input from screen = user count
let input = 9;
let basicOptCount = 2;
let videoOptCount = 1;

const data = [
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
const user = new calculator.ECCalculator(5, data);
const user2 = new calculator.ECCalculator(35, data);


const users = user.users;
const userCount2 = user2.users;
test('calculate implementation cost based on implementation days', () => {
  expect(user.calcImplementationCost(3)).toBe(3375)
});
test('calculate option total price', () => {
  expect(user.calcOptionPrice(2, 20)).toBe(40)
});
test('calculate lowest price per user/month', () => {
  const price = 170;
  expect(user.calcPricePerUser(price, users)).toBe(34)
});
test('find prices per user group 1-5', () => {
  const price = {
      users: 5,
      defaultPrice: 170,
      basicOption: 20,
      videoOption: 35,
      implementation: 3,
    };

  expect(user.getDefaultPrices(users)).toEqual(price)
});
test('find prices per user group 30-35', () => {
  const price2 = {
      users: 35,
      defaultPrice: 640,
      basicOption: 80,
      videoOption: 80,
      implementation: 5,
    }
  expect(user.getDefaultPrices(userCount2)).toEqual(price2)
});
test('get base price in user group 1-5', () => {
  expect(user.getBasePrice(users)).toBe(170);
});
test('get base price in user group 30-35', () => {
  expect(user.getBasePrice(userCount2)).toBe(640);
});
test('get option price in user group 1-5', () => {
  expect(user.getOptionPrice(users)).toBe(20);
});
test.only('get all prices for UI in user group 1-5', () => {
  expect(user.uiPrices(users)).toBe(20);
});
// test('returns price based on user count', () => {
//   expect(calculator.price(5)).toBe(170);
// });
// test('returns option price based on user count', () => {
//   expect(calculator.options(data, 10)).toBe(30);
// });
// test('get option price based on user count , option price & option count', () => {
//   expect(calculator.sumOptions(5, 2)).toBe(40);
// });
// test('get option price based on user count , option price & option count', () => {
//   expect(calculator.sumOptions(5, 2)).toBe(40);
// });
// test('calculate user price per month', () => {
//   expect(calculator.pricePerUser(10, 250)).toBe(25);
// });
// test('calculate implementation price based on days necessary', () => {
//   expect(calculator.priceImplementation(5, implementationPrice)).toBe(5625);
// });
// test('calculate total price for selected options', () => {
//   expect(calculator.priceOption(60, optionCount)).toBe(120)
// })
