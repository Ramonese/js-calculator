/* eslint-disable no-undef */
const calculator = require("./js/calculatorEC.js");

// Get input from screen = user count
const input = 9;
const basicOptCount = 2;
const videoOptCount = false;
const data = [
	{
		users: 5,
		basePrice: 170,
		optionPrice: 20,
		videoOptionPrice: 35,
		implementDays: 3
	},
	{
		users: 10,
		basePrice: 250,
		optionPrice: 30,
		videoOptionPrice: 35,
		implementDays: 3
	},
	{
		users: 15,
		basePrice: 320,
		optionPrice: 40,
		videoOptionPrice: 40,
		implementDays: 3
	},
	{
		users: 20,
		basePrice: 400,
		optionPrice: 50,
		videoOptionPrice: 50,
		implementDays: 4
	},
	{
		users: 25,
		basePrice: 480,
		optionPrice: 60,
		videoOptionPrice: 60,
		implementDays: 4
	},
	{
		users: 30,
		basePrice: 560,
		optionPrice: 70,
		videoOptionPrice: 70,
		implementDays: 5
	},
	{
		users: 35,
		basePrice: 640,
		optionPrice: 80,
		videoOptionPrice: 80,
		implementDays: 5
	}
];
const user5 = new calculator.ECCalculator(5);
const user35 = new calculator.ECCalculator(35);
const price = {
	users: 35,
	basePrice: 640,
	optionPrice: 80,
	videoOptionPrice: 80,
	implementDays: 5
};
describe("testing ECCalculator class", () => {
	const implementationPrice = 1125;
	test("find prices per user group 30-35", () => {
		expect(user35.prices).toEqual(price);
	});
	test("get base price", () => {
		expect(user35.basePrice()).toEqual(640);
	});
	test("get option price", () => {
		expect(user35.optionPrice()).toEqual(80);
	});
	test("get video option price", () => {
		expect(user35.videoOptionPrice()).toEqual(80);
	});
	test("get implementation cost ", () => {
		expect(user35.implementationCost(implementationPrice)).toEqual(5 * implementationPrice);
	});
});
describe("testing sum functionality", () => {
	test("sum option cost", () => {
		expect(calculator.sumOptionCost(80, 2)).toBe(160);
	});
	test("sum total price", () => {
		expect(calculator.sumTotalPrice(640, 80, 80)).toBe(800);
	});
	test("calculate price per user", () => {
		expect(calculator.calcPricePerUser(800, 35)).toBe(22.86);
	});
	test("format floating point number", () => {
		expect(calculator.formatToNumber(22.7777)).toBe(22.78);
	});

});

