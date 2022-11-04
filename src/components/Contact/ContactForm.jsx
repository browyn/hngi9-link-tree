import React, { useEffect, useState } from "react";

import InputField from "../InputField";
import Button from "../Button";
import Modal from "../Modal";

const ContactForm = () => {
  const [submit, setSubmit] = useState();
  const [modal, setModal] = useState();
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    message: "",
    email: "",
  });
  const [touched, setTouched] = useState({});

  const validation = (values) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = "Please the first name field is Required";
    }

    if (!values.last_name) {
      errors.last_name = "Please the last name field is required";
    }

    if (!values.email) {
      errors.email = "Your email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Please enter a valid email address";
    }

    if (!values.message) {
      errors.message = "Please enter a message";
    } else if (values.message.length < 30) {
      errors.message = "Please enter at least 30 characters";
    }
    setErrors(errors);
  };

  useEffect(() => {
    validation(formData);
  }, [formData, touched]);

  const handleSubmit = (e, values) => {
    e.preventDefault();
    setSubmit(true);
    validation(values);
    if (!errors) {
      setModal(true);
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleBlur = (e) => {
    setTouched((prevState) => ({
      ...prevState,
      [e.target.id]: true,
    }));
  };

  const { first_name, last_name, email } = formData;

  return (
    <>
      <div className="link-tree-contactForm-container">
        <div className="link-tree-contactForm-content">
          <form
            onSubmit={(e) => handleSubmit(e, formData)}
            className="link-tree-contactForm"
          >
            {/* Names */}
            <div className="link-tree-inputGroup">
              <InputField
                id="first_name"
                label="First name"
                type="text"
                placeholder="Enter your first name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                className={
                  (errors.first_name && touched.first_name && "error") ||
                  (submit && errors.first_name && "error")
                }
                helperText={
                  (errors.first_name &&
                    touched.first_name &&
                    errors.first_name) ||
                  (submit && errors.first_name)
                }
                value={first_name}
              />
              <InputField
                id="last_name"
                label="Last name"
                type="text"
                placeholder="Enter your last name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                className={
                  (errors.last_name && touched.last_name && "error") ||
                  (submit && errors.last_name && "error")
                }
                helperText={
                  (errors.last_name && touched.last_name && errors.last_name) ||
                  (submit && errors.last_name)
                }
                value={last_name}
              />
            </div>

            {/* Email */}
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="yourname@gmail.com"
              handleChange={handleChange}
              handleBlur={handleBlur}
              className={
                (errors.email && touched.email && "error") ||
                (submit && errors.email && "error")
              }
              helperText={
                (errors.email && touched.email && errors.email) ||
                (submit && errors.email)
              }
              value={email}
            />

            {/* Textarea */}
            <div className="link-tree-inputGroup textarea">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  (errors.message && touched.message && "error") ||
                  (submit && errors.message && "error")
                }
              ></textarea>
              {(errors.message && touched.message && (
                <span className="link-tree-input-helperText">
                  {errors.message}
                </span>
              )) ||
                (submit && errors.message && (
                  <span className="link-tree-input-helperText">
                    {errors.message}
                  </span>
                ))}
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
      {modal && <Modal title="Form Submitted" />}
    </>
  );
};

export default ContactForm;
