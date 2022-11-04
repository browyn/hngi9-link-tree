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
              <InputField
                id="first_name"
                label="First name"
                type="text"
                placeholder="Enter your first name"
              />
              <InputField
                id="last_name"
                label="Last name"
                type="text"
                placeholder="Enter your last name"
              />
            </div>

            {/* Email */}
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="yourname@gmail.com"
            />

            {/* Textarea */}
            <div className="link-tree-inputGroup textarea">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="link-tree-inputTextarea"
                placeholder="Send me a message and I'll reply you as soon as possible..."
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
                <span>
                  You agree to providing your data to Browyn Louis who may
                  contact you.
                </span>
              </label>
            </div>

            <Button type="submit" text="Send message" id="btn__submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
