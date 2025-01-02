/* eslint-disable react/prop-types */

import toast, { Toaster } from "react-hot-toast";

const ProjectCard = ({ title, main, image, demoLink, codeLink, theme }) => {
  const handleToast = (e) => {
    if (!demoLink) {
      e.preventDefault();
      toast.error("Demo Will Be Available Soon!", {
        style: {
          color: theme ? "black" : "white",
          background: theme ? "white" : "black",
        },
      });
    }
  };

  return (
    <>
      <Toaster />
      <div
        className={`p-3 md:p-5 h-auto flex flex-col w-80 shadow-xl rounded-2xl hover:border-2 duration-300 hover:scale-110 hover:border-[#465697] ${
          theme ? "bg-gray-200 text-black" : "bg-[#0c0e19] text-white"
        }`}
      >
        <img className="p-4" src={image} alt="Banner" />
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
        <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button
              onClick={handleToast}
              className={`md:mt-10 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-bold rounded-3xl duration-300 hover:scale-105 
               bg-[#465697] text-white`}
            >
              Demo
            </button>
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button
              className={`md:mt-10 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-bold rounded-3xl duration-300 hover:scale-105
              bg-[#465697] text-white`}
            >
              Source Code
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
