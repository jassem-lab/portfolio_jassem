import React, { useState , useEffect } from "react";
import "./Projects.scss";
import ProjectsContent from "./ProjectsContent";
import database from './api' ; 





function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    database
    .collection('projects')
    .onSnapshot(snapshot=>(
        setProjects(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])



  return (
    <div className="header-content">
    
      <div className="projects" id="projects">
      <h2 className="header-content-title">My Projects </h2>

      {projects.map(project=>(
      <div>
      <h2 className="project__name">- {project.altName} : </h2>
      <div className="projects-list">
        
      <ProjectsContent
      className="projects-content"
      key={project.altName}
      projectImg={project.projectImg}
      altName={project.altName}
      preview={project.preview}
      github={project.github}
      />
     
      </div>
      </div>
      ))} 
      </div>
      </div>
      );


    }
  // const setActiveList = (name) => {
  //   const newState = projects.map((item) => {
  //     if (item.listName === name) item.listActive = true;
  //     else item.listActive = false;
  //     return item;
  //   });
  //   // setProjectList(newState);
  // };

  // const listProject = (p) => {
  //   if (p.listName === "All") {
  //     // setProjects(projectData);
  //     // setActiveList(p.listName);
  //     return;
  //   }
  //   const newState = projects.filter((data) => data.lang === p.listName);
  //   setProjects(newState);
  //   setActiveList(p.listName);
  // };

  // const projectLists = projectList.map((p, i) => {
  //   return (
  //     <p
  //       key={i}
  //       className={
  //         p.listActive ? "projects-list-link active-list" : "projects-list-link"
  //       }
  //       onClick={() => listProject(p)}
  //     >
  //       {p.listName}
  //     </p>
  //   );
  // });

  // return (
  //   <div id="projects">
  //     <div className="header-content">
  //       <h2 className="header-content-title">Projects</h2>
  //     </div>
  //     <div className="projects-list">{projectLists}</div>
  //     <div className="projects-content">{data}</div>
  //   </div>
  // );


export default Projects;
