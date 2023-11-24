window.addEventListener('scroll' , function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);});


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
    
function onClick() {
    const menuLinks = document.querySelectorAll('.menu a');
    const menu = document.querySelector('.menu');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
             menu.classList.remove('active');
        });
    });
}
    
const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', toggleMenu);
    
onClick();