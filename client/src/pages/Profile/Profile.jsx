import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-container">

        {/* PROFILE HEADER */}
        <div className="profile-top">

          <Link to="/dashboard" className="back-link">
            ← Back to Dashboard
          </Link>

          <p className="profile-label">
            MY PROFILE
          </p>

          <PageTitle>
            Your Profile
          </PageTitle>

          <p className="profile-subtitle">
            Manage your Campus Connect profile information.
          </p>

        </div>

        {/* PROFILE CARD */}
        <Card className="profile-card">

          <div className="profile-header">

            <div className="profile-avatar">
              A
            </div>

            <div>
              <h2>
                Campus Student
              </h2>

              <p>
                Student Account
              </p>
            </div>

            <Button className="edit-button">
              ✏️ Edit Profile
            </Button>

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
              <strong>
                Computer Science & Engineering
              </strong>
            </div>

            <div className="profile-field">
              <span>Campus</span>
              <strong>Main Campus</strong>
            </div>

          </div>

        </Card>

        {/* PROFILE STATS */}
        <div className="profile-stats">

          <Card className="profile-stat">
            <strong>12</strong>
            <span>Events Joined</span>
          </Card>

          <Card className="profile-stat">
            <strong>5</strong>
            <span>Workshops</span>
          </Card>

          <Card className="profile-stat">
            <strong>3</strong>
            <span>Activities</span>
          </Card>

        </div>

      </div>
    </div>
  );
}

export default Profile;