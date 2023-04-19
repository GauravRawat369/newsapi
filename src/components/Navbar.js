import React from "react";

const Navbar = () => {
  return (
    <nav className=" custom-nav navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid ">
        <a className="text-css navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="text-css nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="text-css nav-link" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="text-css nav-link" href="/">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
