
// Header locker
const headerInfo = document.querySelector('.header-info');
const navBar = document.querySelector('.nav-bar');
const nav = document.querySelector('nav');
navBar.style.height = nav.offsetHeight + "px";

window.addEventListener('scroll', function(){
    // Fixa o menu quando o scroll for maior que o header
    nav.classList.toggle('stick', window.scrollY > headerInfo.offsetHeight);
});


// Banner

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


