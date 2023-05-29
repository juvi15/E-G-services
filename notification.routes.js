const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notification.controller");

// Create  a new Notification
router.post("/", notificationController.create);

// View all Notifications
router.get( "/ViewAllNotification", notificationController.findViewAllNotifications);

module.exports = router;
