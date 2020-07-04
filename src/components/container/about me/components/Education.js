import React from "react";
import './Education.scss';
import educationData from "./educationData";
import EducationContent from "./EducationContent";

function Education() {
  const data = educationData.map(prog => {
    return (
      <EducationContent
        key={prog.id}
        education={prog.education}
        college={prog.college}
        year={prog.year}
        aggregate={prog.aggregate}
      ></EducationContent>
    );
  });

  return (
    <div className="education">
      <h3 className="education-header">Education</h3>
      <div className="education-content box-container">{data}</div>
    </div>
  );
}

export default Education;
