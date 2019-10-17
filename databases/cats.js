var mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);
// connect to a DB
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

// define a schema / structure for your DB to force e.g. a user to use that type

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

// create a Cat variable that you can then use methods on.
// "Cat" is the singular version of the model, a collection will be created with the plural of that word

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB

// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "evil"
// });
//
// george.save(function(err, cat){
//   if(err){
//     console.log("SOMETHING WENT WRONG")
//   } else {
//     console.log("WE JUST SAVED A CAT TO THE DB:")
//     console.log(cat);
//   }
// })

// better way to do the above - create is like new + save in one go
Cat.create({
  name: "Snowball",
  age: 15,
  temperament: "nice"
}, function(err, cat){
  if(err){
    console.log(err);
  } else {
    console.log(cat);
  }
});

// retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
  if(err){
    console.log("OH NO, ERROR!");
    console.log(err);
  } else {
    console.log("ALL THE CATS");
    console.log(cats);
  }
})
