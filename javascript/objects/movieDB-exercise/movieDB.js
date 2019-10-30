var movies = [{
    title: "In Bruges",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Frozen",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Mad Max",
    rating: 3,
    hasWatched: true
  }
]

// THIS ONE RETURNS UNEXPECTED ')'
// // iterate over the array of objects
// movies.forEach(function(entry) {
//       // condition: use hasWatched
//       if (entry.hasWatched) {
//         // print out STRING + TITLE + RATING
//         console.log("You have seen " + "\"" + entry.title + "\" - " +
//           entry.rating);
//       } else {
//         // else print out other STRING + TITLE + RATING
//         console.log("You have not seen " + "\"" + entry.title + "\" - " +
//           entry.rating);
//       }); // UNEXPECTED )

    movies.forEach(function(entry) {
      var result = "You have ";
      if (entry.hasWatched) {
        result += "watched ";
      } else {
        result += "not seen ";
      }
      result += "\"" + entry.title + "\" - " + entry.rating + " stars";
      console.log(result)
    })
