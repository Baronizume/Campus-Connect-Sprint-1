import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "#172554",
        color: "white",
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Campus-Connect
      </Link>

      <nav
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/events" style={{ color: "white" }}>
          Events
        </Link>

        <Link to="/dashboard" style={{ color: "white" }}>
          Dashboard
        </Link>

        <Link to="/profile" style={{ color: "white" }}>
          Profile
        </Link>

        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
