import React from "react";
import "./about.css";
import aboutgif from "../../images/aboutgif.gif";

function About() {
  return (
    <div id="about">
      <h1 className="section-head-tag">
        <span className="colored-span-tag">About</span> Me
      </h1>
      <div className="about-img-desc-div">
        <div className="about-img-div">
          <img src={aboutgif} alt="about gif" />
        </div>
        <div className="about-desc-div">
          <h3 className="about-h3">
            Hello, My name is{" "}
            <span className="colored-span-tag">Rohit Kumar</span>.
          </h3>
          <p className="about-p">
            I am a passionate{" "}
            <span className="colored-span-tag">Full Stack Web Developer</span>{" "}
            who focus on writing clean and user friendly applications.
          </p>
          <p className="about-p">
            As an aspiring Full Stack Web developer, I like the impact it
            creates on the world.
          </p>
          <p className="about-p">
            I am Skilled in the{" "}
            <span className="colored-span-tag">MERN Stack</span> and willing to
            start a career with an organization that provides an opportunity to
            improve skills and knowledge gained as well as to grow along with
            the organization’s goal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
