// Process
//
// Select an event, then add an event listener
//
// "Listen for a click on this <button>"
//
// "Listen for a keypress event on text input"

element.addEventListener(type, functionToCall);

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", function(){
  paragraph = "SOMEONE CLICKED THE BUTTON";
});

// "click" is the type of event we're listening for, and function() is
// the callback function, which isn't being called right away, only when
// the event fires
