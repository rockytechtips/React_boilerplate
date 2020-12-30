import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="text-center"
      style={{
        transform: "translate(-50%, -50%)",
        position: "absolute",
        left: "50%",
        top: "50%",
      }}
    >
      <h3>404 Page not found</h3>
      <br />
      <NavLink to="/">GO BACK</NavLink>
      <br />
      <br />
      <h3>
        No match for <code>{window.location.pathname}</code>
      </h3>
    </div>
  );
}

export default NotFound;
