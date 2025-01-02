/* eslint-disable react/prop-types */
import { MdOutlineEmail } from "react-icons/md";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

const Footer = ({ theme }) => {
  return (
    <>
      <div
        id="Footer"
        className={`flex justify-around gap-14 p-10 md:p-12 items-center ${
          theme
            ? "bg-gray-200 text-black"
            : "bg-[#39467b] bg-opacity-35 text-white"
        }`}
      >
        <div>
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal">
            Feel Free to Reach Out!!!
          </h3>
        </div>
        <div>
          <ul className="text-sm md:text-xl">
            <a href="mailto:ayazpanar0786@gmail.com">
              <li className="flex gap-2 items-center mb-2">
                <MdOutlineEmail size={27} />
                Ayazpanar0786@gmail.com
              </li>
            </a>
            <a
              href="http://wa.me/+919909130787"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="flex gap-2 items-center mb-2">
                <SiWhatsapp size={27} />
                +91 9909130787
              </li>
            </a>
            <a
              href="https://linkedin.com/in/ayazpanar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="flex gap-2 items-center mb-2">
                <SiLinkedin size={27} />
                LinkedIn.com/ayazpanar
              </li>
            </a>
            <a
              href="https://github.com/ayazpanar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="flex gap-2 items-center mb-2">
                <SiGithub size={27} />
                Github.com/ayazpanar
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
