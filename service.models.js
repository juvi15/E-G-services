"use strict";
let dbConn = require("../../config/db.config");

let u_id;

let service_reg = function (sreg) {
  this.uid = sreg.uid;
  this.subject = sreg.subject;
  this.description = sreg.description;
  this.src = sreg.tempname;
  this.cdate = sreg.currentDate;
  this.lastdate = sreg.lastDate;
  this.category = sreg.category;
};

// create a new Service
service_reg.create = function (newService, result) {
  console.log(newService);
  console.log(
    "________________--------- starts ------------------__________________________"
  );
  // query to check if name exists in the database
  const subject = newService.subject;
  const currentDate = newService.date;
  console.log("newService +++++++++++");
  console.log(newService);
  const checkNameExistenceQuery = `SELECT * FROM service  WHERE subject='${subject}' AND cdate='${currentDate}'`;
  // execute the query
  dbConn.query(checkNameExistenceQuery, function (error, results, fields) {
    console.log(results.length);
    // if the query returns a result, it means the name exists in the database
    if (results.length > 0) {
      result(null, "The   " + subject + " exists in the database.");
      console.log(`The  ${subject} exists in the database.`);
    } else {
      //   console.log(`The  ${name} does not exist in the database.`);
      let qry = `INSERT INTO service SET uid='${newService.uid}',subject='${newService.subject}',description='${newService.description}',cdate='${newService.cdate}',lastdate='${newService.lastdate}',src='${newService.src}',category='${newService.category}' `;
      dbConn.query(qry, function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log("Service Insert Data");
          console.log(res);
          // b_id = res.insertId;
          result(null, "Service Added");
        }
      });
    }
  });
};

// Fetch all Service  from Database
service_reg.findViewAllService = function (result) {
  dbConn.query("SELECT * FROM service", function (err, res) {
    if (err) {
      console.log("error :" + err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = service_reg;
