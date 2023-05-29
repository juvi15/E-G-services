const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service.controller");
const upload=require('../../middileware/upload')

// Create  a new Notification
router.post("/", upload.single('filesrc'),serviceController.create);

// View all Notifications
router.get( "/viewAllService", serviceController.findViewAllService);

module.exports = router;
