import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1 className="abc">Our Story</h1>
          <p>
          The Rotaract Club of New Delhi stands as a beacon of hope and service, fostering a community of young leaders dedicated to making a positive impact. Our story is one of unwavering commitment to humanitarian efforts, community service, and professional development. Founded with the vision of creating a platform for youth to channel their energy and skills towards societal betterment, we have grown into a vibrant network of passionate individuals. Through a plethora of initiatives ranging from educational support and environmental conservation to health awareness and cultural exchange, we strive to bring about meaningful change. Our members, united by the core values of service, integrity, and fellowship, continually work towards a brighter, more inclusive future for all.
          </p>
        </div>
        <div className="banner">
          <img src="/about.jpeg" alt="aboutImg" className="imag" />
        </div>
      </div>
    </section>
  );
};

export default About;
