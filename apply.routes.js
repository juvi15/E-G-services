const express = require("express");
const router = express.Router();
const applyController = require("../controllers/apply.controller");
const upload = require("../../middileware/upload");

// Create  a new Applly
router.post("/", upload.single("filesrc"), applyController.create);

// View all Applly
router.get( "/ViewAllApply", applyController.findViewAllApply);

// Update Applly Details
router.put("/update", applyController.update);


// Member view all book History
router.put("/viewStatus", applyController.viewStatus);

module.exports = router;
