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

const SkillCard = ({ name, Icon, color, onClick }) => (
  <motion.div
    initial={{ backgroundColor: "rgba(17,17,17,0.6)", opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="relative border border-white/10 backdrop-blur-md text-white 
               rounded-xl px-4 py-5 flex flex-col items-center shadow-md 
               min-h-[120px] cursor-pointer group"
    onClick={onClick}
  >
    {Icon && <Icon size={28} color={color} />}
    <span className="mt-2 text-sm font-semibold">{name}</span>
  </motion.div>
);

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <style>{`
        .pattern-bg {
          background-color: #000000;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center;
        }
      `}</style>

      <div className="pattern-bg min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl font-extrabold text-purple-500 mb-4"
        >
          Skills
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300 mb-12 max-w-3xl"
        >
          A comprehensive overview of my technical toolkit — spanning 
          <span className="text-purple-400 font-semibold"> frontend</span> frameworks, 
          <span className="text-purple-400 font-semibold"> backend</span> technologies, 
          <span className="text-white-400 font-semibold"> databases</span>, and 
          <span className="text-white-400 font-semibold"> developer tools</span>.  
          Click on each card to learn more.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              Icon={skill.icon}
              color={skill.color}
              onClick={() => setSelectedSkill(skill)}
            />
          ))}
        </motion.div>
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
    </>
  );
};

export default Skills;
