"use strict";
const apply_reg = require("../models/apply.model");

// create a new Notification
exports.create = function (req, res) {
  const new_stud = new apply_reg(req.body);
  console.log("new_stud");
  console.log(new_stud);
  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    apply_reg.create(new_stud, function (err, stud) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Notification added successfully!",
        data: stud,
      });
    });
  }
};

// View All Application
exports.findViewAllApply = function (req, res) {
  apply_reg.findViewAllApply(function (err, stud) {
    if (err) res.send(err);
    console.log("res", stud);
    res.json(stud);
  });
};

// update a Books
exports.update = function (req, res) {
  const new_stud = new apply_reg(req.body);

  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    apply_reg.update(new_stud, function (err, stud) {
      console.log(new_stud);
      if (err) res.send(err);
      res.json({
        error: false,
        message: " Updated successfully!",
        data: stud,
      });
    });
  }
};


// ViewStatus
exports.viewStatus = function (req, res) {
  const new_stud = new apply_reg(req.body);

  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    apply_reg.viewStatus(new_stud, function (err, stud) {
      if (err) res.send(err);
      res.json(stud);
    });
  }
};