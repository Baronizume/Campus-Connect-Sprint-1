const express = require("express");
const cors = require("cors");
require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");
const requestLogger = require("./middleware/requestLogger");

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.get("/", (req, res) => {
  res.json({
    message: "Campus Connect API is running",
  });
});

app.use("/api/students", studentRoutes);

module.exports = app;
