import React, { useState } from "react";
import "./Projects.scss";
import { projectData, projectListData } from "./projectData";
import ProjectsContent from "./ProjectsContent";

function Projects() {
  const [projects, setProjects] = useState(projectData);
  const [projectList, setProjectList] = useState(projectListData);

  React.useEffect(() => {
    setActiveList("All");
  }, []);

  const data =
    projects &&
    projects.map((item) => {
      return (
        <ProjectsContent
          key={item.altName}
          projectImg={item.projectImg}
          altName={item.altName}
          preview={item.preview}
          github={item.github}
        ></ProjectsContent>
      );
    });

  const setActiveList = (name) => {
    const newState = projectList.map((item) => {
      if (item.listName === name) item.listActive = true;
      else item.listActive = false;
      return item;
    });
    setProjectList(newState);
  };

  const listProject = (p) => {
    if (p.listName === "All") {
      setProjects(projectData);
      setActiveList(p.listName);
      return;
    }
    const newState = projectData.filter((data) => data.lang === p.listName);
    setProjects(newState);
    setActiveList(p.listName);
  };

  const projectLists = projectList.map((p, i) => {
    return (
      <p
        key={i}
        className={
          p.listActive ? "projects-list-link active-list" : "projects-list-link"
        }
        onClick={() => listProject(p)}
      >
        {p.listName}
      </p>
    );
  });

  return (
    <div id="projects">
      <div className="header-content">
        <h2 className="header-content-title">Projects</h2>
      </div>
      <div className="projects-list">{projectLists}</div>
      <div className="projects-content">{data}</div>
    </div>
  );
}

export default Projects;
