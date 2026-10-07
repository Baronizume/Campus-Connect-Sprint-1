import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/ui/PageTitle";
import Welcome from "../../components/ui/Welcome";

import "./Dashboard.css";

function Dashboard() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(true);
  const [studentName, setStudentName] = useState("Campus Student");

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleToggleMessage = () => {
    setShowMessage(!showMessage);
  };

  const handleNameChange = (event) => {
    setStudentName(event.target.value);
  };

  return (
    <div className="dashboard-page">

      {/* HEADER */}
      <header className="dashboard-header">
        <div>
          <p className="dashboard-label">
            CAMPUS-CONNECT
          </p>

          <PageTitle>
            Campus Connect Dashboard
          </PageTitle>

          <p>
            Welcome back! 👋
          </p>
        </div>

        <Link to="/profile" className="profile-link">
          My Profile
        </Link>
      </header>

      <main className="dashboard-content">

        {/* PROPS DEMONSTRATION */}
        <Card className="welcome-card">
          <Welcome
            name={studentName}
            platform="Campus Connect"
          />
        </Card>

        {/* STATE DEMONSTRATION */}
        <section className="dashboard-section">

          <p className="section-label">
            INTERACTIVE DASHBOARD
          </p>

          <Card className="interactive-card">

            <h2>
              Activity Counter
            </h2>

            <p>
              You interacted with this dashboard:
            </p>

            <strong className="counter">
              {count}
            </strong>

            <div className="dashboard-buttons">

              <Button onClick={handleIncrease}>
                Click Me +
              </Button>

              <Button onClick={handleToggleMessage}>
                {showMessage ? "Hide Message" : "Show Message"}
              </Button>

            </div>

            {showMessage && (
              <p className="dynamic-message">
                🎉 Great! Your dashboard is interactive.
              </p>
            )}

          </Card>
        </section>

        {/* INPUT STATE */}
        <section className="dashboard-section">

          <p className="section-label">
            UPDATE YOUR NAME
          </p>

          <Card className="name-card">

            <label htmlFor="studentName">
              Student Name
            </label>

            <input
              id="studentName"
              type="text"
              value={studentName}
              onChange={handleNameChange}
              placeholder="Enter your name"
            />

            <p>
              Hello, <strong>{studentName}</strong>!
            </p>

          </Card>

        </section>

        {/* QUICK ACTIONS */}
        <section className="dashboard-section">

          <p className="section-label">
            QUICK ACTIONS
          </p>

          <div className="quick-actions">

            <Card className="action-card">

              <span>🔎</span>

              <div>
                <h3>
                  Explore Events
                </h3>

                <p>
                  Discover what's happening on campus.
                </p>
              </div>

              <Link to="/events">
                <Button>
                  Explore →
                </Button>
              </Link>

            </Card>

            <Card className="action-card">

              <span>👤</span>

              <div>
                <h3>
                  My Profile
                </h3>

                <p>
                  Manage your Campus Connect profile.
                </p>
              </div>

              <Link to="/profile">
                <Button>
                  View Profile →
                </Button>
              </Link>

            </Card>

          </div>

        </section>

        {/* UPCOMING EVENTS */}
        <section className="dashboard-section">

          <div className="section-heading">

            <div>
              <p className="section-label">
                UPCOMING EVENTS
              </p>

              <h2>
                Don't miss out
              </h2>
            </div>

            <Link to="/events" className="view-all">
              View all →
            </Link>

          </div>

          <div className="upcoming-events">

            <Card className="event-item">
              <span className="event-icon">
                🎓
              </span>

              <div>
                <h3>
                  Tech Fest 2026
                </h3>

                <p>
                  August 20, 2026
                </p>
              </div>

              <Link to="/events" className="event-arrow">
                →
              </Link>
            </Card>

            <Card className="event-item">
              <span className="event-icon">
                🎭
              </span>

              <div>
                <h3>
                  Cultural Night
                </h3>

                <p>
                  August 25, 2026
                </p>
              </div>

              <Link to="/events" className="event-arrow">
                →
              </Link>
            </Card>

            <Card className="event-item">
              <span className="event-icon">
                ⚽
              </span>

              <div>
                <h3>
                  Sports Meet
                </h3>

                <p>
                  September 2, 2026
                </p>
              </div>

              <Link to="/events" className="event-arrow">
                →
              </Link>
            </Card>

          </div>

        </section>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </main>
    </div>
  );
}

export default Dashboard;
