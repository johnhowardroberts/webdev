// //  isEven()
//
// function isEven(num) {
//   // return true if even
//   if(num % 2 === 0) {
//     return true;
//   }
//   // return false otherwise
//   else {
//     return false;
//   }
// }

// refactor the above

function isEven(num) {
  return num % 2 === 0;
}



// factorial()

function factorial(num) {
  // define a result variable
  var result = 1;
  // calculate factorial and store value in result
  for (var i = 2; i <= num; i++) {
    result *= i;
  }
  // return the result variable
  return result;
}

// kebabToSnake()

function kebabToSnake(str) {
  // replace all '-' with '_'
  var newStr = str.replace(/-/g , "_"); // use regex in replace method, and save to a new variable as you need to save the copy of the data returned by the replace method
  // return str
  return newStr;
}
