import { React, useState, useEffect } from "react";
import { motion } from "framer-motion"; // import framer motion
import "./../NavBar/Navbar.css";
// react-icons import (https://react-icons.github.io/react-icons/)
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import Home from "./../Home/Home";
import ProfileCard from "../ProfileCard/ProfileCard";
import BottomNavigation from "../../BottomNavigation/BottomNavigation";
import Preloader from "../PreLoader/Preloader";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const [isLoading, setIsLoading] = useState(
    () => !JSON.parse(sessionStorage.getItem("visitedBefore")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    sessionStorage.setItem("visitedBefore", JSON.stringify(true));
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [darkMode]);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className={darkMode ? "dark" : "light"}>
          <div className="nav-bar">
            <div className="nav-text">
              <motion.h1
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 50, duration: 2.0 }}
              >
                EasyGrade
              </motion.h1>
            </div>
            <div className="theme" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <motion.div
                  initial={{ y: -250 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  <FiSun className="theme-icon" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ y: -250 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  <BsFillMoonStarsFill className="theme-icon" />
                </motion.div>
              )}
            </div>
          </div>

          {/* ================ HOME ================ */}

          <div className="home">
            <Home />
            {/* ================ PROFILE CARD ================ */}

            <ProfileCard />
          </div>
          {/* ================ BoNavigation ================ */}

          <BottomNavigation />
        </section>
      )}
    </>
  );
};

export default Navbar;
