import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
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

            {/* HERO */}
            <section className="events-hero">

                <p className="events-label">
                    CAMPUS CONNECT
                </p>

                <PageTitle>
                    Campus <span>Events</span>
                </PageTitle>

                <p className="events-description">
                    Discover all upcoming events, workshops, activities and
                    opportunities happening on campus.
                </p>

            </section>

            {/* EVENTS */}
            <section className="all-events">

                <div className="events-heading">

                    <div>
                        <p className="events-label">
                            UPCOMING
                        </p>

                        <h2>
                            What's happening?
                        </h2>
                    </div>

                    <span className="event-count">
                        {events.length} Events
                    </span>

                </div>

                <div className="events-grid">

                    {events.map((event, index) => (
                        <Card
                            key={event.title}
                            title={event.title}
                            description={`${event.date} • ${event.location}`}
                        >

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

                            <Link to="/events">
                                <Button className="event-details-button">
                                    View Details →
                                </Button>
                            </Link>

                        </Card>
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

                <Link to="/dashboard">
                    <Button className="cta-button">
                        Go to Dashboard →
                    </Button>
                </Link>

            </section>

        </div>
    );
}

export default Events;