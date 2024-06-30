const mongoose = require("mongoose");
const UserModel = require("../data/users.model")

const PostSchema = new mongoose.Schema(
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
    },
    {
        timestamps: true
    }
);

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;