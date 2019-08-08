const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clothesSchema = new Schema({
    // userId: { type: String, required: true },
    name: { type: String, required: true },
    forPurchase: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    type: { type: String, required: true },
    oneDay: { type: Number, required: true },
    fourDay: { type: Number, required: true },
    sevenDay: { type: Number, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    gender: { type: String, required: true },
    tags: { type: Array, required: false },
    images: { type: Array, required: true },
    listed: { type: Boolean, required: true }
})

const Clothes = mongoose.model("Clothes", clothesSchema);

// Clothes.aggregate([
//     {
//         $lookup:
//         {
//             from: "plants",
//             localField: "isSaved",
//             foreignField: "_id",
//             as: "plants"
//         }
//     }
// ]);

module.exports = Clothes;