import React from "react";

import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  const scrollTopRef = React.useRef();

  React.useEffect(() => {
    if (scrollTopRef.current)
      scrollTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="link-tree-contactContainer" ref={scrollTopRef}>
        <div className="link-tree-contactContainer-content">
          <ContactHeader />
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
