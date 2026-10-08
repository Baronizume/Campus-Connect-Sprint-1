const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        studentId: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 100,
            trim: true
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },

        phone: {
            type: String,
            required: true,
            match: /^[0-9]{10}$/
        },

        course: {
            type: String,
            required: true,
            trim: true
        },

        semester: {
            type: String,
            trim: true
        },

        year: {
            type: String,
            trim: true
        },

        section: {
            type: String,
            trim: true
        },

        status: {
            type: String,
            required: true,
            default: "active",
            enum: ["active", "inactive"]
        }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;