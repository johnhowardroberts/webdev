function sing() {
  console.log("SING SING SING");
}

// SET INTERVAL

// pass another function in as first argument, second argument is interval in milliseconds
setInterval(sing, 1000);
// use the return value of the above method (find in browser console) and pass it in as argument to clear setInterval method
clearInterval(69);

// if you don't have a function yet, you can write one within the setInterval function itself as an argument
// remember to still pass in the interval as the second argument
setInterval(function() {
  console.log("WHATEVER");
}, 1000);
