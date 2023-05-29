const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//create a new express instance
const cors = require("cors");
app.use(cors());

// Setup the Server port
const port = process.env.PORT || 5000;

// Parse the request content-type-application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse the request content-typeapplication/json
app.use(bodyParser.json());

//define the root route
app.get("/", (req, res) => {
  console.log("Server is Running ");
  res.send("Server is Running !!");
});

// make this  folder as Public
app.use('/uploads', express.static('uploads'));

const loginRoutes = require("./src/routes/login.routes");
const userRoutes = require("./src/routes/user.routes");
const notificationRoutes = require("./src/routes/notification.routes");
const ServiceRoutes = require("./src/routes/service.routes");
const ApplyRoutes = require("./src/routes/apply.routes");

//using as  middleware

app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/notification", notificationRoutes);
app.use("/api/v1/service", ServiceRoutes);
app.use("/api/v1/apply", ApplyRoutes);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
