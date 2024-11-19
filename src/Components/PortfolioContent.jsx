import React, { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import knifeSound from "../assets/ninja-sound.mp3"; // Adjust the path as needed
import "./Portfolio.css";
import { FaSuitcase } from "react-icons/fa";

export default function PortfolioContent() {
  const { textColor } = useContext(ThemeContext);
  const [hoverDirection, setHoverDirection] = useState("");

  // Load the audio file
  const knifeAudio = new Audio(knifeSound);

  const playSound = () => {
    knifeAudio.currentTime = 0; // Reset sound to start on each hover
    knifeAudio.play();
  };

  const detectDirection = (e) => {
    playSound(); // Play sound on hover
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
      title: "Project A",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0H9XfFEqC3TbHWJRtGKK-4rulQ45KHsFfug&s",
    },
    {
      title: "Project B",
      img: "https://gaadiwale.com/wp-content/uploads/2021/10/modified-Mahindra-Thar-Accessories-the-shoppe-img3.jpeg",
    },
    {
      title: "Project C",
      img: "https://fastwaybicycles.com/wp-content/uploads/2023/12/man-img3.jpg",
    },
  ];

  return (
    <div className="bg-[#222] text-white p-8 md:px-20 min-h-full">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 uppercase" >
          My <span style={{ color: textColor }}>Portfolio</span>
        </h2>
        <div
          className="flex justify-center items-center mb-6"
          style={{ color: textColor }}
        >
          <span className="border-t-2 w-[40%]"></span>
          <FaSuitcase className="text-2xl mx-6" />
          <span className="border-t-2 w-[40%]"></span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
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
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
