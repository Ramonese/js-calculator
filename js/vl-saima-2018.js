'use strict';
/*
author: ieva.ozolite@visma.com
*/
// Progressive enhancement: if js & modern browser, then add js, otherwise do nothing
var cutMusturd = {};

if (document.documentElement.classList.add) {
  cutMusturd.addClass = function (el, className) {
    return el.classList.add(className);
  };
}

if (cutMusturd.addClass) {
  console.log("cutting the mustard!");
  var pageTheme = document.querySelector("body");
  pageTheme.classList.add("saima-template");
  
  // Form labels as placeholders
  {
    var $form = $(".EPiServerForms"),
    $fieldsAll = $form.find("input, textarea"),
    $fields = $fieldsAll.filter('input[type=text], input[type=number], input[type=email],  textarea');
    $fields.each(function(){
      var $this = $(this);
      $this.prev("label").addClass("labelPlaceholder");
      $this.wrap( '<div class="wrapInput">');
      $this.focus(function () {
        console.log("focused")
        $this.parent("div").prev("label").addClass("labelPlaceholder--focused");
      }
      ) 
    })
  }
 
 
}

$(document).on("ready", function() {
  //add wraper around some block to group them together as one vl--section-card
   {
     //var $wrapContent = $("#wrapperProductLongPageContent > div:first-child").children("div:nth-of-type(n+3):nth-of-type(-n+5)").addClass("js-wrap-block");
     //$wrapContent.wrapAll("<div class='js-vl--section-card' />");
   }
 })
 