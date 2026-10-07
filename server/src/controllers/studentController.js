const getStudents = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Students retrieved successfully",
        data: [],
    });
};

const getStudentById = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        success: true,
        message: "Student retrieved successfully",
        studentId: id,
    });
};

const createStudent = (req, res) => {
    res.status(201).json({
        success: true,
        message: "Student created successfully",
        data: req.body,
    });
};

const updateStudent = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        success: true,
        message: "Student updated successfully",
        studentId: id,
        data: req.body,
    });
};

const deleteStudent = (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        success: true,
        message: "Student deleted successfully",
        studentId: id,
    });
};

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};
