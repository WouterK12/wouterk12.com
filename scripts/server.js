var bg;
var imgs;
var slideDelay = 5000;
var c = 0;
var l;

window.onload = init;

function init() {
  bg = document.querySelector(".start.server .bg");
  imgs = bg.children;
  l = imgs.length - 1;

  for (i = 0; i <= l; i++) {
    imgs[i].style.opacity = 0;
  }

  imgs[0].style.opacity = 1;

  bg.style.opacity = 1;

  setTimeout(function() {
    AutoSlide();
  }, slideDelay);
}

function AutoSlide() {
  imgs[c].style.opacity = 0;

  if (c < l) {
    c++;
  } else {
    c = 0;
  }

  imgs[c].style.opacity = 1;

  setTimeout(function() {
    AutoSlide();
  }, slideDelay);
}

var url = "https://api.mcsrvstat.us/2/play.wouterk12.com";
$.getJSON(url, function(r) {
  if (!r.online) {
    $(".maptab").css("display", "none");
    $("#status").html(
      "<span class='offline'>Server Offline</span><span class='faq'>Why? <a href='/faq'>FAQ</a>"
    );
    return false;
  }
  $(".maptab").css("display", "flex");
  var pl = "";
  var motd = r.motd.html.toString().replace(/,/g, "-");
  $("#status").html(
    "<div class='software'><b>" +
      r.version +
      "</b>(" +
      r.software +
      ")</div>" +
      "<div class='motd'>" +
      motd +
      "</div>" +
      "<span><b>Players Online:</b> " +
      r.players.online
  );
  $("#icon").attr("src", r.icon);
});
