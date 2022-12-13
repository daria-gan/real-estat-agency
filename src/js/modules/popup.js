const openSale = document.getElementById('open-sale');
const subMenu = document.getElementById('sub-menu');
const openRent = document.getElementById('open-rent');


    openSale.addEventListener('mouseover', () => {
        subMenu.classList.add('active');       

    });

     openRent.addEventListener('mouseover', () => {
        subMenu.classList.add('active');      

    });

    subMenu.addEventListener('mouseover', () => {
        subMenu.classList.add('active');
    });
     
    subMenu.addEventListener('mouseout', () => {
        subMenu.classList.remove('active');
    });

let menuBtn = document.querySelector('.menu__btn');
let menuBurger = document.querySelector('.menu__burger');
let bodyHeader = document.querySelector('.body-header');
console.log(bodyHeader);
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
    menuBurger.classList.toggle('active');
    bodyHeader.classList.toggle('hidden');
})
        
    
    