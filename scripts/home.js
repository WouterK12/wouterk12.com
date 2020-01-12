ScrollReveal().reveal("section");

const drop = document.querySelector(".drop .icon");
const scrollTo = document.querySelector(".scroll");

const logo = document.querySelector(".start .logo");
const logoNav = document.querySelector("nav .logo.nav");

const nav = document.querySelector("nav.home");
const ham = document.querySelector(".hamburger");
const tabs = document.querySelector(".tabs");

// SHOW OR HIDE TABS ON @MEDIA CHANGE
var mediaQuery = window.matchMedia("(min-width: 900px)");
OnMediaChange(mediaQuery);
mediaQuery.addListener(OnMediaChange);

function OnMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    ShowTabs();
  } else {
    HideTabs();
  }
}

// DROP BUTTON
drop.addEventListener("click", () => {
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
});

// HAMBURGER MENU
ham.addEventListener("click", () => {
  GetLogoInfo();
  if (tabs.style.opacity != 0) {
    if (scrollToPos.top <= 0) {
      ShowNavLogo();
    }
    HideTabs();
  } else {
    HideNavLogo();
    ShowTabs();
  }
});

// HIDE OR SHOW TABS
function HideTabs() {
  tabs.style.opacity = 0;
  tabs.style.pointerEvents = "none";
  tabs.style.transform = "translateX(-100%)";
}
function ShowTabs() {
  tabs.style.opacity = 1;
  tabs.style.pointerEvents = "unset";
  tabs.style.transform = "unset";
}

// HIDE OR SHOW NAVLOGO
function HideNavLogo() {
  logoNav.style.opacity = 0;
  logoNav.style.zIndex = -1;
}
function ShowNavLogo() {
  logoNav.style.opacity = 1;
  logoNav.style.zIndex = "unset";
}

// GET (MAIN) LOGO INFO
function GetLogoInfo() {
  scrollToPos = logo.getBoundingClientRect();
}

// ON SCROLL
$(window).scroll(function() {
  GetLogoInfo();
  if (scrollToPos.top <= 0) {
    ShowNavLogo();
    logo.style.opacity = 0;

    nav.classList.add("purple");

    drop.style.opacity = 0;
    drop.style.zIndex = -1;
    drop.style.pointerEvents = "none";
  } else {
    HideNavLogo();
    logo.style.opacity = 1;

    nav.classList.remove("purple");

    drop.style.opacity = 1;
    drop.style.zIndex = "unset";
    drop.style.pointerEvents = "unset";
  }
});
