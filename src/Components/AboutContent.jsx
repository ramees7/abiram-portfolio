import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { ImProfile } from "react-icons/im";
import { FaFilePdf, FaRegEdit, FaUserAlt } from "react-icons/fa";
import Resume from "./Resume";

export default function AboutContent() {
  const { theme, textColor } = useContext(ThemeContext);

  return (
    <div className="bg-[#222] text-white p-8 md:px-10 relative h-full">
      <div className="border-b pb-10 border-b-gray-500">
        <h2
          className="text-4xl font-bold text-center mb-8 uppercase"
          
        >
          ABOUT <span style={{ color: textColor }}>ME</span>
        </h2>

        <div
          className="flex justify-center items-center mb-6"
          style={{ color: textColor }}
        >
          <span className="border-t-2  w-[40%] "></span>
          <ImProfile className="text-2xl mx-6 " />
          <span className="border-t-2  w-[40%] "></span>
        </div>
        <div className="flex items-center gap-2 font-semibold text-xl uppercase mb-3">
          <FaUserAlt />
          <h1>Personal Info</h1>
        </div>
        <p className=" text-start mb-8">
          I'm a Freelance Web Designer & Developer based in Moscow, Russia. I
          have a serious passion for UI effects, animations, and creating
          intuitive experiences, with over a decade of experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2 font-light">
            <p>
              <span className="font-semibold">First Name :</span> Linda
            </p>
            <p>
              <span className="font-semibold">Last Name :</span> Smith
            </p>
            <p>
              <span className="font-semibold">Date of birth :</span> 21 June
              1990
            </p>
            <p>
              <span className="font-semibold">Nationality :</span> Russian
            </p>
            <p>
              <span className="font-semibold">Freelance :</span> Available
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Phone :</span> +34 21 18 40 10
            </p>
            <p>
              <span className="font-semibold">Address :</span> Moscow, Russia
            </p>
            <p>
              <span className="font-semibold">Email :</span> you@yourwebsite.com
            </p>
            <p>
              <span className="font-semibold">Spoken Languages :</span> French -
              German
            </p>
            <p>
              <span className="font-semibold">Skype :</span> linda.smith
            </p>
          </div>
        </div>

        <div className="flex mt-8 gap-4">
          <button
            className=" px-6 py-3  font-semibold flex items-center gap-2 "
            style={{ backgroundColor: textColor }}
          >
            DOWNLOAD RESUME
            <FaFilePdf />
          </button>
          <button
            className="bg-transparent border   px-6 py-3  font-semibold flex items-center gap-2  "
            style={{ border: `1px solid ${textColor}` }}
          >
            MY BLOG
            <FaRegEdit />
          </button>
        </div>
      </div>
      <Resume />
    </div>
  );
}
