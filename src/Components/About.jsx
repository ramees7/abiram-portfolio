import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function About() {
  const { theme, textColor } = useContext(ThemeContext);

  return (
    <div
      className={`relative flex justify-center items-center group w-full h-full ${
        theme === "dark" ? "bg-[#222] text-white" : "bg-[#e7e7e7] text-black"
      } overflow-hidden`}
    >
      {/* Initial Text Container */}
      <div className="flex space-x-2 items-center ">
        <h1 className="lg:text-5xl text-3xl font-bold uppercase  transition-all duration-500 transform group-hover:-translate-y-full group-hover:opacity-0 ">
          <span>About</span>
        </h1>
        <h1
          className="lg:text-5xl text-3xl font-bold uppercase transition-all duration-500 transform group-hover:translate-y-full group-hover:opacity-0"
          style={{ color: textColor }}
        >
          <span>Me</span>
        </h1>
      </div>

      {/* Hovered Text Container */}
      <div className="absolute inset-0 flex justify-center items-center space-x-2">
        <h1
          className="lg:text-5xl text-3xl font-bold uppercase transition-all duration-500 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ color: theme === "dark" ? textColor : "black" }}
        >
          <span>About</span>
        </h1>
        <h1
          className="lg:text-5xl text-3xl font-bold uppercase transition-all duration-500 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          
        >
          <span>Me</span>
        </h1>
      </div>
    </div>
  );
}
