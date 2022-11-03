import React from "react";

import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  return (
    <>
      <div className="link-tree-contactContainer">
        <div className="link-tree-contactContainer-content">
          <ContactHeader />
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
