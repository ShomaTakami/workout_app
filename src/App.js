import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppPage from "./AppPage";

import "./App.css";

const App = props => {
  return (
    <BrowserRouter>
      <AppPage />
    </BrowserRouter>
  );
};

export default App;
