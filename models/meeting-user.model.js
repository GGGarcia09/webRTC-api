const mongoose = require("mongoose");
const { Schema } = mongoose;

const meetingUser =  mongoose.model(
    "MeetingUser",
    mongoose.Schema({
        socketId: {
            type: String,
            required: true
        },
        meetingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meeting"
        },
        userId: {
            type: String,
            required: true
        },
        joined: {
            type: Boolean,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        isAlive: {
            type: String,
            required: true
        }
        
    }, {timestaps: true})
);

module.exports ={
    meetingUser
}

