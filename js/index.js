// Your code goes here
let funBusHeader = document.querySelector('.logo-heading');
//1. mouseover on funBus header
funBusHeader.addEventListener('mouseover', (e) => {
    console.log('style', e.target.style);
    e.target.style.color = 'blue';
});
//2. 

let navItems = document.querySelectorAll('.nav-link');
console.log(navItems)
let homeNav = navItems[0];
let aboutUsNav = navItems[1];
let blogNav = navItems[2];
let contactNav = navItems[3];

let images = document.querySelectorAll('img')
console.log('images', images)
let busPic = images[0];
let maps = images[1];
let canal = images[2];
let boat = images[3];


//2. click on homenav
homeNav.addEventListener('click', (e) => {
    console.log(e.target.style, 'e.target')
    e.target.style.color = 'white';
    e.target.style.backgroundColor = 'red';
    e.target.style.fontSize = '200px';

});
//3. noContext menu on about us nav -- turns off context menu
aboutUsNav.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})
//4. mousewheel event on bus picture
let scale = 1;
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    // Apply scale transform
    busPic.style.transform = `scale(${scale})`;
  }

busPic.addEventListener('mousewheel', zoom)

//5. mousedown alert over blog in nav
blogNav.addEventListener('mousedown', (e) => {
    alert('you released your mouse over that!!!! hahah')
})
//6. Double click alert on contact in nav
contactNav.addEventListener('dblclick', (e) => {
    alert('Doubleclicker!!!!')
})
//7. mouseout over second image
maps.addEventListener('mouseout', (e) => {
    alert(`you moved your mouse off!`)
});
//8. added margin left mouseover for canal pic
canal.addEventListener('mouseover', (e) => {
    e.target.style.marginLeft = '75px'
});
//9. mouseenter for last photo
boat.addEventListener('mouseenter', (e) => {
    e.target.style.marginTop = '70px'
})
//10. 
let buttons = document.querySelectorAll('.btn')
let firstButton = buttons[0];

console.log(firstButton,'firstButton')
firstButton.addEventListener('mousemove', (e) => {
    console.log('you entered the button')
    alert(`youre moving the mouse`)
})

