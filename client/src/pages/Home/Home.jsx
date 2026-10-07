import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");

  const events = [
    {
      id: 1,
      title: "Tech Fest 2026",
      category: "Technology",
      date: "August 20, 2026",
      location: "College Auditorium",
    },
    {
      id: 2,
      title: "Cultural Night",
      category: "Cultural",
      date: "August 25, 2026",
      location: "Main Campus",
    },
    {
      id: 3,
      title: "Sports Meet",
      category: "Sports",
      date: "September 2, 2026",
      location: "College Ground",
    },
    {
      id: 4,
      title: "Coding Workshop",
      category: "Workshop",
      date: "September 8, 2026",
      location: "Computer Lab",
    },
    {
      id: 5,
      title: "Freshers Party",
      category: "Social",
      date: "September 15, 2026",
      location: "College Hall",
    },
    {
      id: 6,
      title: "Career Seminar",
      category: "Career",
      date: "September 20, 2026",
      location: "Seminar Hall",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const text = search.toLowerCase();

    return (
      event.title.toLowerCase().includes(text) ||
      event.category.toLowerCase().includes(text) ||
      event.location.toLowerCase().includes(text)
    );
  });

  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="hero-badge">
            🎓 CAMPUS EVENT PLATFORM
          </div>

          <PageTitle>
            Discover.
            <br />
            <span>Connect.</span>
            <br />
            Experience.
          </PageTitle>

          <p>
            Find exciting events, workshops, cultural programs,
            sports activities and opportunities happening on your campus.
          </p>

          <div className="hero-buttons">
            <Link to="/events" className="primary-button">
              Explore Events →
            </Link>

            <Button
              className="secondary-button"
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </Button>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">

        <Card
          title="Events"
          description="Discover campus events"
        >
          <div className="feature-icon">🎓</div>

          <Link to="/events">
            Explore →
          </Link>
        </Card>

        <Card
          title="Workshops"
          description="Learn new skills"
        >
          <div className="feature-icon">💡</div>

          <Link to="/events">
            Explore →
          </Link>
        </Card>

        <Card
          title="Activities"
          description="Join campus activities"
        >
          <div className="feature-icon">🏆</div>

          <Link to="/events">
            Explore →
          </Link>
        </Card>

      </section>

      {/* EVENTS */}
      <section className="events-section" id="events">

        <div className="section-top">

          <div>
            <p className="section-label">
              UPCOMING EVENTS
            </p>

            <h2>
              What's happening?
            </h2>
          </div>

          <div className="search-box">
            🔍

            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

        </div>

        <div className="event-grid">

          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              title={event.title}
              description={`${event.date} • ${event.location}`}
            >

              <div className="card-top">

                <span className="category">
                  {event.category}
                </span>

                <span className="event-number">
                  0{event.id}
                </span>

              </div>

              <div className="event-info">

                <p>
                  <strong>📅</strong>
                  {event.date}
                </p>

                <p>
                  <strong>📍</strong>
                  {event.location}
                </p>

              </div>

              <Link
                to="/events"
                className="details-button"
              >
                View Details →
              </Link>

            </Card>
          ))}

        </div>

        {filteredEvents.length === 0 && (
          <div className="no-events">
            <h3>No events found</h3>

            <p>
              Try searching for another event.
            </p>
          </div>
        )}

        <div className="view-all">
          <Link to="/events">
            View All Events →
          </Link>
        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-content">

          <p className="section-label">
            ABOUT CAMPUS-CONNECT
          </p>

          <h2>
            Your campus.
            <br />
            <span>One connected place.</span>
          </h2>

          <p>
            Campus-Connect makes it easier for students
            to discover what's happening around campus.
            From technical workshops to cultural
            celebrations, everything is organized in
            one simple platform.
          </p>

        </div>

        <div className="about-stats">

          <div className="stat">
            <strong>100+</strong>
            <span>Events</span>
          </div>

          <div className="stat">
            <strong>5000+</strong>
            <span>Students</span>
          </div>

          <div className="stat">
            <strong>50+</strong>
            <span>Organizers</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;