import React, { useContext, useState } from "react";
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");
  const { theme, textColor } = useContext(ThemeContext);

  const experiences = [
    {
      title: "Web Designer",
      company: "Envato",
      duration: "2015 - 2018",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Web Developer",
      company: "Google",
      duration: "2011 - 2015",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Community Manager",
      company: "Adobe",
      duration: "2007 - 2011",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const educations = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "University of XYZ",
      duration: "2003 - 2007",
    },
  ];

  const skills = [
    { skill: "HTML", level: 5 },
    { skill: "JavaScript", level: 4 },
    { skill: "CSS", level: 4 },
    { skill: "PHP", level: 3 },
    { skill: "jQuery", level: 5 },
    { skill: "AngularJS", level: 3 },
    { skill: "WordPress", level: 4 },
    { skill: "Joomla", level: 3 },
    { skill: "Magento", level: 4 },
    { skill: "Drupal", level: 5 },
    { skill: "Adobe Photoshop", level: 4 },
    { skill: "Adobe Illustrator", level: 3 },
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
    <div className="flex h-fit pt-10">
      {/* Sidebar */}
      <div className="w-1/3 flex items-center text-white">
        <div className="p-4 space-y-4 w-full">
          <button
            onClick={() => setActiveTab("experience")}
            className="flex items-center p-4 text-lg w-full border border-gray-600"
            style={
              activeTab === "experience" ? { backgroundColor: textColor } : {}
            }
          >
            <FaBriefcase className="mr-2" /> Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className="flex items-center p-4 text-lg w-full border border-gray-600"
            style={
              activeTab === "education" ? { backgroundColor: textColor } : {}
            }
          >
            <FaGraduationCap className="mr-2" /> Education
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className="flex items-center p-4 text-lg w-full border border-gray-600"
            style={activeTab === "skills" ? { backgroundColor: textColor } : {}}
          >
            <FaStar className="mr-2" /> Skills
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="w-2/3 text-white p-8 min-h-[400px]">
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

        {activeTab === "skills" && (
          <div>
            <div className="bg-[#111] py-4 text-center mb-5">
              <h2 className="text-3xl font-bold " style={{ color: textColor }}>
                Skills
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 justify-between">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl ">{skill.skill}</h3>
                  <div className="flex">{renderStars(skill.level)}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
