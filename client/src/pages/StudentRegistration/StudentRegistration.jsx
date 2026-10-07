import { useState } from "react";
import "./StudentRegistration.css";

function StudentRegistration() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        rollNumber: "",
        department: "",
        year: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));

        setErrors((previousErrors) => ({
            ...previousErrors,
            [name]: "",
        }));

        setSubmitted(false);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Student name is required.";
        } else if (formData.name.trim().length < 3) {
            newErrors.name = "Name must contain at least 3 characters.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must contain exactly 10 digits.";
        }

        if (!formData.rollNumber.trim()) {
            newErrors.rollNumber = "Roll number is required.";
        }

        if (!formData.department) {
            newErrors.department = "Please select a department.";
        }

        if (!formData.year) {
            newErrors.year = "Please select your year.";
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitted(false);
            return;
        }

        console.log("Student Registration Data:", formData);

        setErrors({});
        setSubmitted(true);
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            rollNumber: "",
            department: "",
            year: "",
        });

        setErrors({});
        setSubmitted(false);
    };

    return (
        <div className="registration-page">
            <div className="registration-card">

                <div className="registration-header">
                    <div className="registration-icon">🎓</div>

                    <h1>Student Registration</h1>

                    <p>
                        Create your Campus Connect student account.
                    </p>
                </div>

                {submitted && (
                    <div className="success-message">
                        Student registered successfully!
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate>

                    {/* Student Name */}
                    <div className="form-group">
                        <label htmlFor="name">
                            Student Name <span>*</span>
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                        />

                        {errors.name && (
                            <p className="error-message">{errors.name}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">
                            Email Address <span>*</span>
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        {errors.email && (
                            <p className="error-message">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                        <label htmlFor="phone">
                            Phone Number <span>*</span>
                        </label>

                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter 10-digit phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        {errors.phone && (
                            <p className="error-message">{errors.phone}</p>
                        )}
                    </div>

                    {/* Roll Number */}
                    <div className="form-group">
                        <label htmlFor="rollNumber">
                            Roll Number <span>*</span>
                        </label>

                        <input
                            id="rollNumber"
                            name="rollNumber"
                            type="text"
                            placeholder="Enter your roll number"
                            value={formData.rollNumber}
                            onChange={handleChange}
                        />

                        {errors.rollNumber && (
                            <p className="error-message">{errors.rollNumber}</p>
                        )}
                    </div>

                    {/* Department */}
                    <div className="form-group">
                        <label htmlFor="department">
                            Department <span>*</span>
                        </label>

                        <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                        >
                            <option value="">Select Department</option>
                            <option value="Computer Science">
                                Computer Science
                            </option>
                            <option value="Information Technology">
                                Information Technology
                            </option>
                            <option value="Business Administration">
                                Business Administration
                            </option>
                            <option value="Commerce">
                                Commerce
                            </option>
                            <option value="Arts">
                                Arts
                            </option>
                        </select>

                        {errors.department && (
                            <p className="error-message">
                                {errors.department}
                            </p>
                        )}
                    </div>

                    {/* Year */}
                    <div className="form-group">
                        <label htmlFor="year">
                            Year <span>*</span>
                        </label>

                        <select
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                        >
                            <option value="">Select Year</option>
                            <option value="1st Year">1st Year</option>
                            <option value="2nd Year">2nd Year</option>
                            <option value="3rd Year">3rd Year</option>
                            <option value="4th Year">4th Year</option>
                        </select>

                        {errors.year && (
                            <p className="error-message">
                                {errors.year}
                            </p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="button-container">
                        <button
                            type="submit"
                            className="submit-button"
                        >
                            Create Account
                        </button>

                        <button
                            type="button"
                            className="reset-button"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>

                </form>

                <div className="registration-footer">
                    <p>
                        Already have an account?{" "}
                        <a href="/login">Login</a>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default StudentRegistration;