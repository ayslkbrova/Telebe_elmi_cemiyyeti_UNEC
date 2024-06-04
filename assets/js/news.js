let navBar=document.querySelector("nav");
let navMenu=document.querySelector(".nav-menu");
let closeMenu=document.querySelector(".nav-close");

if(navMenu){
  navMenu.addEventListener("click",()=>{
navBar.classList.add("show-menu")
  })
}
if(closeMenu){
  closeMenu.addEventListener("click",()=>{
    navBar.classList.remove("show-menu")
  })
}
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
