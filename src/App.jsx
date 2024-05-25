import "./App.css";
import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import Average from "./Components/Avg & SGPA/Average";
import Sgpa from "./Components/Avg & SGPA/Sgpa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    let docTitle = document.title;

    const onBlur = () => {
      document.title = "Come Back";
    };

    const onFocus = () => {
      document.title = docTitle;
    };

    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sgpa" element={<Sgpa />} />
          <Route path="/average" element={<Average />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
