
window.addEventListener('scroll', function(){
    console.log(window.scrollY)
    const nav = document.querySelector('nav');
    nav.classList.toggle('stick', window.scrollY > 165);
    
    
})


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


