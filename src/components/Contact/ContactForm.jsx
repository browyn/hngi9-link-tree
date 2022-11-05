import React from "react";

import InputField from "../InputField";
import Button from "../Button";
import Modal from "../Modal";

const ContactForm = () => {
  const [modal, setModal] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  // Validation function
  const handleValidation = (e, key, value) => {
    if (value.length === 0) {
      setErrors({
        ...errors,
        [key]: `The ${key.split("_").join(" ")} field is required`,
      });
    } else if (key === "email") {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        errors[key] = "Please enter a valid email address";
      else errors[key] = null;
    } else if (key === "message") {
      if (value.length < 30)
        errors[key] = "Message should be more than 30 characters";
      else errors[key] = null;
    } else {
      setErrors({
        ...errors,
        [key]: null,
      });
    }

    setFormData({
      ...formData,
      [key]: value,
    });
  };

  // Handles validation on change
  const handleChange = (e) => {
    let key = e.target.id;
    let value = e.target.value;

    handleValidation(formData, key, value);
    setFormData({ ...formData, [key]: value });
  };

  // Handles validation on blur
  const handleBlur = (e) => {
    let key = e.target.id;
    let value = e.target.value;

    handleValidation(formData, key, value);
  };

  // Checks for empty inputs, creates error if any and process submission if otherwise
  const handleSubmit = (e, formData) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value === "")) {
      const submitErrors = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value === "")
      );
      for (let key in submitErrors) {
        submitErrors[key] = `The ${key.split("_").join(" ")} field is required`;
      }
      setErrors(submitErrors);
    }

    if (
      !Object.values(formData).some((value) => value === "") &&
      Object.values(errors).every((value) => value === null)
    ) {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
      });

      setModal(true);
    }
  };

  const { first_name, last_name, email, message } = formData;

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
                helperText={errors.first_name && errors.first_name}
                className={errors.first_name && "error"}
                value={first_name}
              />
              <InputField
                id="last_name"
                label="Last name"
                type="text"
                placeholder="Enter your last name"
                handleChange={handleChange}
                handleBlur={handleBlur}
                helperText={errors.last_name && errors.last_name}
                className={errors.last_name && "error"}
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
              helperText={errors.email && errors.email}
              className={errors.email && "error"}
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
                className={errors.message && "error"}
                value={message}
              ></textarea>
              {errors.message && (
                <span className="link-tree-input-helperText">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Checkbox */}
            <div className="link-tree-inputGroup checkbox">
              <input
                type="checkbox"
                id="checkbox"
                className="link-tree-inputCheckbox"
                required
              />
              <label htmlFor="checkbox">
                <span className="text">
                  You agree to providing your data to Browyn Louis who may
                  contact you.
                </span>
              </label>
              {errors.checkbox && (
                <span className="link-tree-input-helperText">
                  {errors.checkbox}
                </span>
              )}
            </div>

            <Button type="submit" text="Send message" id="btn__submit" />
          </form>
        </div>
      </div>
      {modal && (
        <Modal
          title="Thank You!"
          desc="Your message has been sent successfully, I will get back to you via the email shortly."
          button={true}
          btnLink="/"
          btnText="Back to homepage"
        />
      )}
    </>
  );
};

export default ContactForm;
