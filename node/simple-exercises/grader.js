var scores = [90, 98, 89, 100, 100, 86, 94];

function average(scores) {
  var sum = 0;
  scores.forEach(function(i) {
    sum += i;
  });
  var average = sum / scores.length;
  return Math.round(average);
}

console.log(average(scores));
