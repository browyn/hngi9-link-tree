import React from "react";

import i4gLogo from "../../assets/images/I4G.svg";

const Footer = () => {
  return (
    <footer>
      <div className="link-tree-footer">
        <div className="link-tree-footer-content">
          <div className="zuriLogo">
            <h2>
              Zuri <span></span> Internship
            </h2>
          </div>

          <div className="attribution">
            <p>HNG Internship 9 Frontend Task</p>
          </div>

          <div className="i4gLogo">
            <img src={i4gLogo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
