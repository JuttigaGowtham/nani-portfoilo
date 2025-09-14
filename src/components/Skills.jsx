// src/components/Skills.jsx
import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGit,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFlask,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGithubactions,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "React.js", icon: FaReact, color: "#61DAFB", desc: "Building dynamic and scalable web apps." },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", desc: "Ensuring type safety and maintainable code." },
  { name: "Python", icon: FaPython, color: "#FFD43B", desc: "Used for scripting, automation, and backend development." },
  { name: "Flask", icon: SiFlask, color: "#000000", desc: "Lightweight Python framework for APIs and apps." },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8", desc: "Utility-first CSS framework for rapid UI design." },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", desc: "NoSQL database for flexible and scalable data storage." },
  { name: "Node.js", icon: FaNodeJs, color: "#339933", desc: "Server-side JavaScript runtime for APIs and backend." },
  { name: "Java", icon: FaJava, color: "#007396", desc: "Object-oriented programming for large-scale apps." },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", desc: "Core web language for frontend interactivity." },
  { name: "React Native", icon: SiReact, color: "#61DAFB", desc: "Cross-platform mobile app development." },
  { name: "Git", icon: FaGit, color: "#F05032", desc: "Version control for tracking and collaboration." },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF", desc: "Automating CI/CD workflows." },
];

const SkillCard = ({ name, Icon, color, desc, onClick }) => (
  <motion.div
    initial={{ backgroundColor: "rgba(17,17,17,0.6)", opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: false, amount: 0.5 }}
    className="relative border border-white/10 backdrop-blur-md text-white rounded-xl px-4 py-5 flex items-center shadow-md min-h-[120px] cursor-pointer group"
    onClick={onClick}
  >
    {Icon && <Icon size={40} color={color} className="flex-shrink-0" />}
    <div className="ml-4 text-left">
      <span className="block text-base font-semibold mb-1">{name}</span>
      <span className="block text-sm text-gray-300">{desc}</span>
    </div>
  </motion.div>
);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <React.Fragment>
      <style>{`
        .tree-skills-bg {
          background-color: #000000;
          background-image: linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center;
        }
        .tree-line {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #a259e6 0%, #fff 100%);
          z-index: 0;
        }
        .tree-skills-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem;
        }
        .tree-skill {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2.5rem;
        }
        .tree-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: #a259e6;
          border-radius: 50%;
          border: 3px solid #fff;
          z-index: 2;
        }
        .tree-skill-content {
          display: flex;
          width: 100%;
          max-width: 700px;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }
        .tree-skill-content > .skill-left,
        .tree-skill-content > .skill-right {
          width: 45%;
          min-width: 180px;
          display: flex;
          justify-content: flex-end;
        }
        .tree-skill-content > .skill-right {
          justify-content: flex-start;
        }
        .tree-skill-content > .skill-empty {
          width: 45%;
        }
        @media (max-width: 900px) {
          .tree-skills-container {
            max-width: 100%;
            padding: 0 0.5rem;
          }
          .tree-skill-content {
            flex-direction: row;
            align-items: center;
            gap: 1rem;
          }
          .tree-skill-content > .skill-left,
          .tree-skill-content > .skill-right,
          .tree-skill-content > .skill-empty {
            width: 45%;
            min-width: 120px;
            justify-content: flex-end;
          }
          .tree-skill-content > .skill-right {
            justify-content: flex-start;
          }
          .tree-dot {
            width: 16px;
            height: 16px;
          }
          .tree-line {
            left: 50%;
            width: 4px;
            height: 100%;
            background: linear-gradient(to bottom, #a259e6 0%, #fff 100%);
            z-index: 0;
          }
        }
        @media (max-width: 600px) {
          .tree-skills-bg {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .tree-skill-content {
            max-width: 98vw;
          }
          .tree-dot {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>

      <div className="tree-skills-bg min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 relative">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold text-purple-500 mb-4"
        >
          Skills
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 mb-12 max-w-3xl"
        >
          A tree view of my technical toolkit. Click on each card to learn more.
        </motion.p>

        <div className="tree-skills-container">
          <div className="tree-line" />
          {skills.map((skill, idx) => (
            <div key={skill.name} className="tree-skill">
              <div className="tree-dot" />
              <div className="tree-skill-content">
                {idx % 2 === 0 ? (
                  <React.Fragment>
                    <div className="skill-left">
                      <SkillCard
                        name={skill.name}
                        Icon={skill.icon}
                        color={skill.color}
                        desc={skill.desc}
                        onClick={() => setSelectedSkill(skill)}
                      />
                    </div>
                    <div className="skill-empty" />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className="skill-empty" />
                    <div className="skill-right">
                      <SkillCard
                        name={skill.name}
                        Icon={skill.icon}
                        color={skill.color}
                        desc={skill.desc}
                        onClick={() => setSelectedSkill(skill)}
                      />
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black text-purple-500 rounded-2xl p-8 w-[90%] max-w-md shadow-lg relative"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
              >
                ✕
              </button>

              {/* Icon + Title */}
              <div className="flex flex-col items-center mb-4">
                {selectedSkill.icon && (
                  <selectedSkill.icon size={50} color={selectedSkill.color} />
                )}
                <h2 className="text-2xl font-bold mt-2">{selectedSkill.name}</h2>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-center">{selectedSkill.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Skills;
