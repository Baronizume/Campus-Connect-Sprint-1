const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// GET ALL STUDENTS
router.get("/", async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            message: "Students retrieved successfully",
            data: students
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to retrieve students",
            error: error.message
        });
    }
});

// CREATE STUDENT
router.post("/", async (req, res) => {
    try {
        console.log("Student request:", req.body);

        const {
            studentId,
            name,
            email,
            phone,
            course,
            semester,
            section
        } = req.body;

        if (!studentId || !name || !email || !course) {
            return res.status(400).json({
                success: false,
                message: "Student ID, name, email and course are required"
            });
        }

        const existingStudent = await Student.findOne({
            studentId
        });

        if (existingStudent) {
            return res.status(409).json({
                success: false,
                message: "Student with this ID already exists"
            });
        }

        const student = new Student({
            studentId,
            name,
            email,
            phone,
            course,
            semester,
            section
        });

        const savedStudent = await student.save();

        console.log("=================================");
        console.log("STUDENT SAVED");
        console.log("Database:", Student.db.name);
        console.log("Collection:", Student.collection.name);
        console.log(savedStudent);
        console.log("=================================");

        res.status(201).json({
            success: true,
            message: "Student registered successfully",
            data: savedStudent
        });

    } catch (error) {
        console.error("Student save error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to register student",
            error: error.message
        });
    }
});

module.exports = router;