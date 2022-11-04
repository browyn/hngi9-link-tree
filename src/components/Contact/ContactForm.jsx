import React from "react";

import InputField from "../InputField";
import Button from "../Button";

const ContactForm = () => {
  return (
    <>
      <div className="link-tree-contactForm-container">
        <div className="link-tree-contactForm-content">
          <form action="" className="link-tree-contactForm">
            {/* Names */}
            <div className="link-tree-inputGroup">
              <InputField id="first_name" label="First name" />
              <InputField id="last_name" label="Last name" />
            </div>

            {/* Email */}
            <InputField id="email" label="Email" />

            {/* Textarea */}
            <div className="link-tree-inputGroup textarea">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="link-tree-inputTextarea"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="link-tree-inputGroup checkbox">
              <label htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="link-tree-inputCheckbox"
                />
                You agree to providing your data to Browyn Louis who may contact
                you.
              </label>
            </div>

            <Button type="submit" text="Submit" id="btn__submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
