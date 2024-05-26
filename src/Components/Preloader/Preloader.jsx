import React, { useState } from "react";
import maths from "../../Static/Images/maths.gif";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Preloader = () => {
  const [completion, setCompletion] = useState("");
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2.5 } },
  };
  return (
    <>
      <div
        className="preloader"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="content flex flex-col justify-center items-center">
          <div className="logo mb-14 xs:mb-10">
            <motion.img
              className="w-[120px] xs:w-[100px]"
              src={maths}
              initial={{ scale: 0, opacity: 0, z: -100 }}
              animate={{ scale: 1, opacity: 1, z: 0 }}
              transition={{ type: "tween", duration: 2 }}
            />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="text-center max-w-xl xs:max-w-sm xs:p-4 text-black font-sans italic "
          >
            <Typewriter
              words={[
                'Our Website Simplifies Semester Exam Percentage Calculations for "MAKAUT University Students".',
              ]}
              loop={false}
              typeSpeed={20}
              deleteSpeed={3000}
              delaySpeed={0.1}
              onTypingComplete={() => setCompletion("100%")}
            />
          </motion.div>
          <div className="intern">{completion}</div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
