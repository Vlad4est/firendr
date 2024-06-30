const mongoose = require("mongoose");

const UserModel = mongoose.model("User",
    {
        id: {
            type: Number,
            required: true,
            unique: true,
            min: 1
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false,
            match: [/\S+@\S+\.\S+/, 'Email is invalid']
        }
    },
    {
        timestamps: true
    }
);



module.exports = UserModel;