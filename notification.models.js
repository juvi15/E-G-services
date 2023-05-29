"use strict";
let dbConn = require("../../config/db.config");
let u_id;

let notification_reg = function (nreg) {
  this.uid = nreg.uid;
  this.subject = nreg.subject;
  this.description = nreg.description;
  this.date = nreg.date;
};

// create a new Notification
notification_reg.create = function (newNotification, result) {
  console.log(newNotification);
  console.log(
    "________________--------- starts ------------------__________________________"
  );
  // query to check if name exists in the database
  const subject = newNotification.subject;
  const currentDate = newNotification.date;
  const checkNameExistenceQuery = `SELECT * FROM notifications WHERE subject='${subject}' AND date='${currentDate}'`;
  // execute the query
  dbConn.query(checkNameExistenceQuery, function (error, results, fields) {
    console.log(results.length);
    // if the query returns a result, it means the name exists in the database
    if (results.length > 0) {
      result(null, "The   " + subject + " exists in the database.");
      console.log(`The  ${subject} exists in the database.`);
    } else {
      //   console.log(`The  ${name} does not exist in the database.`);
      let qry = `INSERT INTO notifications SET uid='${newNotification.uid}',subject='${newNotification.subject}',description='${newNotification.description}',date='${newNotification.date}' `;
      dbConn.query(qry, function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log("Notification Insert Data");
          console.log(res);
          // b_id = res.insertId;
          result(null, "Notification Added");
        }
      });
    }
  });
};

// Fetch all Notification  from Database
notification_reg.findViewAllNotifications = function (result) {
  dbConn.query("SELECT * FROM Notifications", function (err, res) {
    if (err) {
      console.log("error :" + err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = notification_reg;
