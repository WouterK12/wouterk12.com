ScrollReveal().reveal("section");

// const nav = document.querySelector("nav");
const drop = document.querySelector(".drop .icon");
const scrollTo = document.querySelector(".scroll");

const logo = document.querySelector(".start .logo");
const logoNav = document.querySelector("nav .logo.nav");

drop.addEventListener("click", () => {
  scrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
});

$(window).scroll(function() {
  scrollToPos = logo.getBoundingClientRect();
  if (scrollToPos.top <= 0) {
    logoNav.style.opacity = "1";
    logo.style.opacity = "0";

    drop.style.opacity = "0";
    drop.style.zIndex = "-1";
    drop.style.pointerEvents = "none";

    // nav.classList.add("dark");
  } else {
    logoNav.style.opacity = "0";
    logo.style.opacity = "1";

    drop.style.opacity = "1";
    drop.style.zIndex = "unset";
    drop.style.pointerEvents = "unset";

    // nav.classList.remove("dark");
  }
});
