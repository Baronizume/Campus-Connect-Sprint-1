import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          Campus<span>-Connect</span>
        </div>

        <div className="login-header">
          <div className="login-icon">🎓</div>

          <h1>Welcome Back</h1>

          <p>
            Login to continue to your Campus Connect account.
          </p>
        </div>

        <form className="login-form">

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

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

          <button type="submit" className="login-submit">
            Login →
          </button>

        </form>

        <div className="login-divider">
          <span>or</span>
        </div>

        <p className="signup-text">
          Don't have an account?{" "}
          <a href="#signup">Create Account</a>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Login;