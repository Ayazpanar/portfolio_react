/* eslint-disable react/prop-types */
import { IoArrowForward } from "react-icons/io5";
import aboutImg from "../../assets/about.jpg";

const About = ({ theme }) => {
  return (
    <div
      id="About"
      className={`md:flex md:justify-center md:items-center overflow-hidden items-center md:flex-wrap shadow-xl mx-0 md:mx-20 rounded-lg p-8 md:p-12 transition-colors duration-300 ${
        theme ? "text-black bg-gray-300" : "text-white bg-black bg-opacity-30"
      }`}
    >
      <div className="flex flex-col items-center md:items-start md:w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-6">
          About
        </h2>
        <p className="text-lg md:text-2xl mb-6 text-center md:text-left">
          I am a passionate software developer specializing in creating responsive and scalable web applications.
        </p>
        <div className="md:flex flex-wrap md:flex-row items-center justify-center md:justify-start w-full">
          <img
            className={`w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 ${theme?" border-zinc-950":"border-gray-300" } mb-6 md:mb-0 mx-auto`}
            src={aboutImg}
            alt="AboutImage"
          />
          <ul className="w-full md:w-1/2 md:ml-6">
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full md:w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  FrontEnd Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Experienced in building modern and responsive user interfaces using React, HTML, CSS, and JavaScript.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-full md:w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  BackEnd Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Knowledgeable in backend technologies such as Node.js, Express, and MongoDB to build robust web applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
