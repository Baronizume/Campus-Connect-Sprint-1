import { Outlet, Link, NavLink } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <header
        style={{
          width: "100%",
          background: "#172554",
          padding: "18px 50px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: "700",
            whiteSpace: "nowrap",
          }}
        >
          Campus-Connect
        </Link>

        {/* NAVIGATION */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <NavLink
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Home
          </NavLink>

          <NavLink
            to="/events"
            style={{ color: "white", textDecoration: "none" }}
          >
            Events
          </NavLink>

          <NavLink
            to="/dashboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/profile"
            style={{ color: "white", textDecoration: "none" }}
          >
            Profile
          </NavLink>

          <NavLink
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
              background: "#6366f1",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Login
          </NavLink>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default MainLayout;
