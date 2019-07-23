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
	
	basePrice() {
		return this.users;
	}
	
	implementationCost(price) {
		const time = this.price.implementationTime();
		return time * price;
	}
}

class Prices {
	constructor (userCount) {
		this.users = userCount;
		this.priceList = this.getDefaultPrices(this.users);
	}

	// Find Price based on user count
	getDefaultPrices (users) {
		const price = data.find(el => el.users === users);
		console.log("Price from Price", price);
		return price;
	}

	basePrice() {
		return this.priceList.basePrice;
	}

	videoOptionPrice () {
		return this.priceList.videoOptionPrice;
	}

	optionPrice() {
		return this.priceList.optionPrice;
	}

	implementationTime() {
		return this.priceList.implementDays;
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
var users5 = new ECCalculator(10, 10);
const x = users5.price.optionPrice();
console.log('#### get ui price', x);
const y = users5.implementationCost(implementationPrice);
console.log('#### get ui o price', y);

const ui = document.getElementById("ecCalculator");
const ui_userCount = ui.querySelector('select');
const ui_optionCount = ui.querySelectorAll('input[type=checkbox]');
console.log(ui, ui_userCount, ui_optionCount);
let optionSelectedCount = 0;
ui_optionCount.forEach(el => {
	el.addEventListener('change', function () {
		if (this.checked === true) {
			console.log("check");
			optionSelectedCount = optionSelectedCount + 1;
		}
		else {
			optionSelectedCount = optionSelectedCount - 1;
		}
		return optionSelectedCount;
	});
}
);

const ui_total = document.getElementById('ec-totalPriceMonth').textContent;
let ui_monthly = document.getElementById('ec-totalPricePerson').textContent;
let ui_implementation = document.getElementById('ec-implementCost').textContent;

ui_userCount.addEventListener('change', function (ev) {
	const users = ev.target.value;
	console.log(users);
	const calc = new ECCalculator(users, users);
	console.log(calc);
	//debugger
	const defaultPrice = calc.price.optionPrice();

	console.log("Price", defaultPrice);

	implementation = calc.implepmentationCost(implementationPrice);
	ui_monthly = calcPricePerUser(sumTotalPrice(), users);
	ui_implementation = calc.implementationCost();
	ui_total = sumTotalPrice();
	sumOptionCost(10, optionCount);
});

var module;
module.exports = { ECCalculator: ECCalculator, Prices: Prices };