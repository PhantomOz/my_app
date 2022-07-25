import React from "react";
import logo from "../pwc_logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h1>PWC Student Website</h1>
      </div>
      <div>
        <Link to="/">Home</Link> |<Link to="/contactus">Contact us</Link> |
        <Link to="gallery">Gallery</Link> |
        <Link to="application">Application</Link> |<Link to="about">About</Link>
      </div>
      <button id="mode" onClick={() => document.body.classList.toggle("light")}>
        light mode
      </button>
    </header>
  );
}

export default Header;
