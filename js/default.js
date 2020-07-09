const nav = document.querySelector("nav");
const navBackground = document.querySelector("nav .background");
const navLogo = document.querySelector("nav .logo");

const url = "https://api.mcsrvstat.us/2/play.wouterk12.com";
$.getJSON(url, function (data) {
  if (data.online) {
    $(".maptab").css("display", "flex");
  }
});
