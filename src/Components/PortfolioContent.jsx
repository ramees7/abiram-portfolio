import { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./Portfolio.css";
import { FaSuitcase } from "react-icons/fa";
import work1 from "../assets/pro-1.jpg";
import work2 from "../assets/pro-2.jpg";
import work3 from "../assets/pro-3.jpg";
import work4 from "../assets/pro-4.jpg";
import work5 from "../assets/pro-5.jpg";
import work6 from "../assets/pro-6.jpg";
import work7 from "../assets/pro-7.jpg";
import work8 from "../assets/pro-8.jpg";
import work9 from "../assets/pro-9.jpg";
import work10 from "../assets/pro-10.jpg";
import work11 from "../assets/pro-11.jpg";

import { IoClose } from "react-icons/io5";

export default function PortfolioContent() {
  const { theme, textColor } = useContext(ThemeContext);
  const [hoverDirection, setHoverDirection] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const detectDirection = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;
    const fromLeft = x / w;
    const fromTop = y / h;

    if (fromTop <= 0.25) setHoverDirection("top");
    else if (fromTop >= 0.75) setHoverDirection("bottom");
    else if (fromLeft <= 0.25) setHoverDirection("left");
    else if (fromLeft >= 0.75) setHoverDirection("right");
  };

  // Sample portfolio items (replace with actual data)
  const portfolioItems = [
    {
      title: "Project 1",
      img: work1,
    },
    {
      title: "Project 2",
      img: work2,
    },
    {
      title: "Project 3",
      img: work3,
    },
    {
      title: "Project 4",
      img: work4,
    },
    {
      title: "Project 5",
      img: work5,
    },
    {
      title: "Project 6",
      img: work6,
    },
    {
      title: "Project 7",
      img: work7,
    },
    {
      title: "Project 8",
      img: work8,
    },
    {
      title: "Project 9",
      img: work9,
    },
    {
      title: "Project 10",
      img: work10,
    },
    {
      title: "Project 11",
      img: work11,
    },
  ];

  return (
    <div
      className={` ${
        theme === "dark" ? "bg-[#222] text-white" : "bg-[#e7e7e7] text-black"
      } p-8 md:px-20 min-h-full`}
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 uppercase">
          My <span style={{ color: textColor }}>Portfolio</span>
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
          <FaSuitcase className="text-2xl mx-6" />
          <span
            className={`border-t-2 w-[40%] ${
              theme === "dark" ? "" : "border-gray-700"
            }`}
          ></span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(item.img)}
            onMouseEnter={(e) => detectDirection(e)}
            onMouseLeave={() => setHoverDirection("")}
            className="relative group overflow-hidden rounded-lg h-[350px]"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-80"
            />
            <div
              className={`absolute inset-0 bg-opacity-50 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300
              ${
                hoverDirection === "left"
                  ? "animate-slide-left"
                  : hoverDirection === "right"
                  ? "animate-slide-right"
                  : hoverDirection === "top"
                  ? "animate-slide-top"
                  : hoverDirection === "bottom"
                  ? "animate-slide-bottom"
                  : ""
              }`}
              style={{ backgroundColor: textColor }}
            >
              <h3 className="text-xl font-bold ">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-10 top-10  cursor-pointer text-4xl z-[9999]"
          >
            <IoClose />
          </button>
          <img
            src={selectedImage}
            alt="Full preview"
            className="max-w-[80vw] max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
