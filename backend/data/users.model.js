const mongoose = require("mongoose");

const UserModel = mongoose.model("User",
    {
        id: Number,
        username: String,
        password: String,
        email: String
    }
);

module.exports = UserModel;