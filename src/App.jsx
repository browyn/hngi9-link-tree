import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { Home, Contact } from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
