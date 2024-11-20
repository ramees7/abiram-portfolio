import { useContext, useRef, useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { ThemeContext } from "../Context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const colors = [
  { name: "Gray", code: "#808080" },
  { name: "Red", code: "#f72b1c" },
  { name: "Blue", code: "#4169e1" },
  { name: "Yellow", code: "#f1c40f" },
  { name: "Pink", code: "#e91e63" },
  { name: "BlueViolet", code: "#6957af" },
  { name: "Green", code: "#72b626" },
  { name: "Indigo", code: "#4B0082" },
  { name: "Orange", code: "#fa5b0f" },
  { name: "Magenta", code: "#ee6192" },
];

export default function SettingsSidebar() {
  const { textColor, updateTextColor, theme, toggleTheme } =
    useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const colorBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (colorBoxRef.current && !colorBoxRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle custom color selection
  const handleCustomColorChange = (e) => {
    updateTextColor(e.target.value);
  };

  return (
    <>
      {!isOpen && (
        <div
          className="fixed left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
          style={{ color: textColor }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaCog size={24} />
        </div>
      )}
      {isOpen && (
        <div
          ref={colorBoxRef}
          className={`fixed left-4 top-1/2 transform -translate-y-1/2 ${
            theme === "dark" ? "bg-white text-black" : "bg-black text-white"
          } shadow-lg px-7 py-4 rounded-lg`}
        >
          <div className="flex justify-between items-center mb-4 border-b text-lg font-semibold">
            <h2>Color Switcher</h2>
            <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              <IoClose />
            </span>
          </div>
          <div className="grid grid-cols-5 gap-4 mt-2">
            {colors.map((color) => (
              <FaDroplet
                key={color.name}
                className="md:text-2xl text-xl cursor-pointer"
                style={{ color: color.code }}
                onClick={() => updateTextColor(color.code)}
                title={color.name}
              />
            ))}
          </div>
          {/* Custom Color Picker */}
          <div className="mt-4 flex flex-col items-center">
            <label
              htmlFor="colorPicker"
              className="mb-2 font-semibold text-lg text-center"
            >
              Choose Custom Color
            </label>
            <input
              id="colorPicker"
              type="color"
              onChange={handleCustomColorChange}
              className="w-10 h-10 cursor-pointer"
            />
          </div>
          <div className="mt-4">
            <h1 className="mb-2 font-semibold text-lg text-center">
              Choose Theme
            </h1>
            <div className="flex justify-around ">
              <button
                onClick={() => toggleTheme("light")}
                className={`px-3 py-2 rounded ${
                  theme === "light"
                    ? "bg-gray-100 text-black"
                    : "bg-black text-white"
                }`}
              >
                {theme === "dark" ? <CiLight /> : <MdDarkMode />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
