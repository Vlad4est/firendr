const mongoose = require("mongoose");

const UserModel = mongoose.model("User",
    {
        id: String,
        name: String,
        password: String
    }
);

module.exports = UserModel;