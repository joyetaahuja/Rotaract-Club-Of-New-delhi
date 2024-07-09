import React from "react";

import {
  
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/logo.jpg" alt="logo" style={{
        
        borderRadius: '50%'  
      }}/>
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          
          <li>rotaractnd16@gmail.com</li>
          <li>+91 9312056997</li>
        </ul>
      </div>
     
      <div>
        <h4>Follow Us</h4>
        <ul>
          <a href="https://www.instagram.com/rc_newdelhi?igsh=MTN3cDJ5NDhiYzR5">
          <li>
            
            <span>
            
            </span>{" "}
            <span>Instagram</span>{" "}
         
        </li>
          </a>

       
          <a href="https://www.linkedin.com/company/rotaract-club-of-new-delhi/">
          <li>
           
             
            
                
             
              Linkedin
           
          </li>
          </a>
          <a href="https://www.youtube.com/@rotaractclubofnewdelhi3602">
          <li>
           
           {" "}
           <span>
            
           </span>{" "}
           <span>Youtube</span>{" "}
        
       </li>
          </a>
          
         
         
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
