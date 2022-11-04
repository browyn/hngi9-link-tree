import React from "react";

const Modal = (info) => {
  return (
    <>
      <div className="link-tree-modal-container">
        <div className="link-tree-modal">
          <span
            className="material-symbols-outlined"
            onClick={() => info.setModal(false)}
          >
            close
          </span>
          {info.title && <h2>{info.title}</h2>}
          {info.desc && <span>{info.desc}</span>}
        </div>
      </div>
    </>
  );
};

export default Modal;
