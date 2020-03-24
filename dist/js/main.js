"use strict";

// select color button event
var sel = document.querySelector('.color-select i');
var listItems = document.querySelectorAll('.color-select li');
var aside = document.querySelector('.color-select');
var homePage = document.querySelector('#home');
var body = document.body;
sel.addEventListener('click', function (e) {
  aside.classList.toggle('hide');
}); // add color change event
// localStorage.removeItem('color-select');

var colStorage = localStorage['color-select'];

if (colStorage) {
  if (colStorage === '#1AB6CF') {
    body.dataset.color = 'default';
    listItems[0].classList.add('active');
  } else if (colStorage === '#2980b9') {
    body.dataset.color = 'color1';
    listItems[1].classList.add('active');
  } else if (colStorage === '#27ae60') {
    body.dataset.color = 'color2';
    listItems[2].classList.add('active');
  }
}

var colors = document.querySelectorAll('.color-select li');
colors.forEach(function (color) {
  color.addEventListener('click', function (event) {
    // store col attribute of clicked item
    var col = event.target.dataset.col; // save color selection in localstorage

    localStorage.setItem('color-select', col);

    if (col === '#1AB6CF') {
      body.dataset.color = 'default';
    } else if (col === '#2980b9') {
      body.dataset.color = 'color1';
    } else if (col === '#27ae60') {
      body.dataset.color = 'color2';
    } // loop throgth all list items and remove active class


    listItems.forEach(function (item) {
      item.classList.remove('active');
    }); // add active class to clicked item

    event.target.classList.add('active');
  });
}); //  add click event to body to close color selector feature

body.addEventListener('click', function (event) {
  if (!event.target.classList.contains('color-select') && !event.target.classList.contains('color-item') && !event.target.classList.contains('fa-cog')) {
    aside.classList.add('hide');
  }
});