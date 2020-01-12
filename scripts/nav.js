ScrollReveal().reveal("section");

const logoNav = document.querySelector("nav .logo.nav");
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
