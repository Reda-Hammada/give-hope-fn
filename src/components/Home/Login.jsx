import React from "react";
import "./Login.css";
import log from "../../assets/log.svg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <div className="login-container">
        <div className="login-image">
          <img src={log} />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <button className="btn-login" type="submit">
                Login
              </button>
            </div>
            <div className="form-group">
              <span className="divider">or</span>
            </div>
            <div className="form-group">
              <button className="btn-google" type="button">
                <i className="fab fa-google "></i>Sign in with{" "}
                <span>Google</span>
              </button>
            </div>
            <div className="form-group">
              <span className="create-account-link">
                Don't have an account? <Link to="/register">Register!</Link>
              </span>
            </div>
            <div className="form-group">
              <span className="forgot-password-link">
                <Link to="/forgot-password">Forgot Password?</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
