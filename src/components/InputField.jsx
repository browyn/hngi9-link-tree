import React from "react";

const InputField = ({
  id,
  type,
  label,
  placeholder,
  helperText,
  value,
  handleChange,
  handleBlur,
  className,
}) => {
  return (
    <>
      <div className="link-tree-inputContainer">
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          className={`link-tree-input ${className}`}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {helperText ? (
          <span className="link-tree-input-helperText">{helperText}</span>
        ) : null}
      </div>
    </>
  );
};

export default InputField;
