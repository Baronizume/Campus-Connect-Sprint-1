require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// Home route
app.get("/", (req, res) => {
  res.send("Campus Connect backend is running");
});

// Test Student model
app.get("/api/students/test", async (req, res) => {
  try {
    const students = await Student.find();

    res.json({
      success: true,
      count: students.length,
      students: students
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Test Student validation
app.post("/api/students/test-validation", async (req, res) => {
  try {
    const student = new Student(req.body);

    await student.validate();

    res.json({
      success: true,
      message: "Student data is valid"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.errors
    });
  }
});

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(
        `Campus Connect server running on http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });