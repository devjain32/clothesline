const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Plants collection and inserts the plants below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/theclothesline"
);

const clothesSeed = [
    {
        name: "Dev Jain",
        forPurchase: "Yes",
        description: "Real nice stuff man",
        brand: "Banana Republic",
        type: "Shirt",
        oneDay: 5,
        fourDay: 10,
        sevenDay: 15,
        price: 20,
        size: "M",
        gender: "Male",
        images: ["https://bananarepublic.gap.com/webcontent/0016/705/446/cn16705446.jpg", "https://bananarepublic.gap.com/webcontent/0016/740/525/cn16740525.jpg"],
        listed: false,
        tags: ["casual", "linen", "summer"]
    }
];

db.Clothes
    .remove({})
    .then(() => db.Clothes.collection.insertMany(clothesSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

req.body = {
    tags: ["black", "formal"]
}

db.Clothes.find({ tags: { $all: req.body.tags }})