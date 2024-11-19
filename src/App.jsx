import React, { useState, useEffect, useContext } from "react";
import profileImage from "./assets/woman.jpg";
import SettingsSidebar from "./Components/SettingsSidebar";
import { ThemeContext } from "./Context/ThemeContext";
import About from "./Components/About";
import AboutContent from "./Components/AboutContent";
import Portfolio from "./Components/Portfolio";
import PortfolioContent from "./Components/PortfolioContent";
import Contact from "./Components/Contact";
import ContactContent from "./Components/ContactContent";
import { IoClose } from "react-icons/io5";

const sections = [
  { id: "about", component: About, content: AboutContent },
  { id: "portfolio", component: Portfolio, content: PortfolioContent },
  { id: "contact", component: Contact, content: ContactContent },
];

export default function App() {
  const { theme, textColor } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) =>
    setActiveSection((prev) => (prev === sectionId ? null : sectionId));

  const roles = ["Flutter Developer", "Web Developer"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const handleTextTransition = () => {
    setDisplayText((prev) =>
      isDeleting ? prev.slice(0, -1) : roles[index].slice(0, prev.length + 1)
    );

    if (!isDeleting && displayText === roles[index]) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleTextTransition, 100);
    return () => clearInterval(interval);
  }, [displayText, isDeleting, index]);

  return (
    <>
      <div
        className={`${
          theme === "dark" ? "bg-[#111] text-white" : "bg-[#efe9e9] text-black"
        } min-h-screen`}
      >
        <div className="grid md:grid-cols-3 gap-8 h-full">
          <div className="col-span-1 h-screen py-7 ps-7 md:block hidden sticky top-0">
            <img
              src={profileImage}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="col-span-2 grid md:grid-cols-2 py-7 pe-7 h-full gap-8">
            {/* Greeting Section */}
            <div
              className={`col-span-1 flex justify-center items-center ${
                activeSection ? "hidden" : "block"
              }`}
            >
              <div className="uppercase text-center space-y-3">
                <h2 className="md:text-2xl text-lg">Hi There ! I'm</h2>
                <h1 className="md:text-6xl text-4xl font-[900]">Shinaf</h1>
                <h2
                  className="md:text-3xl text-xl font-semibold"
                  style={{
                    color: textColor,
                    visibility: displayText ? "visible" : "hidden",
                  }}
                >
                  {displayText || "not visible"}
                </h2>
              </div>
            </div>

            {sections.map(({ id, component: SectionComponent }) => (
              <div
                key={id}
                className={`${
                  activeSection ? "hidden" : "block"
                } col-span-1 flex justify-center items-center ${
                  theme === "dark"
                    ? "bg-[#222] text-white"
                    : "bg-[#e7e7e7] text-black"
                }`}
                onClick={() => toggleSection(id)}
              >
                <SectionComponent />
              </div>
            ))}

            {sections.map(
              ({ id, content: ContentComponent }) =>
                activeSection === id && (
                  <div key={id} className="col-span-2 ">
                    <ContentComponent />
                    <IoClose
                      className="right-10 top-10 fixed cursor-pointer text-4xl z-50"
                      onClick={() => toggleSection(id)}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <SettingsSidebar />
    </>
  );
}
