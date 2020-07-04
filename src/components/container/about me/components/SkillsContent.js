import React from "react";
import "./SkillsContent.scss";

function SkillsContent(props) {
  const skillBarStyles = {
    width: props.progress,
  };
  return (
    <>
      <div className="skills-content-info">
        <p className="para-1 skills-content-info-skill">{props.skill}</p>
        {/* <p className="para-3 skills-content-info-progress">{props.progress}</p> */}
      </div>
      <div className="skills-content-bar">
        <div className="skills-content-bar-value" style={skillBarStyles}></div>
      </div>
    </>
  );
}

export default SkillsContent;
