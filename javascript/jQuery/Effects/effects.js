
// this fades the divs out over a full second
$("button").on("click", function() {
  $('div').fadeOut(1000);
  // note, the divs still exist. The above just adds
  // a css class of display= none; to it to make it disappear
  console.log("fade out complete")
});

// but the above runs the console.log before the fadeout completes
// if we want to wait before running the next line of code, must
// be in a callback function

$("button").on("click", function() {
  $('div').fadeOut(1000, function() {
    //let's actually remove the div elements rather than print the log
    // this ALSO allows the fade to actually happen before the div is removed
    $(this).remove();
  });
});

// fadeToggle fades in or out depending on current css display: status

// there are lots of other methods like slideUp() and slideDown() and slideToggle()

$("button").on("click", function() {
  $('div').slideToggle(1000, function() {
    $(this).remove();
  });
});
