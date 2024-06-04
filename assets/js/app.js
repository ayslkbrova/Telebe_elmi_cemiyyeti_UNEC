window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0)
})
function myFunction(x) {
  x.classList.toggle("fa-moon");
};

let navBar = document.querySelector("nav");
let navMenu = document.querySelector(".nav-menu");
let closeMenu = document.querySelector(".nav-close");

if (navMenu) {
  navMenu.addEventListener("click", () => {
    navBar.classList.add("show-menu")
  })
}
if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    navBar.classList.remove("show-menu")
  })
}
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

$('.count').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');
  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },
    {
      duration: 6000,
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum + '+');
      }
    });
});





