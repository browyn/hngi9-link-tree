import React from "react";
import { info } from "sass";

const Modal = (info) => {
  return (
    <>
      <div className="link-tree-modal-container">
        <div className="link-tree-modal">
          {info.title && <h2>{info.title}</h2>}
          {info.desc && <span>{info.desc}</span>}
        </div>
      </div>
    </>
  );
};

export default Modal;
