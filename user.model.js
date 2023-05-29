"use strict";
let dbConn = require("../../config/db.config");
let u_id,emailID;

let user_reg = function (ureg) {
  this.fullname = ureg.fullname;
  this.email = ureg.email;
  this.phone = ureg.phone;
  this.address = ureg.address;
  this.category = ureg.category;
  this.password = ureg.password;
};

// Create a new Member
user_reg.create = function (newUser, result) {
  console.log(newUser);
  console.log(
    "________________--------- starts ------------------__________________________"
  );
  // query to check if email exists in the database
  const email = newUser.email;
  const checkEmailExistenceQuery = `SELECT * FROM register  WHERE email='${email}'`;
  // execute the query
  dbConn.query(checkEmailExistenceQuery, function (error, results, fields) {
    console.log(results.length);
    // if the query returns a result, it means the email exists in the database
    if (results.length > 0) {
      result(null, "The email  " + email + " exists in the database.");
      console.log(`The email ${email} exists in the database.`);
    } else {
      //   console.log(The email ${email} does not exist in the database.);
      dbConn.query(
        "INSERT INTO `register`  SET ? ",
        newUser,
        function (err, res) {
          if (err) {
            console.log("Error: ", err);
            result(err, null);
          } else {
            u_id = res.insertId;
            dbConn.query(
              "INSERT INTO login (reg_id,email,password,type,status) VALUES('" +
                u_id +
                "','" +
                newUser.email +
                "','" +
                newUser.password +
                "','USER','1')",

              function (err, res) {
                if (err) {
                  console.log("Error: ", err);
                  result(err, null);
                } else {
                  console.log(" User Insert Data");
                  console.log(res);
                  u_id = res.insertId;
                  emailID= res.email;
                  result(null, {
                    Qstatus: "success",
                    u_id: u_id,
                    // email: emailID,
                  });
                }
              }
            );
          }
        }
      );
    }
  });
};

// Fetch all User Data from Database
user_reg.viewProfile = function (new_user, result) {
  console.log(
    "----------------------------  View Profile --------------------------------------"
  );
  console.log("SELECT * FROM  register WHERE email='" + new_user.email + "'");
  dbConn.query(
    "SELECT * FROM  register WHERE email='" + new_user.email + "'",
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

// update User Profile Details

user_reg.updateProfile = function (newUser, result) {
  console.log("userModel");
  console.log(
    `UPDATE  register SET fullname='${newUser.fullname}',phone='${newUser.phone}' , address='${newUser.address}' , category='${newUser.category}'  WHERE email='${newUser.email}'`
  );

  let qry = `UPDATE  register SET fullname='${newUser.fullname}',phone='${newUser.phone}' , address='${newUser.address}' , category='${newUser.category}'  WHERE email='${newUser.email}'`;
  dbConn.query(qry, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = user_reg;
