/* eslint-disable react/prop-types */
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaSchool,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaGraduationCap as FaCollage } from "react-icons/fa6";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiJquery,
  SiBootstrap,
  SiGithub,
  SiGit,
  SiJest,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skils = ({ theme }) => {
  const skills = [
    { icon: <FaHtml5 color="#E34F26" size={50} />, label: "HTML" },
    { icon: <FaCss3 color="#1572b6" size={50} />, label: "CSS" },
    { icon: <FaJs color="yellow" size={50} />, label: "JavaScript" },
    {
      icon: <RiNextjsFill color={theme ? "#000000" : "#ffffff"} size={50} />,
      label: "Next.js",
    },
    { icon: <SiTypescript color="#007ACC" size={50} />, label: "TypeScript" },
    { icon: <FaReact color="#61DBFB" size={50} />, label: "React" },
    { icon: <FaNode color="green" size={50} />, label: "Node" },
    { icon: <SiExpress color="yellow" size={50} />, label: "Express" },
    { icon: <SiMongodb color="green" size={50} />, label: "MongoDB" },
    { icon: <SiMysql color="orange" size={50} />, label: "MySQL" },
    { icon: <SiBootstrap color="purple" size={50} />, label: "Bootstrap" },
    { icon: <SiTailwindcss color="#38B2AC" size={50} />, label: "Tailwind" },
    { icon: <SiJquery color="#0769AD" size={50} />, label: "jQuery" },
    { icon: <SiJest color="#99415B" size={50} />, label: "Jest" },
    { icon: <SiGit color="orange" size={50} />, label: "Git" },
    {
      icon: <SiGithub color={theme ? "#000000" : "#ffffff"} size={50} />,
      label: "GitHub",
    },
    { icon: <VscVscode color="#007ACC" size={50} />, label: "VSCode" },
  ];

  const education = [
    {
      icon: <FaSchool size={40} color={`${theme ? "black" : "white"}`} />,
      title: "SSC - The New Era High School, Patan",
      details: "Percentage: 54%",
    },
    {
      icon: <FaSchool size={40} color={`${theme ? "black" : "white"}`} />,
      title: "HSC - Aashish Vidhyalaya, Patan",
      details: "Percentage: 73%",
    },
    {
      icon: <FaCollage size={40} color={`${theme ? "black" : "white"}`} />,
      title: "BSc (CA & IT) - Hemchandracharya North Gujarat University, Patan",
      details: "CGPA: 7.8",
    },
    {
      icon: <FaCollage size={40} color={`${theme ? "black" : "white"}`} />,
      title: "MSc (CA & IT) - Hemchandracharya North Gujarat University, Patan",
      details: "Pursuing",
    },
  ];

  return (
    <div
      id="Skills"
      className={`p-10 md:p-24 flex flex-col items-center transition-colors duration-300 ${
        theme ? "bg-white text-black" : "bg-[#171d32] text-white"
      }`}
    >
      {/* Skills Section */}
      <h1 className="text-2xl md:text-4xl font-bold mb-10">Skills</h1>
      <div className="flex flex-wrap gap-5 md:w-3/5 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`p-3 flex flex-col items-center rounded-2xl ${
              theme ? "bg-gray-200 text-black" : "bg-zinc-950 text-white"
            }`}
          >
            {skill.icon}
            <span className="mt-2 text-center">{skill.label}</span>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <h1 className="text-2xl md:text-4xl font-bold mt-20">Education</h1>
      <div
        className={`flex flex-col gap-10 mt-12 md:w-3/5 w-full rounded-lg p-6 ${
          theme ? "bg-gray-100 text-black" : "bg-slate-950 text-white"
        }`}
      >
        {education.map((edu, index) => (
          <div key={index} className="flex items-start gap-8">
            <div style={{ minWidth: "30px" }}>{edu.icon}</div>
            <div>
              <h2 className="leading-tight font-semibold">{edu.title}</h2>
              <p className="text-sm leading-tight font-thin">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skils;
