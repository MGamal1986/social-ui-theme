// select color button event
let sel = document.querySelector('.color-select i');
let aside = document.querySelector('.color-select');
let homePage = document.querySelector('#home');
let body = document.body;
sel.addEventListener('click', function (e) {
  aside.classList.toggle('hide');
}); // add color change event

let colors = document.querySelectorAll('.color-select li');
colors.forEach(color => {
  color.addEventListener('click', event => {
    body.dataset.color = event.target.dataset.color;
    console.log(body);
  });
});