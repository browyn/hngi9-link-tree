import React from "react";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <>
      {location.pathname === "/account" ? null : <Header />}
      <main>
        <div className="link-tree-pageContent" id="">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
