import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
       
        <h1>Rotaract Club Of New Delhi</h1>
        <p>
        Warm Rotaract Greetings!
        <br />
“𝐀𝐥𝐨𝐧𝐞 𝐰𝐞 𝐜𝐚𝐧 𝐝𝐨 𝐬𝐨 𝐥𝐢𝐭𝐭𝐥𝐞; 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫 𝐰𝐞 𝐜𝐚𝐧 𝐝𝐨 𝐬𝐨 𝐦𝐮𝐜𝐡.”
<br />

For the last 16 years, Rotaract Club of New Delhi, the youth wing of Rotary International, has been selflessly working to serve the society. Along with its commitment to assist the community, it also helps its members for their personal and professional development.

After continuously serving the movement with loyalty, it’s time for us to make you a part of the Rotaract movement.
        </p>
        <Link to={"/joinus"} className="btn">
          Join Now
        </Link>
      </div>
      <div className="banner">
        <img src="/hero.jpg" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
