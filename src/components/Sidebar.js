import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu-links">
        <li className="nav-link">
            <Link to="/news1">
            <span className="text nav-text">News</span>
          </Link>
        </li>

        <li className="nav-link">
          <Link to="/analytics2">
            <span className="text nav-text">Analytics</span>
          </Link>
        </li>

        <li className="nav-link">
          <Link to="/notification3">
            <span className="text nav-text">Notifications</span>
          </Link>
        </li>

        <li className="nav-link">
          <Link to="/stats4">
            <span className="text nav-text">Stats</span>
          </Link>
        </li>

        <li className="nav-link">
          <Link to="/favourites5">
            <span className="text nav-text">Favourites</span>
          </Link>
        </li>

        <li className="nav-link">
          <Link to="/money6">
            <span className="text nav-text">Money</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
