import { Link } from "react-router-dom";
import "./Events.css";

function Events() {
    const events = [
        {
            icon: "🎓",
            title: "Tech Fest 2026",
            date: "August 20, 2026",
            location: "College Auditorium",
            category: "Technology",
        },
        {
            icon: "🎭",
            title: "Cultural Night",
            date: "August 25, 2026",
            location: "Main Campus",
            category: "Cultural",
        },
        {
            icon: "⚽",
            title: "Sports Meet",
            date: "September 2, 2026",
            location: "College Ground",
            category: "Sports",
        },
        {
            icon: "💻",
            title: "Coding Workshop",
            date: "September 8, 2026",
            location: "Computer Lab",
            category: "Workshop",
        },
        {
            icon: "🎉",
            title: "Freshers Party",
            date: "September 15, 2026",
            location: "College Hall",
            category: "Social",
        },
        {
            icon: "💼",
            title: "Career Seminar",
            date: "September 20, 2026",
            location: "Seminar Hall",
            category: "Career",
        },
    ];

    return (
        <div className="events-page">

            {/* NAVBAR */}
            <header className="events-navbar">
                <Link to="/" className="events-logo">
                    Campus<span>-Connect</span>
                </Link>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/events" className="active">
                        Events
                    </Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">Profile</Link>
                </nav>

                <Link to="/login" className="events-login">
                    Login
                </Link>
            </header>

            {/* HERO */}
            <section className="events-hero">
                <p className="events-label">CAMPUS CONNECT</p>

                <h1>
                    Campus <span>Events</span>
                </h1>

                <p className="events-description">
                    Discover all upcoming events, workshops, activities and
                    opportunities happening on campus.
                </p>
            </section>

            {/* EVENTS */}
            <section className="all-events">

                <div className="events-heading">
                    <div>
                        <p className="events-label">UPCOMING</p>
                        <h2>What's happening?</h2>
                    </div>

                    <span className="event-count">
                        {events.length} Events
                    </span>
                </div>

                <div className="events-grid">

                    {events.map((event, index) => (
                        <article className="event-box" key={event.title}>

                            <div className="event-box-top">
                                <div className="event-icon">
                                    {event.icon}
                                </div>

                                <span className="event-number">
                                    0{index + 1}
                                </span>
                            </div>

                            <span className="event-category">
                                {event.category}
                            </span>

                            <h3>{event.title}</h3>

                            <div className="event-details">
                                <p>
                                    <span>📅</span>
                                    {event.date}
                                </p>

                                <p>
                                    <span>📍</span>
                                    {event.location}
                                </p>
                            </div>

                            <button className="event-details-button">
                                View Details →
                            </button>

                        </article>
                    ))}

                </div>

            </section>

            {/* CTA */}
            <section className="events-cta">
                <h2>
                    Ready to get involved?
                </h2>

                <p>
                    Explore campus activities and make the most of your
                    college experience.
                </p>

                <Link to="/dashboard" className="cta-button">
                    Go to Dashboard →
                </Link>
            </section>

            {/* FOOTER */}
            <footer className="events-footer">
                <h3>Campus-Connect</h3>

                <p>
                    Connecting students with campus experiences.
                </p>

                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/login">Login</Link>
                </div>

                <div className="footer-divider"></div>

                <small>
                    © 2026 Campus-Connect. All rights reserved.
                </small>
            </footer>

        </div>
    );
}

export default Events;