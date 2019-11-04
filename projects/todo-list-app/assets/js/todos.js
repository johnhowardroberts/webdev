// check off specific todos by clicking

// use on() method so that we are adding listeners for all future todos
$("ul").on("click", "li", function() { // this selects the parent ul, and applies a click listener. The second argument says "when an <li> is added, also add a listener to that as well"
  // // if li is gray
  // if ($(this).css("color") === "rgb(128, 128, 128)") { // .css("color") simply returns the current color. Also, must compare with rgb color
  //   // turn it black
  //   $(this).css({
  //     color: "black", // separated by commas
  //     // when defining an object in jQuery css, must use camelCase
  //     textDecoration: "none"
  //   });
  // } else { // else
  //   // turn it gray
  //   $(this).css({
  //     color: "gray", // separated by commas
  //     // when defining an object in jQuery css, must use camelCase
  //     textDecoration: "line-through"
  //   });
  // }

  // leaving the above in, but there is an easier way through css

  $(this).toggleClass("completed");
});

// Click on X to delete todo

$("ul").on("click", "span", function(e){ // add listener to parent ul, then to each span (2nd argument)
  $(this).parent().fadeOut(500, function() { // .parent() gives us the li it sits in, and  performs fadeOut() on that too. callback function allows for remove() to happen after the fadeOut()
    $(this).remove(); // here, $(this) refers to the li in the span, not the span.
  });
  e.stopPropagation(); // stops bubbling into parent elements
});

// add a listener to the input


$("input[type='text']").keypress(function(e){
  if(e.which === 13){ // checks for enter key
    // saves the input text value to a var
    var todoText = $(this).val();
    // clear the input field with a SETTER e.g. empty string
    $(this).val("");
    // SELECT the ul $("ul") and APPEND todoText to it
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"); // put the tags in "" as it is innerHTML
  }
});

// SELECT the fa-edit class, and perform fadeToggle on it to make it appear and disappear
$(".fa-edit").click(function(){
  $("input[type='text']").fadeToggle();
})
