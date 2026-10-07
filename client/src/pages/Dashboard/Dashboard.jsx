import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <p className="dashboard-label">CAMPUS-CONNECT</p>
          <h1>Campus Connect Dashboard</h1>
          <p>Welcome back! 👋</p>
        </div>

        <Link to="/profile" className="profile-link">
          My Profile
        </Link>
      </header>

      <main className="dashboard-content">
        <section className="welcome-card">
          <span className="welcome-icon">🎓</span>
          <div>
            <h2>Your campus, your activities.</h2>
            <p>Your personalized campus activity dashboard.</p>
          </div>
        </section>

        <section className="dashboard-section">
          <p className="section-label">QUICK ACTIONS</p>

          <div className="quick-actions">
            <Link to="/" className="action-card">
              <span>🔎</span>
              <div>
                <h3>Explore Events</h3>
                <p>Discover what's happening on campus.</p>
              </div>
              <strong>→</strong>
            </Link>

            <Link to="/profile" className="action-card">
              <span>👤</span>
              <div>
                <h3>My Profile</h3>
                <p>Manage your Campus Connect profile.</p>
              </div>
              <strong>→</strong>
            </Link>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <p className="section-label">UPCOMING EVENTS</p>
              <h2>Don't miss out</h2>
            </div>

            <Link to="/" className="view-all">
              View all →
            </Link>
          </div>

          <div className="upcoming-events">
            <div className="event-item">
              <span className="event-icon">🎓</span>
              <div>
                <h3>Tech Fest 2026</h3>
                <p>August 20, 2026</p>
              </div>
              <span className="event-arrow">→</span>
            </div>

            <div className="event-item">
              <span className="event-icon">🎭</span>
              <div>
                <h3>Cultural Night</h3>
                <p>August 25, 2026</p>
              </div>
              <span className="event-arrow">→</span>
            </div>

            <div className="event-item">
              <span className="event-icon">⚽</span>
              <div>
                <h3>Sports Meet</h3>
                <p>September 2, 2026</p>
              </div>
              <span className="event-arrow">→</span>
            </div>
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