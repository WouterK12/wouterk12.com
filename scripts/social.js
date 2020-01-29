$(".social > div").hover(function() {
  $(this)
    .find(".more")
    .toggleClass("hover");
});

$(".more").click(function() {
  if (!$(this).hasClass("close")) {
    $(".more.show").toggleClass("show");
    $(".more.close").toggleClass("close");
    if (!$(".more-content .show").length) {
      ShowContent(this);
    } else {
      $(".more-content .show").toggleClass("show");
      ShowContent(this);
    }
  } else {
    $(".more-content .show").toggleClass("show");
  }

  if (mediaQuery.matches) {
    $(this).toggleClass("show");
  } else {
    $(this)
      .parents(".social")
      .find(".more")
      .toggleClass("hide");
    $(this).toggleClass("hide");
  }
  $(this).toggleClass("close");
});

function ShowContent(more) {
  var c = $(more)
    .prev()
    .prop("className");
  $(more)
    .parents("section")
    .find(".more-content ." + c)
    .toggleClass("show");
}
