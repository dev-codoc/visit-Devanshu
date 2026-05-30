import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] bg-gray-100 flex flex-col items-center justify-center shadow-lg">
      <img src="./flink.png" alt="profile" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" />
      <div className="text-2xl my-4">Hi, I'm Devanshu 👨‍🍳</div>
      <div className="text-4xl my-4 font-bold text-center">
        Building amazing web experiences <br /> with a focus on user experience
        <br /> and modern technologies
      </div>
      <div className="text-lg text-gray-600 my-4 text-center">
        A passionate <span className="font-bold">developer</span> creating
        amazing web experiences
      </div>
      <button className="bg-black hover:bg-gray-700 text-white rounded-full mt-10 px-4 py-2 transition duration-300">
        Contact Me
      </button>
    </div>
  );
};

export default Hero;
