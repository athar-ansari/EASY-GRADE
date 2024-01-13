import "./App.css";
import Navbar from "./Components/FrontPage/NavBar/Navbar";
import Average from "./Components/Avg & SGPA/Average";
import Sgpa from "./Components/Avg & SGPA/Sgpa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/sgpa" element={<Sgpa />} />
          <Route path="/avg" element={<Average />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
