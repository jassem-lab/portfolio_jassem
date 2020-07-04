import React from "react";
import "./ContactInfo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactInfo(props) {
  return (
    <div className="contact-info-content">
      <p className="contact-info-content-icon">
        <FontAwesomeIcon icon={props.icons} />
      </p>
      <p className="para-1 contact-info-content-personal-contact">
        {props.contacts}
      </p>
    </div>
  );
}

export default ContactInfo;
