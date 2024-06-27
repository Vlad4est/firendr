const mongoose = require("mongoose");

const UserModel = mongoose.model("User",
    {
        id: Number,
        name: String,
        password: String
    }
);

module.exports = UserModel;