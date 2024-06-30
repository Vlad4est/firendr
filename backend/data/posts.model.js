const mongoose = require("mongoose");
const UserModel = require("../data/users.model")

const PostModel = mongoose.model("Post",
    {
        id: {
            type: Number,
            required: true,
            unique: true,
            min: 1
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        user_id: {
            type: Number,
            required: true,
            validate: {
                validator: async function(value) {
                    const user = await UserModel.findOne({ id: value });
                    return user !== null;
                },
                message: "User with the given user_id does not exist."
            }
        }
    }
);

module.exports = PostModel;