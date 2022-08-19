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

// Fruit.deleteOne({_id: "62fdf5d5ea2f42b1ef6dbb43"}, (err) => {});
// Fruit.updateOne({name: "peach"},{rating: 10}, (err) => {});




//challenge create a new collection called people and add data

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const pinaple = new Fruit({
  name: "pinaple",
  rating: 9,
  review: "nice..."
});

// pinaple.save();

const people = new People({
  name: "jhon",
  age: 37

})
// people.save();
const avocado = new Fruit({
  name: "avocado",
  rating: 8,
  review: "it's so good"
});

// avocado.save(); // this is to save inside our fruit list


People.updateOne({name: "jhon"}, {favoriteFruit: avocado}, (err) => {});

const ami = new People({
  name: "ami",
  age: 25,
  favoriteFruit: pinaple
})
//
// ami.save();

// People.deleteMany({name: "jhon"}, (err) => {});
