/* eslint-disable quotes */
/* eslint-disable comma-dangle */
'use strict';
/*
author: ieva.ozolite@visma.com
*/
var cutMustard = {};
if (document.documentElement.classList.add) {
	cutMustard.addClass = function (el, className) {
		return el.classList.add(className);
	};
}
if (cutMustard.addClass) {
	console.log("cutting the mustard!");
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
		{
			users: 40,
			basePrice: 720,
			optionPrice: 90,
			videoOptionPrice: 90,
			implementDays: 5,
		},
		{
			users: 45,
			basePrice: 800,
			optionPrice: 100,
			videoOptionPrice: 100,
			implementDays: 6,
		},
		{
			users: 50,
			basePrice: 880,
			optionPrice: 110,
			videoOptionPrice: 110,
			implementDays: 6,
		},
		{
			users: 55,
			basePrice: 960,
			optionPrice: 160,
			videoOptionPrice: 160,
			implementDays: 6,
		},
	];
	const implementationPrice = 1125;
	class ECCalculator {
		constructor(users) {
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
			const time = this.prices.implementDays;
			return time * price;
		}
	}
	function formatToNumber(input) {
		return Number((input).toFixed(2));
	}
	function sumOptionCost(optionPrice, optionCount) {
		const result = optionPrice * optionCount;
		return formatToNumber(result);
	}
	function sumTotalPrice(price, option, videoOption) {
		const result = price + option + videoOption;
		return formatToNumber(result);
	}
	function calcPricePerUser(total, user) {
		const result = total / user;
		return formatToNumber(result);
	}

	if (typeof module !== "undefined" && module.exports) {
		var module;
		module.exports = {
			ECCalculator: ECCalculator,
			sumOptionCost: sumOptionCost,
			sumTotalPrice: sumTotalPrice,
			calcPricePerUser: calcPricePerUser,
			formatToNumber: formatToNumber
		};
	}
	// Form UI DOM elements
	const ui = document.getElementById("ecCalculator");
	if (ui) {
		const ui_userCount = ui.querySelector('select');
		const ui_form = ui.querySelector('form');
		const ui_optionCount = ui.querySelectorAll('.ec__basePrice input[type=checkbox]');
		const ui_videoOptionCount = ui.querySelectorAll('.ec__extraPrice input[type=checkbox]');

		let optionSelectedCount = 0;
		let videoOptionSelected = false;

		ui_optionCount.forEach(function (el) {
			el.addEventListener('change', function () {
				if (this.checked === true) {
					optionSelectedCount = optionSelectedCount + 1;
				} else {
					optionSelectedCount = optionSelectedCount - 1;
				}
				console.log(optionSelectedCount);
			});
		}
		);
		ui_videoOptionCount.forEach(function (el) {
			el.addEventListener('change', function () {
				if (this.checked === true) {
					videoOptionSelected = true;
				} else {
					videoOptionSelected = false;
				}
				console.log(videoOptionSelected);
			});
		}
		);
		ui_userCount.addEventListener('change', function (ev) {
			// DOM input allways is String
			userCountCurrent = Number(ev.target.value);
			return userCountCurrent;
		});
		// Result UI DOM elements
		const ui_total = document.getElementById('ec-totalPriceMonth');
		const ui_monthly = document.getElementById('ec-totalPricePerson');
		const ui_implementation = document.getElementById('ec-implementCost');
		const userCountInitial = 5;
		let userCountCurrent = 5;

		// eslint-disable-next-line no-inner-declarations
		function setPricesUI(object) {
			const defaultPrice = object.basePrice();
			const optionPrice = object.optionPrice();
			const optionCost = sumOptionCost(optionPrice, optionSelectedCount);
			const implementationCost = object.implementationCost(implementationPrice);
			// If video option is selected, get its price
			const videoOption = videoOptionSelected ? object.videoOptionPrice() : 0;
			const totalCost = sumTotalPrice(defaultPrice, optionCost, videoOption);
			const pricePerUser = calcPricePerUser(totalCost, userCountCurrent);
			console.log("price", defaultPrice);
			// Update DOM
			ui_monthly.textContent = pricePerUser;
			ui_total.textContent = totalCost;
			ui_implementation.textContent = implementationCost;
		}

		// update result on any change in the form
		ui_form.addEventListener('change', function () {
			if (userCountCurrent === userCountInitial) {
				const calc = new ECCalculator(userCountInitial);
				setPricesUI(calc);
				console.log(calc);
			} else {
				const calc = new ECCalculator(userCountCurrent);
				setPricesUI(calc);
				console.log(calc);
			}
		});
		// eslint-disable-next-line no-inner-declarations
		function updateUI() {
			const calc = new ECCalculator(userCountInitial);
			console.log(calc);
			setPricesUI(calc);
		}
		// Initial state
		updateUI();
	}
}