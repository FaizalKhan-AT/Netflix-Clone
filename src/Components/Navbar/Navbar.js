import React from "react";
import "./Navbar.css";
function Navbar() {
  const search = () => {
    const input = document.querySelector(".search-input");
    input.classList.toggle("active");
  };
  window.addEventListener('scroll', () => {
    const Navbar = document.querySelector('.Navbar')
    if (window.scrollY > 50) {
      Navbar.classList.add('scrolled')
    } else {
      Navbar.classList.remove('scrolled')
    }
  })
 
  return (
    <div  className="Navbar">
      <div className="logo">
        <img src="./assets/images/netflix logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Latest</li>
        <li>My List</li>
      </ul>
      <input type="search" className="search-input" placeholder="Search" />
      <div className="icons">
        <button onClick={search} className="search-btn">
          <img
            className="search-icon"
            src="./assets/images/search_white_24dp.svg"
            alt=""
          />
        </button>
        <p className="links">KIDS</p>
        <p className="links">DVD</p>
        <label className="cont">
          <div className="tool-tip">9</div>
          <img
            className="notification"
            src="./assets/images/notifications_white_24dp.svg"
            alt="notifications"
          />
        </label>
        <img
          className="avatar"
          src="./assets/images/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
