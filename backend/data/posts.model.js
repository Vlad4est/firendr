const mongoose = require("mongoose");

const PostModel = mongoose.model("Post",
    {
        id: {
            type: Number,
            required: true
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
            required: true
        }
    }
);

module.exports = PostModel;