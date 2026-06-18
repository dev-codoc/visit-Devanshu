import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center shadow-lg relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="./bgvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.img
          src={isHovering ? "./normal.png" : "./flink.png"}
          alt="profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="text-2xl my-4 text-white">Hi, I'm Devanshu 👨‍🍳</div>
        <div className="text-4xl my-4 font-bold text-center text-white">
          Building amazing web experiences <br /> with a focus on user experience
          <br /> and modern technologies
        </div>
        <div className="text-lg text-gray-200 my-4 text-center">
          A passionate <span className="font-bold">developer</span> creating
          amazing web experiences
        </div>
        <button className="bg-black hover:bg-gray-700 text-white rounded-full mt-10 px-4 py-2 transition duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
