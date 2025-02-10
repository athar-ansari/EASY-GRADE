import React, { useState } from "react";
import "./Css/Avg-Sgpa.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sgpa = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    // Ensure that number are not empty before performing addition
    if (number !== "") {
      const sum = ((number - 0.75) * 10).toFixed(2);
      setResult(`${sum} %`);
    } else {
      // Handle the case where one or both of the numbers are empty
      alert("Please enter valid no.");
    }
  };

  return (
    <section className="main">
      <motion.div
        className="form-box"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <div className="form-value">
          <form action="">
            <h2>PERCENTAGE</h2>
            <div className="inputbox">
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
              <label>ENTER SGPA</label>
            </div>
            <button className="rslt" type="button" onClick={handleSubmit}>
              RESULT : {typeof result === "number" ? result : result}
            </button>
          </form>
          <Link to="/">
            <button className="bck">Back to Home</button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Sgpa;
