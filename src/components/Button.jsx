import React from "react";

const Button = ({ id, type, text, clickHandler }) => {
  return (
    <>
      <div className="link-tree-buttonContainer">
        <button
          type={type}
          onClick={clickHandler}
          id={id}
          className={`link-tree-button`}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
