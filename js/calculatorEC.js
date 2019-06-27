"use strict";

/*
author: ieva.ozolite@visma.com
*/
// Progressive enhancement: if js & modern browser, then add js, otherwise do nothing
var cutMustard = {};

if (document.documentElement.classList.add) {
  cutMustard.addClass = function (el, className) {
    return el.classList.add(className);
  };
}
if (cutMustard.addClass) {
  var pageTheme = document.querySelector("body");
  pageTheme.classList.add("testvl--basic-template");

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

function price(users) {
    let price = 170;
    return users * price;
  }
  function findUserData(input) {
    let result = data.find(item => item.users === input);
    console.log(result)
    return result;
  }
  function options(array, users) {
    let user = findUserData(users);
    let result = user.basicOption;
    console.log("OPTION", result);
    return result
  }
  function sumOptions(users, optionCount) {
    const user = findUserData(users);
    let price = user.basicOption;
    let result = price * optionCount; 
    return result;
  }
  var module;
  module.exports = {
  
    price: price,
    options: options,
    findUserData: findUserData,
    sumOptions: sumOptions
  }
 
}
/* Efficiency calculator */

// if (typeof module !== "undefined" && module.exports) {
//   var module;
//   module.exports = {
//     sum: sum,
//   };
// }
// $(document).ready(function() {
//   var vismaSaima = vismaSaima || {};

//   vismaSaima.calculator = function() {
    // GLOBAL VARS (scoped to vismaSaima.calculator)
//     {
//       // TODO=Replace with code in  html, when epi server lets to add inline svg
//       var svgImage =
//         '<span class="optionalModules-icon"><svg  viewBox="0 0 100 100"> <g class="checkbox-icon"><circle class="checkBck" cx="50" cy="50" r="50" /><path class="checkV" d="M70.7,41.7L48.6,63.1c-0.5,0.5-0.7,0.6-1.3,0.9c-0.2,0.1-0.9,0.2-1.2,0.2c-0.5,0-1-0.2-1.2-0.2 c-0.5-0.2-0.8-0.4-1.3-0.9l-13.4-14c-1.3-1.4-1.4-3.5-0.2-4.7c1.2-1.2,3.3-1.1,4.6,0.3l11.5,11.9l20.2-19.5c1.4-1.3,3.5-1.4,4.7-0.2C72.2,38.3,72.1,40.4,70.7,41.7z" /></g></svg></span>';
//       var $totalPrice = $("#totalPriceMonth"),
//         $totalPriceUser = $("#totalPricePerson"),
//         $userCount = $("#employeeCount"),
//         $totalPriceYear = $("#totalPriceYear"),
//         $totalModules = $("#modules"),
//         userInput = document.getElementById("userCount"),
//         $checkboxes = $("#optionalModules input[type=checkbox]"),
//         $inputErrorMsg = $(".saimaCalculator-message"),
//         currency = " &euro;";
//       // $userInput = $("#userCount"),//for form error..
//     }

//     // update result html with "0.00" when no price to show*/
//     function displayEmptyPrice() {
//       var zeroPrice = "0.00";
//       $totalPrice.html(zeroPrice + currency);
//       $totalPriceUser.html(zeroPrice + currency);
//       $totalPriceYear.html(zeroPrice + currency);
//     }
//     // Helper function: format number with thousand separated
//     function formatNumber(number) {
//       return String(number).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
//     }
//     // HTML Setup for epmpty calculator
//     function firstLoad() {
//       $(svgImage).insertBefore("#optionalModules span"); //add svg illustration to ul. TODO=Remove, when epi server lets to add inline svg
//       $totalModules.html(0); //selected optional modules (dont add to displayEmptyPrice(), because we have to keep showing selected options, even when disabled  )
//       displayEmptyPrice();
//     }
//     // calculate, format and writte price based on user input
//     function displayPrice(price, user) {
//       var pricePerYear = (price * 12).toFixed(2), //pricePerMonth * 12
//         pricePerUser = (price / user).toFixed(2), // pricePerMonth / userInRange
//         priceMonth = price.toFixed(2),
//         formatedPrice = formatNumber(priceMonth),
//         formatedPricePerYear = formatNumber(pricePerYear),
//         formatedPricePerUser = formatNumber(pricePerUser);
//       //update html with calculated price
//       // console.log("format price MONTH: " + priceMonth +  " YEAR " + pricePerYear + " USERS " + user);
//       $totalPrice.html(formatedPrice + currency);
//       $totalPriceUser.html(formatedPricePerUser + currency);
//       $totalPriceYear.html(formatedPricePerYear + currency);
//     }

//     // calculations based on user input
//     function calculatePrice(userAmount) {
//       {
//         var basicPrice, // Saima HR basic module price
//           modulePrice, // Saima optional module price
//           modulRekryPrice, // rekry module price
//           $moduleCount = $checkboxes.filter(".basicOption:checked").length, // checkboxes except Rekry
//           $rekryModuleCount = $("#option1:checked").length, // checkboxe Rekry
//           userAmount = userAmount, //to use in inner function (checkbox)
//           pricePerMonth; // basic price + (options * option count)
//       }
//       //Return Saima HR prices based on user amount
//       function findPriceForUserRange() {
//         if (userAmount >= 1 && userAmount <= 30) {
//           (basicPrice = 59), (modulePrice = 25), (modulRekryPrice = 60);
//         } else if (userAmount <= 50) {
//           (basicPrice = 99), (modulePrice = 40), (modulRekryPrice = 60);
//         } else if (userAmount <= 100) {
//           (basicPrice = 125), (modulePrice = 60);
//           modulRekryPrice = 60;
//         } else if (userAmount <= 150) {
//           (basicPrice = 175), (modulRekryPrice = modulePrice = 80);
//         } else if (userAmount <= 200) {
//           (basicPrice = 205), (modulRekryPrice = modulePrice = 100);
//         } else if (userAmount <= 250) {
//           (basicPrice = 245), (modulRekryPrice = modulePrice = 120);
//         } else if (userAmount <= 300) {
//           (basicPrice = 285), (modulRekryPrice = modulePrice = 140);
//         } else if (userAmount <= 400) {
//           (basicPrice = 370), (modulRekryPrice = modulePrice = 180);
//         } else if (userAmount <= 500) {
//           (basicPrice = 460), (modulRekryPrice = modulePrice = 220);
//         } else if (userAmount <= 600) {
//           (basicPrice = 545), (modulRekryPrice = modulePrice = 240);
//         } else if (userAmount <= 700) {
//           (basicPrice = 630), (modulRekryPrice = modulePrice = 280);
//         } else if (userAmount <= 800) {
//           (basicPrice = 710), (modulRekryPrice = modulePrice = 320);
//         } else if (userAmount <= 900) {
//           (basicPrice = 805), (modulRekryPrice = modulePrice = 360);
//         } else if (userAmount <= 1000) {
//           (basicPrice = 890), (modulRekryPrice = modulePrice = 480);
//         } else if (userAmount > 1000) {
//           var userCountOverMax = userAmount - 1000; //used in calculating monthly price
//           (basicPrice = userCountOverMax * 0.5 + 890),
//             (modulRekryPrice = modulePrice = userCountOverMax * 0.25 + 480);
//         }
//         console.log(userAmount, basicPrice, modulRekryPrice, modulePrice);
//         return basicPrice, modulRekryPrice, modulePrice;
//       }
//       //Calculate monthly total price based on user count and selected options
//       function countPrice(moduleCount, rekryModuleCount) {
//         var totalModulesCount = moduleCount + rekryModuleCount;
//         $totalModules.html(totalModulesCount);
//         var optionalModulePriceTotal =
//           modulePrice * moduleCount + modulRekryPrice * rekryModuleCount; //basic price from range + optional module price from checkbox change
//         console.log(
//           basicPrice,
//           optionalModulePriceTotal,
//           moduleCount,
//           rekryModuleCount
//         );
//         return (pricePerMonth = basicPrice + optionalModulePriceTotal);
//       }
//       //Watch changes in user select options
//       function countOptions() {
//         $checkboxes.change(function() {
//           var $modCount = $checkboxes.filter(".basicOption:checked").length,
//             $rekryModCount = $("#option1:checked").length;
//           console.trace();
//           countPrice($modCount, $rekryModCount);
//           displayPrice(pricePerMonth, userAmount);
//         });
//       }
//       countOptions();
//       findPriceForUserRange();
//       countPrice($moduleCount, $rekryModuleCount);
//       console.log(
//         "TOTAL price: " +
//           pricePerMonth +
//           " /BASIC MODULE price: " +
//           basicPrice +
//           " /OPTIONAL MODULE price " +
//           modulePrice,
//         " /MODUL count: " + $moduleCount,
//         " /Rekry MODULE price: " +
//           modulRekryPrice +
//           " " +
//           $rekryModuleCount +
//           " /USERS: " +
//           userAmount
//       );
//       //Format price and update HTML
//       displayPrice(pricePerMonth, userAmount);
//     }

//     firstLoad();
//     // check userInput for change
//     userInput.addEventListener(
//       "input",
//       function(e) {
//         //field formating - input only number
//         this.value = this.value.replace(/[^0-9\.]/g, "");
//         var $fieldValue = $(this).val(); //content of user input field
//         //check input state: input is empty or 0: 1. add error message on empty input field; 2. disable, but keep checked all checkboxes
//         if ($fieldValue.length == 0 || $fieldValue == 0) {
//           // $userInput.addClass("form-error");
//           $inputErrorMsg.removeClass("fade-out");
//           $checkboxes
//             .prop({ disabled: true })
//             .parent()
//             .addClass("checkbox-disabled");
//           displayEmptyPrice();
//         }
//         //1.remove error message and 2. enable all checkboxes
//         else {
//           $inputErrorMsg.addClass("fade-out");
//           $checkboxes
//             .prop({ disabled: false })
//             .parent()
//             .removeClass("checkbox-disabled");
//           $fieldValue = Number($fieldValue);
//           calculatePrice($fieldValue);
//         }
//       },
//       false
//     );
//   };
  
//   vismaSaima.calculator();
// });
// /*

// TODO TEST


// 
