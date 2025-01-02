/* eslint-disable react/prop-types */
import {
  RiCloseLine,
  RiMenu2Line,
  RiSunFill,
  RiMoonFill,
} from "@remixicon/react";
import { useState } from "react";

const Navbar = ({ handleTheme, theme }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <nav
      className={`flex flex-wrap justify-between items-center px-6 py-4 md:px-20 transition-colors duration-300 ${
        theme ? "text-black bg-gray-300" : "text-white bg-gray-900"
      }`}
    >
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Menu Icon for Mobile */}
      <div className="md:hidden z-20">
        {menu ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>

      {/* Popup Menu */}
      {menu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-start justify-end">
          <div
            className={`w-11/12 max-w-sm p-6 rounded-lg transition-colors duration-300 ${
              theme ? "bg-gray-200 text-black" : "bg-gray-800 text-white"
            } relative`}
          >
            <RiCloseLine
              size={30}
              className="absolute top-4 right-4 cursor-pointer"
              onClick={toggleMenu}
            />
            <ul className="flex flex-col gap-6 items-center">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a key={item} href={`#${item}`} onClick={toggleMenu}>
                  <li className="relative group text-md transition-all duration-300 p-2">
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full`}
                    ></span>
                  </li>
                </a>
              ))}
              <button
                className="text-md transition-all duration-300 p-2 hover:text-gray-400 flex items-center gap-2"
                onClick={handleTheme}
              >
                {theme ? (
                  <RiMoonFill color="yellow" />
                ) : (
                  <RiSunFill color="orange" />
                )}{" "}
                {theme ? "Dark" : "Light"}
              </button>
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a key={item} href={`#${item}`} className="relative group">
            <li className="text-md transition-all duration-300 p-2 hover:text-gray-400">
              {item}
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full`}
              ></span>
            </li>
          </a>
        ))}
        <button
          className="text-md transition-all duration-300 p-2 hover:text-gray-400 flex items-center gap-2"
          onClick={handleTheme}
        >
          {theme ? <RiMoonFill color="yellow" /> : <RiSunFill color="orange" />}{" "}
          {theme ? "Dark" : "Light"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
