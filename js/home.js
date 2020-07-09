const homeSection = document.querySelector("section.home");
const homeLogo = document.querySelector("section.home .logo");

const correction = 50;
const negativeWindowHeight = window.innerHeight * -1 + correction;

window.addEventListener("scroll", CheckHeight);

function CheckHeight() {
  var homeSectionRect = homeSection.getBoundingClientRect();
  if (homeSectionRect.top <= negativeWindowHeight) {
    navBackground.style.opacity = 1;
  } else {
    navBackground.style.opacity = "";
  }
  var homeLogoRect = homeLogo.getBoundingClientRect();
  if (homeLogoRect.top <= 0) {
    homeLogo.style.opacity = 0;
    navLogo.classList.remove("hidden");
  } else {
    homeLogo.style.opacity = 1;
    navLogo.classList.add("hidden");
  }
}

// const drop = document.querySelector(".drop .icon");
// const scrollTo = document.querySelector(".scroll");

// const logo = document.querySelector(".start .logo");

// const nav = document.querySelector("nav.home");

// // DROP BUTTON
// drop.addEventListener("click", () => {
//   scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
// });

// // GET (MAIN) LOGO INFO
// function GetLogoInfo() {
//   scrollToPos = logo.getBoundingClientRect();
// }

// // ON SCROLL
// $(window).scroll(function() {
//   GetLogoInfo();
//   if (scrollToPos.top <= 0) {
//     // IF MOBILE, HIDE TABS (BEFORE SHOWING NAVLOGO)
//     if (!mediaQuery.matches) {
//       HideTabs();
//     }
//     ShowNavLogo();
//     logo.style.opacity = 0;

//     nav.classList.add("purple");

//     drop.style.opacity = 0;
//     drop.style.zIndex = -1;
//     drop.style.pointerEvents = "none";
//   } else {
//     HideNavLogo();
//     logo.style.opacity = 1;

//     nav.classList.remove("purple");

//     drop.style.opacity = 1;
//     drop.style.zIndex = "unset";
//     drop.style.pointerEvents = "unset";
//   }
// });
