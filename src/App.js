import React from "react";
import Landing from "./pages/landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import PageNotFound from "./pages/error/NotFound";
import CommingSoon from "./pages/error/construction";
const App = () => {
  return (
    <div className="app_wrapper">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/comming" element={<CommingSoon />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
