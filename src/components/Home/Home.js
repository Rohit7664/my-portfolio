import React from "react";
import "./home.css";
import logo from "../../images/logo.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ResumeBtn } from "../Navbar/NavbarElements";

function HomeNav() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "MERN Stack Developer", "Problem Solver"],
    loop: {},
    typeSpeed: 130,
    deleteSpeed: 80,
  });

  return (
    <div id="home">
      <div className="home-img-div">
        <img src={logo} alt="profile pic" />
      </div>
      <div className="home-desc-div">
        <h2 className="home-h2">
          Hi There! <span className="wave">👋🏻</span>
        </h2>
        <h1 className="home-h1">
          I'm <span className="colored-span-tag">Rohit Kumar</span>
        </h1>
        <h2 className="home-h2" style={{ marginBottom: "30px" }}>
          <span className="colored-span-tag">{text}</span>
          <span className="colored-span-tag">
            <Cursor cursorStyle="|" />
          </span>
        </h2>
        <ResumeBtn
          to="https://drive.google.com/drive/u/1/folders/1RoWSnF6EfJGVwTmSJhFXaUQFHengRjIw"
          target="_blank"
          rel="noreferrer noopener"
        >
          Find My Resume
        </ResumeBtn>
      </div>
    </div>
  );
}

export default HomeNav;
