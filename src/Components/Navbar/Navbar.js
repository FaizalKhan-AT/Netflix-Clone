import React,{useRef,useEffect,useState} from "react";
import "./Navbar.css";
import {useHistory} from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import BarsIcon from  '@mui/icons-material/Menu';
import CloseIcon from  '@mui/icons-material/Close';

function Navbar() {
 const history = useHistory()
 const navbarRef = useRef()
 const slideRef = useRef()
 const [icon, setIcon] = useState(true)

 const handleSlide = () => {
  slideRef.current.classList.toggle('slide-active')
 }
 const navScrolled = () => {   
  if (window.scrollY > 50) {
      navbarRef.current.classList.add('scrolled')
    } else {
      navbarRef.current.classList.remove('scrolled')
    }
 }



 useEffect (() => {
  window.addEventListener('scroll',navScrolled)
  return () => {
    window.removeEventListener('scroll',navScrolled);
  }
 },[navbarRef])
  return (
    <div  className="Navbar" ref={navbarRef}>
      <div className="logo" onClick={()=>history.push('/')}>
        <img src="./assets/images/netflix logo.png" alt="Logo" />
      </div>
      <div className='nav-slider'>
        <ul ref={slideRef} className="nav-links">
          <div className='mobile-list'>
            <li className='search-cont'>
              <input type="search" className="search-input" placeholder="Search" />
              <button className="search-btn">
                <img
                  className="search-icon"
                  src="./assets/images/search_white_24dp.svg"
                  alt="search-btn"/>
              </button>
            </li>
          </div>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <div className='mobile-list'>
            <li>Notifications 
              <label className="cont-tool">
              <div className="tool-tip">9</div>
              <img
                className="notification"
                src="./assets/images/notifications_white_24dp.svg"
                alt="notifications"/>
              </label>
            </li>
            <li>KIDS</li>
            <li>DVD</li>
          </div>        
        </ul>
        <div className="icons">
          <div className="search-container">        
            <input type="search" className="search-input" placeholder="Search" />
            <button className="search-btn">
              <img
                className="search-icon"
                src="./assets/images/search_white_24dp.svg"
                alt="search-btn"/>
            </button>
          </div>
          <p className="links">KIDS</p>
          <p className="links">DVD</p>
          <label className="cont">
            <div className="tool-tip">9</div>
            <img
              className="notification"
              src="./assets/images/notifications_white_24dp.svg"
              alt="notifications"/>
          </label>
          <img
            className="avatar" src="./assets/images/Netflix-avatar.png"
            alt="avatar"/>
        </div>
      </div>
      <span className='hamburger-btn' onClick={handleSlide}>
        <IconButton  color="inherit" onClick={()=> setIcon(!icon)}>
          {icon ? <BarsIcon sx={{ fontSize: 26 }}/> : <CloseIcon sx={{ fontSize: 26 }}/>}
        </IconButton>
      </span>
    </div>
  );
}

export default Navbar;
