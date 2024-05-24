import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import maths from "../../Static/Images/maths.gif";
import { Link } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const Home = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };
  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const [isLoading, setIsLoading] = useState(
    () => !JSON.parse(sessionStorage.getItem("visitedBefore")) || false
  );
  useEffect(() => {
    sessionStorage.setItem("visitedBefore", JSON.stringify(true));
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className="bg-white ">
            {/* NAVBAR */}
            <div className="navbar flex justify-between items-center">
              <div className="nav-tex  h-14 w-48 ml-10 mt-5  font-semibold text-4xl xs:ml-5  xs:text-3xl">
                <motion.h1
                  initial={{ y: -250 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 50, duration: 2.0 }}
                  style={{ fontFamily: '"Alex Brush", cursive, sans-serif' }}
                >
                  EasyGrade
                </motion.h1>
              </div>
              <motion.div
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 50, duration: 2.0 }}
                className="logo mr-10 mt-5 xs:mr-6 xs:mt-0"
              >
                <img className="w-[50px] xs:w-[42px]" src={maths} />
              </motion.div>
            </div>

            <div className="relative isolate px-6 pt-14 lg:px-8 xs:pt-0">
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              {/* CONTENT */}
              <div className="mx-auto max-w-2xl mt-10 xs:mt-5">
                <div className="text-center">
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 xs:text-3xl">
                    Hi, I'm {""}
                    <span className="txt text-5xl xs:text-3xl">
                      <Typewriter
                        words={["Athar", "Programmer", "Devloper", "Designer"]}
                        loop={true}
                        typeSpeed={250}
                        deleteSpeed={150}
                        delaySpeed={1000}
                      />
                    </span>
                  </h1>
                  <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className="mt-6 text-lg leading-8 text-black"
                  >
                    Our website makes it easy for{" "}
                    <b>MAKAUT University Students</b> to figure out their
                    Semester exam percentages. It has two buttons <b>: </b>
                    One gives you the Percentage for one semester using your
                    SGPA, and the other finds the Average Percentage for two
                    semesters using the SGPAs you give. Exclusively designed for{" "}
                    <b>MAKAUT University Students</b>.
                  </motion.p>
                  <div className="mt-10 flex items-center justify-center gap-x-6 tracking-widest xs:mt-8">
                    <motion.div
                      variants={buttonVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to="/sgpa"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        SGPA %
                      </Link>
                    </motion.div>
                    <motion.div
                      variants={buttonVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to="/average"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Average
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
              <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
