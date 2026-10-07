import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/ui/PageTitle";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        {/* LOGO */}
        <div className="login-logo">
          Campus<span>-Connect</span>
        </div>

        {/* HEADER */}
        <div className="login-header">
          <div className="login-icon">
            🎓
          </div>

          <PageTitle>
            Welcome Back
          </PageTitle>

          <p>
            Login to continue to your Campus Connect account.
          </p>
        </div>

        {/* LOGIN FORM */}
        <form
          className="login-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot">
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            className="login-submit"
          >
            Login →
          </Button>
        </form>

        {/* DIVIDER */}
        <div className="login-divider">
          <span>or</span>
        </div>

        {/* CREATE ACCOUNT */}
        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/student-registration">
            Create Account
          </Link>
        </p>

        {/* BACK HOME */}
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Login;