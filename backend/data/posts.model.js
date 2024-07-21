const mongoose = require("mongoose");
const UserModel = require("../data/users.model")

const PostSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        author: {
            type: String,
            required: true,
            validate: {
                validator: async function(value) {
                    const user = await UserModel.findOne({ username: value });
                    return user !== null;
                },
                message: "User with the given username does not exist."
            }
        },
        imageURL: String,
        likes: []
    },
    {
        timestamps: true
    }
);

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;