const mongoose = require("mongoose");
//this fruitsDB is the database name that we want create
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true
});


// this is the foundation of every document in our database
// ex: every fruit data will store in this format

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please your name it can't be null!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: {
    type: String,
    required: true
  }
});

// in this frist parameter we have to give a singular string that mongoose will convert
// in plural so here its Fruit it will be fruits in our fruitsDB database,  then fruitSchema
// parameter will  define the structure of our collection called fruits

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "peach",
  rating: 6,
  review: "it's teast so good"
});

// fruit.save();

const kiwi = new Fruit({
  name: "kiwi",
  rating: 5,
  review: "nice"
});

const banana = new Fruit({
  name: "banana",
  rating: 4,
  review: "good"
});

const mango = new Fruit({
  name: "mango",
  rating: 4,
  review: "bad"
});

// Fruit.insertMany([kiwi, banana, mango], (err) => {
//   console.log(err)
// });




Fruit.find((err, fruits) => {
  if (err) {
  console.log(err);
} else {
  //to auto close our mongoose connect
  mongoose.connection.close();

  fruits.forEach((fruit) => {
    console.log(fruit.name);
  });
 }

});






//challenge create a new collection called people and add data

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const People = mongoose.model("People", peopleSchema);

const people = new People({
  name: "jhon",
  age: 37
})

// people.save();
