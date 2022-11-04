import React from "react";

const InputField = ({ id, type, label, placeholder, helperText }) => {
  return (
    <>
      <div className="link-tree-inputContainer">
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`link-tree-input`}
        />
        {helperText ? (
          <span className="link-tree-input-helperText">{helperText}</span>
        ) : null}
      </div>
    </>
  );
};

export default InputField;
