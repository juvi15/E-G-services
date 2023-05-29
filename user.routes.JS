const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Create  a new user
router.post("/", userController.create);

// view Profile Details
router.put("/viewProfile",userController.viewProfile)

//update Profile Details
router.put("/updateProfile",userController.updateProfile)



module.exports = router;
