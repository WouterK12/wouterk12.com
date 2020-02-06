$("#bg > img:gt(0)").hide();

setInterval(function() {
  $("#bg > img:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#bg");
}, 7000);

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
