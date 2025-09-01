const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    applicant:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    job:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Job",
    },
},{
    timestamps:true
});

const Notification = mongoose.model("Notification",notificationSchema);

module.exports = Notification;