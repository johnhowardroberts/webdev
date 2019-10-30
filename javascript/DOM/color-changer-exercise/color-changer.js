// // select the attribute - in this case, btn
// var button = document.getElementById('btn');
// // add addEventListener to it with a callback function to turn it purple
// button.addEventListener("click", function() {
//   // if background is purple, then function should = "white",
//   if (document.body.style.background === "purple") {
//     document.body.style.background = "white"
//   } else {
//     // otherwise function should = "purple"
//     document.body.style.background = "purple";
//   }
// });

// refactored, make a variable isPurple

// // select the attribute - in this case, btn
// var button = document.getElementById('btn');
// var isPurple = false;
// // add addEventListener to it with a callback function to turn it purple
// button.addEventListener("click", function() {
//   // if background is purple, then function should = "white",
//   if (isPurple) {
//     document.body.style.background = "white"
//   } else {
//     // otherwise function should = "purple"
//     document.body.style.background = "purple";
//   }
//   isPurple = !isPurple
// });

// refactored again with classList


var button = document.getElementById('btn');
// in this case we've added a CSS class to the HTML file
button.addEventListener("click", function() {
    document.body.classList.toggle("purple");
});
