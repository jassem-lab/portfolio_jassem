import React from "react";
import "./EducationContent.scss";

function EducationContent(props) {
  return (
    <div className="education-content-info">
      <div className="education-content-info-box">
        <h4 className="para-1 education-content-info-box-edu">{props.education}</h4>
        <div className="education-content-info-box-dash"></div>
        <p className="para-3 education-content-info-box-college">{props.college}</p>
        <p className="para-3 education-content-info-box-year">{props.year}</p>
      </div>
      <span className="para-1 education-content-info-aggregate">{props.aggregate}</span>
    </div>
  );
}

export default EducationContent;
