// ********** printReverse([1,2,3,4]);

function printReverse(arr) {
  // for loop, start at array.size, i >= 0, i--
  for (var i = arr.length - 1; i >= 0; i--) {
    // print i
    console.log(arr[i]);
  }
}

printReverse([1, 2, 3, 4]);
printReverse([3, 6, 9, 23]);

// *********** isUniform()

function isUniform(arr) {
  var indexZero = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== indexZero) {
      return false;
    }
  }
  return true;
}

isUniform([1, 2, 3, 4]);
isUniform([1, 1, 1, 1, 1, 1, 1]);

// ******** sumArray()

function sumArray(arr) {
  var result = 0;
  arr.forEach(function(num) {
    result += num;
  });
  return result;
}

sumArray([1,25,6]);

// ******** max() - return the max number in a given array

function max(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

max([1,3,62,4,55]);


// var array = [1, 23, 78];
//
// console.log(Math.max(...array));
