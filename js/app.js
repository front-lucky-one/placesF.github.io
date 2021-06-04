"use strict";

var swiper = new Swiper(document.querySelector('.swiper-container'), {
  speed: 400,
  spaceBetween: 60,
  navigation: {
    nextEl: document.querySelector('.button-next'),
    prevEl: document.querySelector(".button-prev")
  },
  slidesPerView: 3
});
var swiper2 = new Swiper(document.querySelector('.swiper-container2'), {
  speed: 400,
  spaceBetween: 60,
  navigation: {
    nextEl: document.querySelector('.btn-next'),
    prevEl: document.querySelector(".btn-prev")
  },
  slidesPerView: 3
});
var tabsButton = document.querySelector('.btn-block-tab').querySelectorAll('.button');
var tabsTable = document.querySelector('.wrapp-tabs').querySelectorAll('.tabs-block');
tabsButton.forEach(function (e, index) {
  e.addEventListener('click', function (item) {
    removeClass(tabsButton, 'button_active');
    removeClass(tabsTable, 'active-tab');
    addClass({
      item: item.target,
      index: index
    });
  });
});

function removeClass(item, className) {
  item.forEach(function (e) {
    e.classList.remove(className);
  });
}

function addClass(object) {
  object.item.classList.add('button_active');
  tabsTable[object.index].classList.add('active-tab');
}