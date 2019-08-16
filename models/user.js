const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    clothes: [{ type: Schema.Types.ObjectId, ref: "Clothes"}],
    clothesReserved: [{  }]
});

userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

userSchema.methods.validPassword = function (plaintext) {
    return bcrypt.compareSync(plaintext, this.password);
};

const User = mongoose.model("User", userSchema);

User.aggregate([
    {
        $lookup:
        {
            from: "clothes",
            localField: "userId",
            foreignField: "_id",
            as: "clothes"
        }
    }
]);

module.exports = User;