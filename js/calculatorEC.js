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
// const input = 9;
// const basicOptCount = 2;
// const videoOptCount = 1;
const implementationPrice = 1250;
// let videoOption=true;
class ECCalculator {
	constructor (users) {
		this.users = users;
		this.prices = data.find(function (element) {
			// console.log("what is users", typeof users, element.users, element.users == users);
			return element.users === users;
		});
	}

	basePrice() {
		return this.prices.basePrice;
	}

	optionPrice() {
		return this.prices.optionPrice;
	}

	videoOptionPrice() {
		return this.prices.videoOptionPrice;
	}

	implementationCost(price) {
		const time = this.price.implementDays;
		return time * price;
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

const ui = document.getElementById("ecCalculator");
const ui_userCount = ui.querySelector('select');
const ui_form = ui.querySelector('form');
const ui_optionCount = ui.querySelectorAll('input[type=checkbox]');
console.log(ui, ui_userCount, ui_optionCount, ui_form);
let optionSelectedCount = 0;
ui_optionCount.forEach(function(el) {
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
let userCountInitial = 5;
let userCountCurrent = 0;
const initialCalc = new ECCalculator(userCountInitial);
ui_userCount.addEventListener('change', function (ev) {
	// DOM input allways is String
	userCountCurrent = Number(ev.target.value);
	return userCountCurrent;
	
// 	
// 	ui_monthly = calcPricePerUser(sumTotalPrice(), users);
// 	ui_implementation = calc.implementationCost();
// 	ui_total = sumTotalPrice();
// 	sumOptionCost(10, optionCount);
});

// update result on any change
ui_form.addEventListener('change', function () {
	//console.log(userCountInitial, userCountCurrent, optionSelectedCount);
	if (userCountCurrent === userCountInitial) {
		return initialCalc;
	}
	else {
		const calc = new ECCalculator(userCountCurrent);
		setPricesUI(calc);
	}
	
	//updateUI();
});
function updateUI() {
	//const calc = new ECCalculator(5);
	console.log(calc);
}

function setPricesUI(object) {
	const defaultPrice = object.basePrice();
	const optionPrice = object.optionPrice();
	const optionCost = sumOptionCost(optionPrice, optionSelectedCount);
	const totalCost = sumTotalPrice(defaultPrice, optionCost, 10);
	console.log("price", defaultPrice);
	//implementation = calc.implepmentationCost(implementationPrice);
}
var module;
module.exports = { ECCalculator: ECCalculator };