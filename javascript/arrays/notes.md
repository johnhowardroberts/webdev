array.push("mkleqw")

<!-- .push returns the length of an array -->

array.pop()

<!-- returns the popped element -->

array.unshift("RWEerwe")

<!-- unshift adds to the FRONT of an array -->

array.shift()

<!-- removes element from the front of an array -->

array.indexOf("yellow")

<!-- tells you index position of the argument -->

var fruits = ['banana','orange','apple','pear','whatever']
var citrus = fruits.slice(1,3);

<!-- slice indicates where the cut begins and ends,
so citrus = ['ornage', 'apple',] -->
<!-- does not alter the original array -->
<!-- if no argument given, copies entire array to new variable -->

arr.forEach(some function(arg)) { }

<!-- loops through the function passing in the array element through the argument -->
<!-- can use instead of a for loop -->

var colors = ['red','blue','green','orange']

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

<!-- is the same as -->

colors.forEach(function(color)) {
  console.log(color);
});


<!-- .forEach takes a callback function, that callback function is expected to have at least 1, but up to 3, arguments. This is how .forEach was designed.

The arguments are in a specific order:
- The first one represents each element in the array (per loop iteration) that .forEach was called on.
- The second represents the index of said element.
- The third represents the array that .forEach was called on (it will be the same for every iteration of the loop). -->

<!-- You have a couple options when calling .forEach on an array:

You can pass in an anonymous function: -->

[1,2,3].forEach(function(el, i, arr) {
  console.log(el, i, arr);
});

<!-- Or you can pass in a pre-written, named function. -->

function logNums(el, i, arr) {
  console.log(el, i, arr);
}

[1,2,3].forEach(logNums);

<!-- Notice how in the second example we don't invoke logNums when passing it into .forEach? We simply pass in the function name. We don't need to invoke the logNums function, .forEach does that for us. In fact, it invokes the function multiple times, once for every element inside of the array. -->
