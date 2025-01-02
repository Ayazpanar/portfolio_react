/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TextChanger from "../../TextChanger";
import myImage from "../../assets/a.jpg";
import myResume from "../../assets/AyazResume.pdf";
import toast, { Toaster } from "react-hot-toast";

const Home = ({ theme }) => {
  const handleToast = () => {
    toast.success("Resume Downloading" , { style: { background: theme ? "white" : "black", color: theme ? "black" : "white" } });
  };

  return (
    <div
      id="Home"
      className={`flex flex-wrap justify-between items-center p-10 md:p-20 ${
        theme ? "text-black bg-white" : "text-white bg-[#171d32]"
      }`}
    >
      <Toaster />
      {/* Text Section */}
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p className="mt-4 text-sm md:text-2xl tracking-tight">
          Equipped with a 5-year master degree in computer applications and IT,
          I bring proficiency in modern web technologies including JavaScript,
          ReactJS, NodeJS, and more.
        </p>
        <a href={myResume} download="AyazResume">
          <button
            onClick={handleToast}
            className={`mt-5 md:mt-10 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl duration-300 hover:scale-105
              text-white bg-[#465697] hover:border-[#465697] hover:border-4`}
          >
            Download CV
          </button>
        </a>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 mt-10 md:mt-0">
        
          {/* Image */}
          <img
            className="relative w-96 h-96 md:w-[30rem] md:h-[30rem] object-cover rounded-full border-4 border-[#465697] shadow-2xl hover:shadow-[#465697] hover:shadow-lg transition-shadow duration-300"
            src={myImage}
            alt="Ayaz Panar"
          />
        </div>
      
    </div>
  );
};

export default Home;
