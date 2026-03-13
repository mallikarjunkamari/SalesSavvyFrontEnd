import React, { useState } from "react";
import "../css/styles.css";

export function ProfileDropdown({ username }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="profile-dropdown">
      <button className="profile-button" onClick={() => setIsOpen(!isOpen)}>
        <img src="https://via.placeholder.com/40" alt="User Avatar" />
        {username || "Guest"}
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <a href="#">Profile</a>
          <a href="#">Orders</a>
          <button onClick={() => console.log("User logged out")}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}