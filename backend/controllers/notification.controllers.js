const Notification = require("../models/notification.model");

const handelGetNotification = async(req,res)=>{
 try {
    const notifications = await Notification.find({job:req.user.id});
    res.status(200).json(notifications);
 } catch (error) {
    res.status(500).json({error:error.message});
 }
};

module.exports = {handelGetNotification};