import React from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function ProjectDispaly() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name} </h1>
      <img src={project.image} alt="" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <IconButton component={Link} to={project.link}>
        <GitHubIcon />
      </IconButton>
    </div>
  );
}

export default ProjectDispaly;
