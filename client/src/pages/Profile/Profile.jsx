import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-container">

        <div className="profile-top">
          <Link to="/dashboard" className="back-link">
            ← Back to Dashboard
          </Link>

          <p className="profile-label">MY PROFILE</p>
          <h1>Your Profile</h1>
          <p className="profile-subtitle">
            Manage your Campus Connect profile information.
          </p>
        </div>

        <div className="profile-card">

          <div className="profile-header">
            <div className="profile-avatar">
              A
            </div>

            <div>
              <h2>Campus Student</h2>
              <p>Student Account</p>
            </div>

            <button className="edit-button">
              ✏️ Edit Profile
            </button>
          </div>

          <div className="profile-divider"></div>

          <div className="profile-details">

            <div className="profile-field">
              <span>Full Name</span>
              <strong>Campus Student</strong>
            </div>

            <div className="profile-field">
              <span>Email Address</span>
              <strong>student@campus.edu</strong>
            </div>

            <div className="profile-field">
              <span>Course</span>
              <strong>Computer Science</strong>
            </div>

            <div className="profile-field">
              <span>Year</span>
              <strong>3rd Year</strong>
            </div>

            <div className="profile-field">
              <span>Department</span>
              <strong>Computer Science & Engineering</strong>
            </div>

            <div className="profile-field">
              <span>Campus</span>
              <strong>Main Campus</strong>
            </div>

          </div>

        </div>

        <div className="profile-stats">

          <div className="profile-stat">
            <strong>12</strong>
            <span>Events Joined</span>
          </div>

          <div className="profile-stat">
            <strong>5</strong>
            <span>Workshops</span>
          </div>

          <div className="profile-stat">
            <strong>3</strong>
            <span>Activities</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;