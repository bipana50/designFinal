var navUl = document.querySelector('.nav ul') ;
var menu = document.querySelector('.nav .menu');
var style = window.getComputedStyle(navUl);
var displayValue = style.getPropertyValue('display');

    menu.addEventListener("click", function(e){
        var style = window.getComputedStyle(navUl);
        var displayValue = style.getPropertyValue('display');
        if (displayValue === 'block') {
            navUl.classList.remove('show');
            navUl.classList.add('hide');
          } else {
              navUl.classList.remove('hide');
            navUl.classList.add('show');
          }
        });
       
 navUl.classList.remove('hide');

