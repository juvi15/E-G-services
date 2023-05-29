"use strict";
const notification_reg = require("../models/notification.models");

// create a new Notification
exports.create = function (req, res) {
  const new_stud = new notification_reg(req.body);
  console.log("new_stud");
  console.log(new_stud);
  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    notification_reg.create(new_stud, function (err, stud) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Notification added successfully!",
        data: stud,
      });
    });
  }
};
// View All Notification
exports.findViewAllNotifications = function (req, res) {
  notification_reg.findViewAllNotifications(function (err, stud) {
    if (err) res.send(err);
    console.log("res", stud);
    res.json(stud);
  });
};




