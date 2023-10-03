import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Emailcon from "@mui/icons-material/Email";
import "../styles/Home.css";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";

function Home() {
  const githubLink = "https://github.com/issalito";
  const LinkedInLink = "https://www.linkedin.com/in/issa-mhando-758523210/";
  const EmailLink = "mailto:issamhando@gmail.com";

  const handleDownload = () => {
    const resumePath = "../assets/resume.pdf";

    saveAs(resumePath, "issa_mhando_Resume.pdf");
  };

  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Issa</h2>
        <div className="prompt">
          <p>A Computer Engineer With a Passion of Learning and Creating.</p>
          <div>
            <IconButton
              variant="contained"
              color="secondary"
              onClick={handleDownload}
              style={{ color: "white" }}
            >
              Download Resume
            </IconButton>
          </div>
          <IconButton component={Link} to={githubLink}>
            <GitHubIcon />
          </IconButton>
          <IconButton component={Link} to={EmailLink}>
            <Emailcon />
          </IconButton>
          <IconButton component={Link} to={LinkedInLink}>
            <LinkedInIcon />
          </IconButton>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, NextJs, HTML, CSS, Tailwind, MaterialUI,
              styled-components, Bootstrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB, MySQL, PostgreSQL, RESTful API, OAuth,
              PassportJS
            </span>
          </li>
          <li className="item">
            <h2>Hardware</h2>
            <span>Arduino Programing, Hardware assembling</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              Javascript, TypeScript, Python, C, C++, Java, SQL, HTML, CSS, Bash
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
