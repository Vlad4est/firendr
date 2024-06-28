const mongoose = require("mongoose");

const UserModel = mongoose.model("User",
    {
        id: Number,
        username: {
            type: String,
            required: true
        },
        password: String,
        email: Number
    }
);

module.exports = UserModel;