const mongoose = require("mongoose");
const UserModel = require("./users.model")

const EventSchema = new mongoose.Schema(
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
        location: {
            type: String,
            required: true
        },
        time: {
            type: Date,
            required: true
        },
        organizer: {
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
        participants: []
    },
    {
        timestamps: true
    }
);

const EventModel = mongoose.model("Event", EventSchema);

module.exports = EventModel;