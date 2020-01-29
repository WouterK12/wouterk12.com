// HOVER
$(".social > div").hover(function() {
  $(this)
    .find(".more")
    .toggleClass("hover");
});

// CLICK
$(".more").click(function() {
  // If the clicked button doesn't have "close"-class,
  if (!$(this).hasClass("close")) {
    // Toggle classes of other "close"-button.
    $(".more.show").toggleClass("show");
    $(".more.close").toggleClass("close");

    // If there is no extra content being displayed,
    if (!$(".more-content .show").length) {
      // Show content that belongs to the clicked button.
      ShowContent(this);
    } else {
      // Hide already displayed content and show content that belongs to the clicked button.
      $(".more-content .show").toggleClass("show");
      ShowContent(this);
    }
  } else {
    // Hide already displayed content.
    $(".more-content .show").toggleClass("show");
  }

  // If the mediaQuery matches,
  if (mediaQuery.matches) {
    // Hold visibility on the clicked button.
    $(this).toggleClass("show");
  } else {
    // Find other buttons, and hide them.
    $(this)
      .parents(".social")
      .find(".more")
      .toggleClass("hide");
    $(this).toggleClass("hide");
  }
  // Rotate button (add "close"-class).
  $(this).toggleClass("close");
});

// SHOW MORE-CONTENT
function ShowContent(more) {
  // var c equals the className of the previous sibling.
  var c = $(more)
    .prev()
    .prop("className");
  // Find more-content which belongs to the clicked button using c and show that content.
  $(more)
    .parents("section")
    .find(".more-content ." + c)
    .toggleClass("show");
}
