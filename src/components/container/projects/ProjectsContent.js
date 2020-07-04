import React from "react";
import "./ProjectsContent.scss";

function ProjectsContent(props) {
  return (
    <div className="projects-content-showcase">
      <img
        rel="preload"
        className="projects-content-showcase-img"
        src={props.projectImg}
        alt={props.altName}
      />
      <div className="projects-content-showcase-btns">
        {props.preview && (
          <a
            href={props.preview}
            className="btn projects-content-showcase-btns-preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            preview
          </a>
        )}
        {props.github && (
          <a
            href={props.github}
            className="btn projects-content-showcase-btns-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectsContent;
