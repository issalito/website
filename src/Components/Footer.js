import React from "react";
//import InstagramIcon from "@mui/icons-material/Instagram";
//import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Emailcon from "@mui/icons-material/Email";
import "../styles/Footer.css";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  const githubLink = "https://github.com/issalito";
  const LinkedInLink = "https://www.linkedin.com/in/issa-mhando-758523210/";
  const EmailLink = "mailto:issamhando@gmail.com";
  const phoneNumber = "+255 788 719 867";

  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p>
        Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </p>
      <p> &copy; 2023 issalito</p>
    </div>
  );
}

export default Footer;
