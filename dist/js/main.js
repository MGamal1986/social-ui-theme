// select color button event
let sel = document.querySelector('.color-select i');
let aside = document.querySelector('.color-select');
let homePage = document.querySelector('#home');
let body = document.body;
sel.addEventListener('click', function (e) {
  aside.classList.toggle('hide');
});

// add color change event
 let colors = document.querySelectorAll('.color-select li');
 colors.forEach((color)=>{
    color.addEventListener('click',(event)=>{
        body.dataset.color = event.target.dataset.color;
        let listItems = event.target.parentElement.children;
        // loop throgth all list items and remove active class
        for(item of listItems){
          item.classList.remove('active');
        }
        // add active class to clicked item
        event.target.classList.add('active');
    })
 })