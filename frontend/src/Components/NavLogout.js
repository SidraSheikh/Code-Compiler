import React from "react";

const NavLogout = () => {
  const buttonStyles = {
    backgroundColor: "#007bff",
    color: "#fff",
    borderColor: "#007bff",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer"
  };

  const handleLogout = () => {
    window.location.href = "/logout";
  };

  return (
    <nav className="nav">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div>
          <img src="logo.png" alt="Logo" width="90" height="90" />
        </div>
        <div>
          <button style={buttonStyles} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavLogout;
