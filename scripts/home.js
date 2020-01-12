const drop = document.querySelector(".drop .icon");
const scrollTo = document.querySelector(".scroll");

const logo = document.querySelector(".start .logo");

const nav = document.querySelector("nav.home");

// DROP BUTTON
drop.addEventListener("click", () => {
  scrollTo.scrollIntoView({ behavior: "smooth", block: "center" });
});

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
    // IF MOBILE, HIDE TABS (BEFORE SHOWING NAVLOGO)
    if (!mediaQuery.matches) {
      HideTabs();
    }
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
