"use strict";
let dbConn = require("../../config/db.config");
let u_id;

let apply_reg = function (areg) {
  this.applyid = areg.applyid;
  this.uid = areg.uid;
  this.sid = areg.serviceid;
  this.applydate = areg.applydate;
  this.status = areg.status;
  this.filesrc = areg.tempname;
};

// create a new Notification
apply_reg.create = function (newApply, result) {
  console.log(newApply);
  console.log(
    "________________--------- starts ------------------__________________________"
  );
  // query to check if name exists in the database
  const uid = newApply.uid;
  const sid = newApply.sid;
  const checkNameExistenceQuery = `SELECT * FROM apply WHERE uid='${newApply.uid}' AND sid='${newApply.sid}'`;
  // execute the query
  dbConn.query(checkNameExistenceQuery, function (error, results, fields) {
    console.log(results.length);
    // if the query returns a result, it means the name exists in the database
    if (results.length > 0) {
      result(null, "You are Already Applied for the scheme  ");
      console.log(`The  ${uid} exists in the database.`);
    } else {
      //   console.log(`The  ${name} does not exist in the database.`);
      let qry = `INSERT INTO apply SET uid='${newApply.uid}',sid='${newApply.sid}',applydate='${newApply.applydate}',status='${newApply.status}',filesrc='${newApply.filesrc}'`;
      dbConn.query(qry, function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          console.log("apply Insert Data");
          console.log(res);
          // b_id = res.insertId;
          result(null, "apply Added");
        }
      });
    }
  });
};

// Fetch all Notification  from Database
apply_reg.findViewAllApply = function (result) {
  dbConn.query(
    "SELECT apply.*,service.*,register.* FROM apply,register,service WHERE apply.uid=register.`email`AND apply.`sid`=service.`sid` AND apply.`status`='Not verified'",
    function (err, res) {
      if (err) {
        console.log("error :" + err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// Update a Apply  with Id

apply_reg.update = function (newApply, result) {
  console.log("applymodel");
  console.log(`UPDATE apply SET status='${newApply.status}' WHERE applyid='${newApply.applyid}'`)

  let qry = `UPDATE apply SET status='${newApply.status}' WHERE applyid='${newApply.applyid}'`;

  console.log(qry);
  dbConn.query(qry, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
// User ViewStatus

apply_reg.viewStatus = function (newApply, result) {
  console.log(
    "viewStatus"
  );
  console.log(
    "SELECT apply.*,service.*,register.* FROM apply,register,service WHERE apply.uid=register.`email`AND apply.`sid`=service.`sid` AND apply.`uid`='" +
      newApply.uid +
      "' "
  );
  dbConn.query(
    "SELECT apply.*,service.*,register.* FROM apply,register,service WHERE apply.uid=register.`email`AND apply.`sid`=service.`sid` AND apply.`uid`='" +
      newApply.uid +
      "' ",
    function (err, res) {
      if (err) {
        console.log("error :" + err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};



module.exports = apply_reg;
