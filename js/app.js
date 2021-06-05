"use strict";

var nav = document.querySelector('.nav');
var burger = document.querySelector('.burger').addEventListener('click', function (e) {
  this.classList.toggle('change');
  nav.classList.toggle('activeNav');
});
var swiper = new Swiper(document.querySelector('.swiper-container'), {
  speed: 400,
  spaceBetween: 60,
  navigation: {
    nextEl: document.querySelector('.button-next'),
    prevEl: document.querySelector(".button-prev")
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  },
  slidesPerView: 3
});
var swiper2 = new Swiper(document.querySelector('.swiper-container2'), {
  speed: 400,
  spaceBetween: 20,
  navigation: {
    nextEl: document.querySelector('.btn-next'),
    prevEl: document.querySelector(".btn-prev")
  },
  breakpoints: {
    480: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    }
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