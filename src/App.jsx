import "./App.css";
import Home from "./Components/Home/Home";
import Average from "./Components/Avg & SGPA/Average";
import Sgpa from "./Components/Avg & SGPA/Sgpa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
