import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  FaYoutube ,FaLinkedin} from "react-icons/fa6";

import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo.jpg" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/joinus"}>JOIN US</Link>
            </li>
           
            
            <li>
              <Link to={"/contact"}>CONTACT US</Link>
            </li>
          </ul>
          <ul>
            <a href="https://www.instagram.com/rc_newdelhi?igsh=MTN3cDJ5NDhiYzR5">
            <li className="ctn">
              <BsInstagram />
            </li>
           
            </a>
           
          <a href="https://www.linkedin.com/company/rotaract-club-of-new-delhi/">
          <li className="ctn">
              <FaLinkedin/>
            </li>
          </a>
           
            <a href="https://www.youtube.com/@rotaractclubofnewdelhi3602">
            <li className="ctn">
              <FaYoutube />
            </li>
           
            </a>
            
           
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
