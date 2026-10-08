const Student = require("../models/Student");

// ==================================================
// GET ALL STUDENTS
// ==================================================
const getStudents = async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Students retrieved successfully",
            data: students,
        });

    } catch (error) {
        console.error("Get students error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to retrieve students",
            error: error.message,
        });
    }
};


// ==================================================
// CREATE STUDENT
// ==================================================
const createStudent = async (req, res) => {
    try {
        console.log("=================================");
        console.log("CREATE STUDENT");
        console.log("Request body:", req.body);

        const {
            studentId,
            name,
            email,
            phone,
            course,
            semester,
            section
        } = req.body;

        // Check required fields
        if (!studentId || !name || !email || !course) {
            return res.status(400).json({
                success: false,
                message: "Student ID, name, email and course are required"
            });
        }

        // Check duplicate student ID
        const existingStudent = await Student.findOne({
            studentId: studentId
        });

        if (existingStudent) {
            return res.status(409).json({
                success: false,
                message: "Student with this ID already exists"
            });
        }

        // Create student
        const student = new Student({
            studentId: studentId,
            name: name,
            email: email,
            phone: phone,
            course: course,
            semester: semester,
            section: section
        });

        // Save to MongoDB
        const savedStudent = await student.save();

        console.log("Student saved successfully");
        console.log("Database:", Student.db.name);
        console.log("Collection:", Student.collection.name);
        console.log("Student:", savedStudent);

        console.log("=================================");

        res.status(201).json({
            success: true,
            message: "Student registered successfully",
            data: savedStudent
        });

    } catch (error) {

        console.error("=================================");
        console.error("CREATE STUDENT ERROR");
        console.error(error);
        console.error("=================================");

        res.status(500).json({
            success: false,
            message: "Failed to register student",
            error: error.message
        });
    }
};


module.exports = {
    getStudents,
    createStudent
};