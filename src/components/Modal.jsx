import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Modal = (info) => {
  return (
    <>
      <div className="link-tree-modal-container">
        <div className="link-tree-modal">
          <span className="material-symbols-outlined check-icon">check</span>
          {info.title && (
            <p>
              <strong>{info.title}</strong>
            </p>
          )}
          {info.desc && (
            <span className="link-tree-modal-desc">{info.desc}</span>
          )}
          {info.button && (
            <Link to={info.btnLink ? info.btnLink : "#"}>
              <Button
                type={info.btnType ? info.btnType : "button"}
                text={info.btnText}
                clickHandler={info.clickHandler}
                id={info.id}
              />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
