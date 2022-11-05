import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Modal = (info) => {
  return (
    <>
      <div className="link-tree-modal-container">
        <div className="link-tree-modal">
          <span className="material-symbols-outlined check-icon">check</span>
          {info.desc && (
            <span className="link-tree-modal-desc">{info.desc}</span>
          )}
          <Link to="/">
            <Button type="button" text="Back to Home" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Modal;
