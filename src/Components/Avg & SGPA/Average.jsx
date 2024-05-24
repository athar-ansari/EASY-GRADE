import React, { useState } from "react";
import "./Css/Avg-Sgpa.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Average = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    // Ensure that number1 and number2 are not empty before performing addition
    if (number1 !== "" && number2 !== "") {
      const adding = (parseFloat(number1) + parseFloat(number2)) / 2;
      const sum = (adding - 0.75) * 10;
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
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <div className="form-value">
          <form action="">
            <h2>
              AVERAGE<br></br>PERCENTAGE
            </h2>
            <div className="inputbox">
              <input
                type="text"
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
                required
              />
              <label>Enter ODD Semester SGPA</label>
            </div>
            <div className="inputbox">
              <input
                type="text"
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
                required
              />
              <label>Enter EVEN Semester SGPA</label>
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

export default Average;
