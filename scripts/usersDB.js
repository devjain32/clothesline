const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Clothes collection and inserts the clothing below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/theclothesline"
);

const userSeed = [
  {
      name: "Dev Jain",
      email: "devrjain32200@gmail.com",
      phoneNumber: 8325231603,
      password: "testing",
      clothesPosted: []
  }
];



db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });