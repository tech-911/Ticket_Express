import React from "react";
import Landing from "./pages/landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="app_wrapper">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
