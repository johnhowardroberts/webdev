var posts = [
  // Object 0
  {
    title: "Cats are mediocre",
    author: "Colt:",
    comments: ["Awesome post", "terrible post"]
  },
  // Object 1
  {
    title: "Cats are awesome",
    author: "Cat Louver",
    comments: ["<3>", "I hate you"]
  }
]

posts.length
// 2
posts[0].title;
// "Cats are medicore"
posts[1].comments[1]
// "I hate you"

var someObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
};

// retrieve "Malfoy"

someObject.friends[0].name
