import React from "react";
import "./../Home/Home.css";
import { Typewriter } from "react-simple-typewriter"; // auto typing effect in Home page
import { motion } from "framer-motion"; // import framer motion
// FontAwesome Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercent } from "@fortawesome/free-solid-svg-icons";
// react-icons import (https://react-icons.github.io/react-icons/)
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <motion.div
        className="home-text"
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, duration: 2.0 }}
      >
        <h1>
          Hi, I'm {""}
          <span className="txt">
            <Typewriter
              words={["Athar", "Programmer", "Devloper", "Designer"]}
              loop={true}
              typeSpeed={250}
              deleteSpeed={150}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p>
          Our website makes it easy for <b>MAKAUT University Students</b> to
          figure out their Semester exam percentages. It has two buttons{" "}
          <b>: </b>
          One gives you the Percentage for one semester using your SGPA, and the
          other finds the Average Percentage for two semesters using the SGPAs
          you give. Exclusively designed for <b>MAKAUT University Students</b>.
        </p>

        <div className="btn">
          <div className="btn1">
            <Link to="/sgpa">
              <button className="butn">
                SGPA <FontAwesomeIcon icon={faPercent} />
              </button>
            </Link>
          </div>
          <div className="btn2">
            <Link to="/avg">
              <button className="butn">
                Yearly <FontAwesomeIcon icon={faPercent} />
              </button>
            </Link>
          </div>
        </div>

        {/* ================ Social Link ================ */}

        <div className="social">
          <Link to="https://www.linkedin.com/in/athar--ansari/" target="_blank">
            <p>
              <FaLinkedinIn className="linkedin" />
            </p>
          </Link>
          <Link to="https://twitter.com/athar__ansari" target="_blank">
            <p>
              <GrTwitter className="twitter" />
            </p>
          </Link>
          <Link
            to="https://www.facebook.com/mdathar.ansari.547/"
            target="_blank"
          >
            <p>
              <FaFacebookF className="facebook" />
            </p>
          </Link>
          <Link to="https://github.com/athar-ansari" target="_blank">
            <p>
              <AiOutlineGithub className="github" />
            </p>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
