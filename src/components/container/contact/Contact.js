import React from "react";
import "./Contact.scss";
import ContactInfo from "./ContactInfo";
import contactData from "./contactData";

function Contact() {

  const data = contactData.map(item=>{
    return(
      <ContactInfo key={item.contact} icons={item.icon} contacts={item.contact}></ContactInfo>
    )
  })

  return (
    <div id="contact">
      <div className="header-content">
        <h2 className="header-content-title">Contact Me</h2>
        <p className="para-3">
          There's still that part of me that wants to hold my head up, make eye
          contact and smile.
        </p>
      </div>
      <div className="contact-info box-container">
          {data}
      </div>
    </div>
  );
}
export default Contact;
