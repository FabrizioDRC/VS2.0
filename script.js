const nav = document.querySelector(".custom-nav");
const heroText = document.querySelector(".hero-content");
const animated = document.querySelectorAll(".animate-top");

let lastScroll = 0;

// Navbar + Hero
window.addEventListener("scroll",()=>{
  const scroll = window.scrollY;

  nav.style.background = scroll>80 ? "rgba(0,0,0,.9)" : "transparent";
  heroText.style.opacity = scroll>20 ? "0" : "1";

  lastScroll = scroll;
});

// Scroll animations
function animateScroll(){
  animated.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll",animateScroll);
animateScroll();
