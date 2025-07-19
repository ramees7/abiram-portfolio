import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { ImProfile } from "react-icons/im";
import { FaFilePdf, FaUserAlt } from "react-icons/fa";
import Resume from "./Resume";
import CV from "../assets/Abiram N.pdf";

export default function AboutContent() {
  const { theme, textColor } = useContext(ThemeContext);

  return (
    <div
      className={`p-8 md:px-10 relative h-full ${
        theme === "dark" ? "bg-[#222] text-white" : "bg-[#e7e7e7] text-black"
      } `}
    >
      <div className="border-b pb-10 border-b-gray-500">
        <h2 className="xl:text-4xl md:text-2xl text-3xl font-bold text-center mb-8 uppercase">
          ABOUT <span style={{ color: textColor }}>ME</span>
        </h2>

        <div
          className="flex justify-center items-center mb-6"
          style={{ color: textColor }}
        >
          <span
            className={`border-t-2 w-[40%] ${
              theme === "dark" ? "" : "border-gray-700"
            }`}
          ></span>
          <ImProfile className="text-2xl mx-6 " />
          <span
            className={`border-t-2 w-[40%] ${
              theme === "dark" ? "" : "border-gray-700"
            }`}
          ></span>
        </div>
        <div className="flex items-center gap-2 font-semibold text-xl uppercase mb-3">
          <FaUserAlt />
          <h1>Personal Info</h1>
        </div>
        <p className=" text-start mb-8">
          I’m Abiram N, a digital marketing expert who helps businesses grow
          online. I create simple and powerful strategies using Google Ads, Meta
          Ads (Facebook & Instagram), and SEO to make your brand stand out. My
          goal is to bring more customers and results through creative and smart
          online marketing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2 font-light">
            <p>
              <span className="font-semibold">First Name :</span> Abiram N
            </p>
            <p>
              <span className="font-semibold">Date of birth :</span> 08 Sept
              2004
            </p>
            <p>
              <span className="font-semibold">Nationality :</span> Indian
            </p>
            {/* <p>
              <span className="font-semibold">Freelance :</span> Available
            </p> */}
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Phone :</span> +91 9037152849
            </p>
            <p>
              <span className="font-semibold">Address :</span> Kottakal, Kerala
            </p>
            <p>
              <span className="font-semibold">Email :</span>{" "}
              digitalabio09@gmail.com
            </p>
          </div>
        </div>

        <div className="flex mt-8 gap-4">
          <a
            href={CV}
            target="_blank"
            download="My_Resume.pdf"
            className="md:px-6 px-2 py-3 text-sm md:text-base font-semibold flex items-center gap-2 text-white"
            style={{ backgroundColor: textColor }}
          >
            DOWNLOAD RESUME
            <FaFilePdf />
          </a>
          {/* <button
            className="bg-transparent border  md:px-6 px-2  text-sm md:text-base font-semibold flex items-center gap-2  "
            style={{ border: `1px solid ${textColor}` }}
          >
            MY BLOG
            <FaRegEdit />
          </button> */}
        </div>
      </div>
      <Resume />
    </div>
  );
}
