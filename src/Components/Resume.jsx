import { useContext, useState } from "react";
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");
  const { textColor } = useContext(ThemeContext);

  const experiences = [
    {
      title: "Digital Marketing",
      company: "Phew Interactive LLP",
      duration: "2025 - Present",
      description: "Worked as a Digital Marketing Specialist, focusing on Google Ads and Meta Ads.",
    },
    {
      title: "Digital Marketing ",
      company: "BQRAFT LLP",
      duration: "2024 - 2025",
      description: "Worked as a Digital Marketing Intern, focusing on Google Ads and Meta Ads.",
    },
  ];

  const educations = [
    {
      title: " Digital Marketing",
      institution: "GD Academy Manjeri",
      duration: "2024-2025",
    },
    {
      title: "Plus Two ",
      institution: "Rajas Higher Secondary",
      duration: "2020-2022",
    },
  ];

  const tools = [
    { tool: "Google Search Console", level: 5 },
    { tool: "Google Ads & Meta Ads", level: 5 },
    { tool: "Google Analytics ", level: 5 },
    { tool: "Google Tag Manager", level: 5 },
  ];

  const renderStars = (level) => {
    return (
      <>
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`${i < level ? "fill-current" : "text-gray-400"}`}
            style={i < level ? { color: textColor } : {}}
          />
        ))}
      </>
    );
  };

  return (
    <div className="md:flex h-fit pt-10 gap-8">
      {/* Sidebar */}
      <div className="md:w-1/3 flex items-start">
        <div className=" space-y-4 w-full">
          <button
            onClick={() => setActiveTab("experience")}
            className="flex items-center p-4 text-lg w-full border border-gray-600"
            style={
              activeTab === "experience"
                ? { backgroundColor: textColor, color: "white" }
                : {}
            }
          >
            <FaBriefcase className="mr-2" /> Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className="flex items-center p-4 text-lg w-full border border-gray-600"
            style={
              activeTab === "education"
                ? { backgroundColor: textColor, color: "white" }
                : {}
            }
          >
            <FaGraduationCap className="mr-2" /> Education
          </button>
          <button
            onClick={() => setActiveTab("tools")}
            className="flex items-center p-4 text-lg w-full border border-gray-600"
            style={
              activeTab === "tools"
                ? { backgroundColor: textColor, color: "white" }
                : {}
            }
          >
            <FaStar className="mr-2" /> Tools
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="md:w-2/3  min-h-[400px]  md:mt-0 mt-5">
        {activeTab === "experience" && (
          <div>
            <div className="bg-[#111] py-4 text-center mb-5">
              <h2 className="text-3xl font-bold " style={{ color: textColor }}>
                Experience
              </h2>
            </div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-6 pb-3"
                style={{ borderBottom: `1px solid ${textColor}` }}
              >
                <h3 className="text-lg font-semibold">
                  {exp.title} - {exp.company}
                </h3>
                <p className="text-gray-400">{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "education" && (
          <div>
            <div className="bg-[#111] py-4 text-center mb-5">
              <h2 className="text-3xl font-bold " style={{ color: textColor }}>
                Education
              </h2>
            </div>
            {educations.map((edu, index) => (
              <div
                key={index}
                className="mb-6 pb-3"
                style={{ borderBottom: `1px solid ${textColor}` }}
              >
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <p>{edu.duration}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "tools" && (
          <div>
            <div className="bg-[#111] py-4 text-center mb-5">
              <h2 className="text-3xl font-bold " style={{ color: textColor }}>
                Tools
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 justify-between">
              {tools.map((tool, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl ">{tool.tool}</h3>
                  <div className="flex">{renderStars(tool.level)}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
