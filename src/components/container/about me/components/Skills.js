import React from "react";
import "./Skills.scss";
import skillData from "./skillData";
import SkillsContent from "./SkillsContent";

function Skills() {
  const data = skillData.map(prog => {
    return (
      <SkillsContent
        key={prog.skill}
        skill={prog.skill}
        progress={prog.progress}
      ></SkillsContent>
    );
  });

  return (
    <div className="skills">
      <h3 className="skills-header">Skills</h3>
      <div className="skills-content box-container">{data}</div>
    </div>
  );
}

export default Skills;
