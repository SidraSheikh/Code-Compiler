import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Authcss.css";
import Navbar3 from "./Navbar3";

function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = isLogin ? "/auth/login" : "/auth/signup";
    const payload = { email, password, confirmPassword };
    try {
      const response = await axios.post(
        `http://localhost:5000${endpoint}`,
        payload
      );
      if (response.data.success) {
        navigate("/mainpage");
      } else {
        alert(response.data.message || "An error occurred");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  return (
    <div className="bgimage">
      <Navbar3 />
      <div className="auth-page d-flex align-items-center justify-content-center">
        <div className="auth-box-container">
          <div className="tab-container">
            <button
              className={`tab-button ${isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`tab-button ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>
          <h2 className="text-center mb-4">
            {isLogin ? "Login Form" : "Signup Form"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {!isLogin && (
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <button
              type="submit"
              className="btn btn-primary w-100 animated-button"
            >
              {isLogin ? "Login" : "Signup"}
              <div className="button-effect"></div>
            </button>
            <div className="text-center mt-2">
              <span>
                {isLogin ? "Not a member?" : "Already a member?"}
                <Link to="/auth" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Signup now" : "Login now"}
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
