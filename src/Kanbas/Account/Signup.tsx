import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input
        className="form-control mb-2"
        id="wd-username"
        placeholder="username"
      />{" "}
      <input
        className="form-control mb-2"
        id="wd-password"
        placeholder="password"
        type="password"
      />{" "}
      <input
        className="form-control mb-2"
        id="wd-verify-password"
        placeholder="verify password"
        type="password"
      />{" "}
      <Link
        className="btn btn-primary w-100 mb-2"
        id="wd-signup-link"
        to="/Kanbas/Account/Signup"
      >
        Sign up
      </Link>
      <Link id="wd-signin-btn" to="/Kanbas/Dashboard">
        Sign in
      </Link>
      <br />
    </div>
  );
}
