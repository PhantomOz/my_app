import React, { useState } from "react";
import logo from "../pwc_logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [dark, setDark] = useState(false);

  const handleMenu = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  };
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h1>PWC Student Website</h1>
      </div>
      <div>
        <Link to="/" className="active">
          Home
        </Link>{" "}
        |
        <Link to="/contactus" onClick={handleMenu}>
          {" "}
          Contact us
        </Link>{" "}
        |
        <Link to="gallery" onClick={handleMenu}>
          {" "}
          Gallery
        </Link>{" "}
        |
        <Link to="application" onClick={handleMenu}>
          {" "}
          Application
        </Link>{" "}
        |
        <Link to="aboutus" onClick={handleMenu}>
          {" "}
          About
        </Link>{" "}
        |
        <Link to="recruitmentform" onClick={handleMenu}>
          {" "}
          Recruitment
        </Link>{" "}
        |
        <Link to="post" onClick={handleMenu}>
          {" "}
          Post
        </Link>{" "}
        |
        <Link to="users" onClick={handleMenu}>
          {" "}
          Users
        </Link>{" "}
        |
        <Link to="todos" onClick={handleMenu}>
          {" "}
          Todos
        </Link>{" "}
        |
        <Link to="login" onClick={handleMenu}>
          {" "}
          Login
        </Link>{" "}
        |
      </div>
      <button
        id="mode"
        onClick={(e) => {
          document.body.classList.toggle("light");
          e.target.value = "light";
          setDark(!dark);
        }}
      >
        {dark ? "dark" : "light"} mode
      </button>
    </header>
  );
}

export default Header;
