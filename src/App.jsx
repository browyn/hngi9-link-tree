import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default App;
