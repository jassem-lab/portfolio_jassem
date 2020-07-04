import React from "react";
import "./About.scss";
import Education from "./components/Education";
import Skills from "./components/Skills";
import MyImage from "../../../assets/img/projects/myImage.jpg"
function About() {
  return (
    <div id="about">
      
      <div className="header-content">
        <h2 className="header-content-title">About Me</h2>
        
        <p className="para-3">
          Hi! My name is <span className="highlight-content">Jassem Gaaloul</span>. I'm a <span className="highlight-content">Front End Developer</span> based in Tunisia.
           Well trained Web
          Developer that knows how to create design and modify web content. who
          enjoys building things that live on the internet.
          Q. Where can I see your work?

         <span> Email me and I will prepare work samples relevant to your project with accompanying details.</span>
         
         <span> Q. Are you currently available ? </span>

          <span>I am currently available at this time. </span>

          <span> Q. How much do you charge? </span>
         
          <span> Email me and I will compile a custom quote and provide details on my hourly rate and availability. </span>

         
        </p>
        <img src={MyImage} className="myImage" />
      </div>
      <div className="about-info">
        <Education></Education>
        <Skills></Skills>
      </div>
    </div>
  );
}

export default About;
