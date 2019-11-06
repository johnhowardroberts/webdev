var faker = require("faker");

// print out 10 random products and prices using the faker api

for (var i = 0; i < 10; i++) {
  console.log(faker.fake("{{commerce.product}}") + " - $" + faker.fake("{{commerce.price}}"));
};

// or

for (var i = 0; i < 10; i++) {
  console.log(faker.commerce.product() + " - $" + faker.commerce.price());
};

// better way to do it, save everything to variables

var randomProduct = faker.commerce.product(); // Rowan Nikolaus
var randomPrice = faker.commerce.price(); // Kassandra.Haley@erich.biz

for (var i = 0; i < 10; i++) {
  console.log(randomProduct + " - $" + randomPrice);
};
