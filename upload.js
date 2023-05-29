const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    console.log("file........")
    console.log(file)
    let ext = file.originalname;
    // let ext = path.extname(file.originalname);
    console.log("exact name :"+ext)
    // cb(null, Date.now() + ext);
    // cb(null, Date.now() + path.extname(file.originalname))
    cb(null, file.originalname)

  },
});

let upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    console.log(file.mimetype);
    if (file.mimetype == "application/pdf") {
      callback(null, true);
    } else {
      console.log("format error");
      callback(null, false);
    }
  },
});
module.exports = upload;
