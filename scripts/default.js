ScrollReveal().reveal("section");

const logoNav = document.querySelector("nav .logo.nav");
const ham = document.querySelector(".hamburger");
const tabs = document.querySelector(".tabs");

const navHome = document.querySelector("nav.home");

// SHOW OR HIDE TABS ON @MEDIA CHANGE
var mediaQuery = window.matchMedia("(min-width: 900px)");
OnMediaChange(mediaQuery);
mediaQuery.addListener(OnMediaChange);

function OnMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    ShowTabs();
    if (!navHome) {
      ShowNavLogo();
    }
  } else {
    HideTabs();
    if (!navHome) {
      ShowNavLogo();
    }
  }
}

// HAMBURGER MENU
ham.addEventListener("click", () => {
  if (navHome) {
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
  } else {
    if (tabs.style.opacity != 0) {
      ShowNavLogo();
      HideTabs();
    } else {
      HideNavLogo();
      ShowTabs();
    }
  }
});

// LOGO NAV
logoNav.addEventListener("click", () => {
  if (!navHome) {
    document.location.href = "/";
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
