window.addEventListener("load", () => {
  const homeSection = document.querySelector("section.home");
  const homeLogo = document.querySelector("section.home .logo");
  const navBackground = document.querySelector("nav .background");

  const windowHeightCorrection = 50;
  const negativeWindowHeight = window.innerHeight * -1 + windowHeightCorrection;

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

  anime({
    targets: ".mask img",
    translateX: -180,

    easing: "easeInOutSine",
    direction: "alternate",
    loop: true,
    duration: 20000,
  });
});
