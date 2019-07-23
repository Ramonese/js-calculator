/* eslint-disable quotes */
/* eslint-disable comma-dangle */
'use strict';
/*
author: ieva.ozolite@visma.com
*/
// EC Price list
const data = [
	{
		users: 5,
		basePrice: 170,
		optionPrice: 20,
		videoOptionPrice: 35,
		implementDays: 3,
	},
	{
		users: 10,
		basePrice: 250,
		optionPrice: 30,
		videoOptionPrice: 35,
		implementDays: 3,
	},
	{
		users: 15,
		basePrice: 320,
		optionPrice: 40,
		videoOptionPrice: 40,
		implementDays: 3,
	},
	{
		users: 20,
		basePrice: 400,
		optionPrice: 50,
		videoOptionPrice: 50,
		implementDays: 4,
	},
	{
		users: 25,
		basePrice: 480,
		optionPrice: 60,
		videoOptionPrice: 60,
		implementDays: 4,
	},
	{
		users: 30,
		basePrice: 560,
		optionPrice: 70,
		videoOptionPrice: 70,
		implementDays: 5,
	},
	{
		users: 35,
		basePrice: 640,
		optionPrice: 80,
		videoOptionPrice: 80,
		implementDays: 5,
	},
];
// Get input from screen = user count
const input = 9;
const basicOptCount = 2;
const videoOptCount = 1;
const implementationPrice = 1250;
// let videoOption=true;
class ECCalculator {
	constructor (users) {
		this.users = users;
		this.price = new Prices(users);
	}

	implementationCost () {
		return this.price.calcImplementationCost(implementationPrice);
	}

	optionPrice (options) {
		return this.price.optionPrice(options);
	}

	videoOptionPrice () {
		return this.price.videoOptionPrice();
	}

	basePrice() {
		return this.price.basePrice();
	}
}

class Prices {
	constructor (userCount) {
		this.users = userCount;
		this.priceList = this.getDefaultPrices(this.users);
	}

	// Find Price object based on user count
	getDefaultPrices (users) {
		const price = data.find(el => el.users === users);
		console.log(price);
		return price;
	}

	calcImplementationCost (price) {
		return this.priceList.implementDays * price;
	}

	videoOptionPrice () {
		return this.priceList.videoOptionPrice;
	}

	optionPrice() {
		return this.priceList.optionPrice;
	}

	basePrice() {
		return this.priceList.basePrice;
	}
}
function sumOptionCost(optionPrice, optionCount) {
	return optionPrice * optionCount;
}
function sumTotalPrice (price, option, videoOption) {
	return price + option + videoOption;
}
function calcPricePerUser (total, user) {
	return total / user;
}
var users5 = new ECCalculator(10, data);
const x = users5.videoOptionPrice();
console.log('#### get ui price', x);
const y = users5.optionCost(basicOptCount);
console.log('#### get ui o price', y);
const z = users5.perUserCost();
console.log('#### get ui per user price', z);
var module;
module.exports = { ECCalculator: ECCalculator, Prices: Prices };

const userCountSelect = document.getElementById('ecUserSelect');
const optionC = document.querySelectorAll('.ecUserSelect input[type=checkbox]');
let optionCount = 1;
optionCount.addEventListener('change', function () {
	const options = [];
	if (this.checked === true) {
		options.push(this);
	}
	optionCount = options;
	return options;
});
// userCountSelect.addEventListener('select', function () {

// })
const ui_total = document.getElementById('ec-totalPriceMonth').textContent;
let ui_monthly = document.getElementById('ec-totalPricePerson').textContent;
let ui_implementation = document.getElementById('ec-implementCost').textContent;
const ecCalculator = document.querySelector('#ec-calc form');
ecCalculator.addEventListener('change', function () {
	const users = userCountSelect.value();
	const calc = new ECCalculator(users);
	const defaultPrice = calc.basePrice();

	implementation = calc.implepmentationCost(implementationPrice);
	ui_monthly = calcPricePerUser(sumTotalPrice(), users);
	ui_implementation = calc.implementationCost();
	ui_total = sumTotalPrice();
	sumOptionCost(10, optionCount);
});
sumOptionCost(10, optionCount);