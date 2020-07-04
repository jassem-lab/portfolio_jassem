import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home">
      <div className="hero">
        <h3 className="hero-name">Hi, I'm Jassem Gaaloul</h3>
        <h1 className="hero-position">
          I'm a Front End Web Developer
        </h1>
        <p className="hero-intro para-3">Who build things for the web. Specialize in web contents.</p>
        <p className="hero-intro para-3">"Jassem's work is magic - he merges stunning Websites with a great experience, tools, technology that give tangible results."</p>

        <Link to="/projects">
          <button className="btn hero-btn">Projects</button>
        </Link>
 
      </div>
    </div>
  );
}

export default Home;
