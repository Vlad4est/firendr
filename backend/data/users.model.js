const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            
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

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;