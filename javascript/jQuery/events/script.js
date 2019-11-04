console.log("Hi i'm here")

$("h1").click(function(){
  alert("h1 clicked");
});

// to be clear, this is looping through like a for loop and assigning an event listener to each button in the background, like vanilla js
$("button").click(function(){
  alert("Button clicked");
});


// in jQuery, we need () around the 'this' method, unlike vanilla js
$("button").click(function(){
  // this being the element "button"
  $(this).css("background", "pink")
  // create a var with the TEXT of the ELEMENT button ($(this))
  var text = $(this).text();
  // prints out which button was clicked
  console.log("You clicked " + text);
});

// this will print out the text of the ELEMENT that you've passed in
// in this case, "button", which is being referenced by $(this);
// so it will be the actual text of the button

// keypress - this just logs every time you hit a key in the input field
$("input").keypress(function(){
  console.log("YOU PRESSED A KEY");
});

// this is looking for the user hitting the enter key through keypress
// 'event' contains all the information about the keypress event
$("input").keypress(function(event){
  // which is the event 'type' and '13' is the code that reps the enter button, memorize!
  if(event.which === 13){
    alert("YOU HIT ENTER");
  };
});

// on method - similar to addEventListener.
// it lets you specify the type of event to listen for
// can take over the above methods too

// this turns the CURRENT (this) h1 element purple when clicked
$("h1").on("click", function(){
  $(this).css("color", "purple");
});

// this is the same as the keypress() method
$("input").on("keypress", function(){
  console.log("keypressed!");
});

// this bolds the current button element when the mouse enters the button area 
$("button").on("mouseenter", function(){
  $(this).css("font-weight", "bold");
});

//
