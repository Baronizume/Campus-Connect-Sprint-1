import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      <header className="dashboard-header">
        <div>
          <p className="dashboard-label">CAMPUS-CONNECT</p>

          <PageTitle>
            Campus Connect Dashboard
          </PageTitle>

          <p>Welcome back! 👋</p>
        </div>

        <Link to="/profile" className="profile-link">
          My Profile
        </Link>
      </header>

      <main className="dashboard-content">

        <Card className="welcome-card">
          <span className="welcome-icon">🎓</span>

          <div>
            <h2>Your campus, your activities.</h2>
            <p>Your personalized campus activity dashboard.</p>
          </div>
        </Card>

        <section className="dashboard-section">
          <p className="section-label">QUICK ACTIONS</p>

          <div className="quick-actions">

            <Card className="action-card">
              <span className="action-icon">🔎</span>

              <div className="action-content">
                <h3>Explore Events</h3>
                <p>Discover what's happening on campus.</p>
              </div>

              <Link to="/events">
                <Button>Explore →</Button>
              </Link>
            </Card>

            <Card className="action-card">
              <span className="action-icon">👤</span>

              <div className="action-content">
                <h3>My Profile</h3>
                <p>Manage your Campus Connect profile.</p>
              </div>

              <Link to="/profile">
                <Button>View Profile →</Button>
              </Link>
            </Card>

          </div>
        </section>

        <section className="dashboard-section">

          <div className="section-heading">
            <div>
              <p className="section-label">UPCOMING EVENTS</p>
              <h2>Don't miss out</h2>
            </div>

            <Link to="/events" className="view-all">
              View all →
            </Link>
          </div>

          <div className="upcoming-events">

            <Card className="event-item">
              <span className="event-icon">🎓</span>

              <div>
                <h3>Tech Fest 2026</h3>
                <p>August 20, 2026</p>
              </div>

              <Link to="/events" className="event-arrow">
                →
              </Link>
            </Card>

            <Card className="event-item">
              <span className="event-icon">🎭</span>

              <div>
                <h3>Cultural Night</h3>
                <p>August 25, 2026</p>
              </div>

              <Link to="/events" className="event-arrow">
                →
              </Link>
            </Card>

            <Card className="event-item">
              <span className="event-icon">⚽</span>

              <div>
                <h3>Sports Meet</h3>
                <p>September 2, 2026</p>
              </div>

              <Link to="/events" className="event-arrow">
                →
              </Link>
            </Card>

          </div>
        </section>

        <Link to="/" className="back-home">
          <Button>← Back to Home</Button>
        </Link>

      </main>
    </div>
  );
}

export default Dashboard;
