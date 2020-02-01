var url = "https://api.mcsrvstat.us/2/play.wouterk12.com";
$.getJSON(url, function(r) {
  if (!r.online) {
    $(".maptab").css("display", "none");
  } else {
    $(".maptab").css("display", "flex");
  }
});
