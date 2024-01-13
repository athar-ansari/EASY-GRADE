import React, { useState } from "react";
import { motion } from "framer-motion"; // import framer motion
import imgwave from "../../../Static/Images/waving-hand.png"; // adding picture for Pofile Card Background
import "./../ProfileCard/ProfileCard.css";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <motion.div
      className="profile-card"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="card">
        <div className="card-inner">
          <div className="front">
            <h2>Athar</h2>
            <p>Developer, India</p>
            <button className="front-btnn">Hover me</button>
          </div>
          <div className="back">
            <img src={imgwave} alt="" />
            <h1>
              Athar
              <br />
              <span>Ansari</span>
            </h1>
            <p>
              I'm a Front-End developer Pursuing <span>B.tech</span> Engineering.
            </p>
            <div className="row">
              <div className="col">
                <h2>4.5k</h2>
                <p>Followers</p>
              </div>
              <div className="col">
                <h2>30</h2>
                <p>Following</p>
              </div>
              <div className="col">
                <h2>2k</h2>
                <p>Likes</p>
              </div>
            </div>
            <div className="row">
              <Link
                to="https://www.instagram.com/__athar__ansari__/"
                target="_blank"
              >
                <button className="follow-btn">Follow</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
