const url = "https://api.mcsrvstat.us/2/play.wouterk12.com";

var nav;
var navLogo;

window.addEventListener("load", () => {
  const body = document.querySelector("body");

  nav = document.querySelector("nav");
  navLogo = document.querySelector("nav .logo");

  const hamburger = document.querySelector("nav .hamburger img");
  const closeHamburger = document.querySelector("nav .hamburger span");

  $.getJSON(url, function (data) {
    if (data.online) {
      $(".maptab").css("display", "flex");
    }
  });

  hamburger.addEventListener("click", OpenMenu);
  closeHamburger.addEventListener("click", CloseMenu);

  navLogo.addEventListener("click", function () {
    window.location.href = "/";
  });

  function OpenMenu() {
    nav.classList.add("max");
    body.style.overflow = "hidden";
  }

  function CloseMenu() {
    nav.classList.remove("max");
    body.style.overflow = "";
  }
});
