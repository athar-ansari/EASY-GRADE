import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./../BottomNavigation/BottomNavigation.css";
// FontAwesome Icons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faPercent,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [navigateTo, setNavigateTo] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const listItems = [
    { text: "Home", icon: faHome, path: "/" },
    { text: "SGPA", icon: faCalculator, path: "/sgpa" },
    { text: "YEARLY", icon: faPercent, path: "/avg" },
  ];

  useEffect(() => {
    const currentIndex = listItems.findIndex(
      (item) => item.path === location.pathname
    );
    setActiveIndex(currentIndex);
  }, [location.pathname, listItems]);

  const handleClick = (index, path) => {
    setActiveIndex(index);
    setTimeout(() => {
      setNavigateTo(path);
    }, 500); // delay of 500ms
  };

  if (navigateTo && navigateTo !== location.pathname) {
    navigate(navigateTo);
  }

  return (
    <>
      <motion.div
        className="navigation"
        initial={{ y: 100 }} // start from below
        animate={{ y: 0 }} // end at its original position
        transition={{ type: "spring", stiffness: 50 }} // animation transition
      >
        <ul>
          {listItems.map((item, index) => (
            <li
              key={index}
              className={index === activeIndex ? "list active" : "list"}
              onClick={() => handleClick(index, item.path)}
            >
              <button className="ab">
                <span className="icon">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="text">{item.text}</span>
              </button>
            </li>
          ))}
          <div className="indicator"></div>
        </ul>
      </motion.div>
    </>
  );
};

export default BottomNavigation;
