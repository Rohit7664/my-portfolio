import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import blinkit_pic from "../../images/blinkit_pic.png";
import dominoz_pic from "../../images/dominoz_pic.png";
import moviepic from "../../images/movie.jpg";

function Projects() {
  return (
    <div id="projects">
      <h1 className="section-head-tag">
        My <span className="colored-span-tag">Projects</span>
      </h1>
      <div className="projects-desc-div">
        {/* ecart card just below */}

        

        {/* Movie application */}

        <div className="projects-card-div">
          <div className="projects-img-div">
            <img src={moviepic} alt="dominoz pic" />
          </div>
          <div className="project-desc">
            <h2 style={{ marginBottom: "20px" }} className="colored-span-tag">
              Movie Application
            </h2>
            <p style={{ marginBottom: "20px", fontSize: "18px" }}>
            This is a dummy movie-application website for practice purpose only. This is
              a frontend project. In this website, user can search movie, can
              filter the movie, can add to fevorite  and can remove them
              from fevorite cart.
            </p>
            <p style={{ marginBottom: "20px", fontSize: "18px" }}>
              <span className="colored-span-tag">Tech Stacks:</span> HTML | CSS
              | JavaScript | Chakra UI | React | Redux | LocalStorage
            </p>
            <div className="projects-link">
              <Link
                className="projects-git-link"
                to="https://github.com/Rohit7664/movies-app"
                target="_blank"
                rel="noreferre noopener"
              >
                <svg
                  stroke="currentColor"
                  fill="#fff"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                GitHub
              </Link>
              <Link
                className="projects-git-link"
                to="https://relaxed-genie-657dcc.netlify.app/"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
                Live
              </Link>
            </div>
          </div>
        </div>

        {/* Domino's card just below */}

        <div className="projects-card-div">
          <div className="projects-img-div">
            <img src={dominoz_pic} alt="dominoz pic" />
          </div>
          <div className="project-desc">
            <h2 style={{ marginBottom: "20px" }} className="colored-span-tag">
              Domino's Clone
            </h2>
            <p style={{ marginBottom: "20px", fontSize: "18px" }}>
              This website is a clone of Domino's Pizza, Inc., trading as
              Domino's, is a Michigan-based multinational pizza restaurant chain
              founded in 1960 and led by CEO Russell Weiner. It provides pizza
              delivery and carryout services as well as dine-in services through
              its restaurants.
            </p>
            <p style={{ marginBottom: "20px", fontSize: "18px" }}>
              <span className="colored-span-tag">Tech Stacks:</span> HTML | CSS
              | JavaScript | Chakra UI | React | Redux | Node | Express | MongoDB
            </p>
            <div className="projects-link">
              <Link
                className="projects-git-link"
                to="https://github.com/Rohit7664/Domino-s-clone"
                target="_blank"
                rel="noreferre noopener"
              >
                <svg
                  stroke="currentColor"
                  fill="#fff"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                GitHub
              </Link>
              <Link
                className="projects-git-link"
                to="https://rohit-dominos-clone.netlify.app/"
                target="_blank"
                rel="noreferre noopener"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
                Live
              </Link>
            </div>
          </div>
        </div>

        {/* Blinkit card just below */}

        <div className="projects-card-div">
          <div className="projects-img-div">
            <img src={blinkit_pic} alt="blinkit pic" />
          </div>
          <div className="project-desc">
            <h2 style={{ marginBottom: "20px" }} className="colored-span-tag">
              Blinkit Clone
            </h2>
            <p style={{ marginBottom: "20px", fontSize: "18px" }}>
              This website is a clone of Blink Commerce Private Limited, is an
              Indian instant delivery service. Blinkit primarily delivers
              groceries, fresh fruits,vegetables, meat, stationery, bakery
              items, personal care, baby care and pet care products, snacks,
              flowers, etc.
            </p>
            <p style={{ marginBottom: "20px", fontSize: "18px" }}>
              <span className="colored-span-tag">Tech Stacks:</span> HTML | CSS
              | JavaScript | Bootstrap
            </p>
            <div className="projects-link">
              <Link
                className="projects-git-link"
                to="https://github.com/Rohit7664/Blinkit-clone"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  stroke="currentColor"
                  fill="#fff"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                GitHub
              </Link>
              <Link
                className="projects-git-link"
                to="https://blinkit-clones.netlify.app/"
                target="_blank"
                rel="noreferre noopener"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
                Live
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
