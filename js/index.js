// Your code goes here
let funBusHeader = document.querySelector('.logo-heading');
//1. mouseover on funBus header
funBusHeader.addEventListener('mouseover', (e) => {
    console.log('style', e.target.style);
    e.target.style.color = 'blue';
});
//2. 

let navItems = document.querySelectorAll('nav-link');
let homeNav = navItems[0] 
homeNav.addEventListener('keydown', (e) => {
    console.log('working');
    e.target.style.backgroundColor = 'red';
})

