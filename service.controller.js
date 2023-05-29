"use strict";
const service_reg = require("../models/service.models");

// create a new Service
exports.create = function (req, res) {
  const new_stud = new service_reg(req.body);
  console.log("new_stud");
  console.log(new_stud);
  // handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    service_reg.create(new_stud, function (err, stud) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Service added successfully!",
        data: stud,
      });
    });
  }
};

// View All Services
exports.findViewAllService = function (req, res) {
    service_reg.findViewAllService(function (err, stud) {
      if (err) res.send(err);
      console.log("res", stud);
      res.json(stud);
    });
  };
  