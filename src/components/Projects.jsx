import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import techHubImg from "../assets/techhub.jpg"; 
import zuiiImg from "../assets/zuii.jpg";       
import attendanceImg from "../assets/attendance.jpg"; 
import codeineImg from "../assets/codeine.jpg";          
import servicesImg from "../assets/services.jpg";             

const projects = [
  {
    title: "TECH HUB (MERN Stack)",
    description:
      "A comprehensive MERN stack platform serving over 500 JNTUK students with syllabus-based coding challenges and curated placement resources. Includes structured learning, mock tests, and real-time doubt resolution.",
    tech: ["MongoDB","JavaScript", "React.js", "Node.js"],
    link: "https://github.com/JuttigaGowtham/TechHub",
    image: techHubImg,
  },
  {
    title: "ZUII - React Native Mobile App",
    description:
      "A mobile travel application enabling exploration, trip planning, and booking management for thousands of users. Features intuitive navigation, responsive UI, and key travel tools for an enhanced user experience.",
    tech: ["React Native", "JavaScript", "Expo"],
    link: "https://github.com/JuttigaGowtham/react-native-app-zuii",
    image: zuiiImg,
  },
  {
    title: "Attendance Management System (MERN Stack)",
    description:
      "Web-based attendance management system for organizations and institutions. Features robust APIs, interactive frontend, and data visualization, processing over 1,000 attendance records daily with 99% accuracy.",
    tech: ["MongoDB", "JavaScript","React.js", "Node.js"],
    link: "https://github.com/JuttigaGowtham/MERN-PROJECT",
    image: attendanceImg,
  },
  {
    title: "Codeine - Student coding learning platform",
    description:
      "A comprehensive coding platform designed to enhance learning and skill-building. Features coding challenges, real-time code compilation, project collaboration, and community-driven resources to support programmers at all levels.",
    tech: ["React.js", "Node.js", "MongoDB"],
    link: "https://github.com/JuttigaGowtham/codeine-frontend",
    image: codeineImg,
  },
  {
    title: "Servicex - Websites for all your business needs",
    description:
      "A professional web development service delivering custom, responsive, and user-friendly websites tailored to clients’ business needs, enhancing their online presence and engagement.",
    tech: ["React.js", "Node.js", "MongoDB"],
    link: "https://github.com/JuttigaGowtham/TA-Bot",
    image: servicesImg,
  },
];

const ProjectCard = ({ title, description, tech, link, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="border border-white/10 backdrop-blur-md bg-black/50 hover:bg-white/10 transition-all duration-300 text-white rounded-xl overflow-hidden shadow-md flex flex-col"
  >
    {/* Project Image */}
    <img src={image} alt={title} className="w-full h-48 object-cover" />

    {/* Project Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 bg-white/10 rounded-full border border-white/20"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* GitHub Link */}
    <div className="p-4 border-t border-white/10 flex justify-end">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-300 hover:text-white transition"
      >
        <FaGithub size={18} />
        <span className="text-sm">View on GitHub</span>
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
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

      <div className="pattern-bg min-h-screen flex flex-col justify-center items-center text-center px-4 py-20">
        <h1 className="text-7xl font-extrabold text-purple-500 mb-4">Projects</h1>
        
        {/* Intro text */}
        <p className="text-lg text-gray-300 mb-6 max-w-3xl">
          Over the years, I’ve worked on a variety of projects ranging from{" "}
          <span className="text-purple-400 font-semibold">full-stack web applications</span> 
          to <span className="text-purple-400 font-semibold">mobile apps</span> and{" "}
          <span className="text-purple-400 font-semibold">custom business solutions</span>.  
          Each project represents my ability to solve real-world problems through code, design, 
          and innovation.
        </p>

        <p className="text-md text-gray-400 italic mb-12 max-w-2xl">
          “Great projects are built not just with technology, but with creativity, 
          persistence, and a passion for solving meaningful problems.”
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>

        {/* Closing Note */}
        <p className="text-gray-400 text-sm mt-12 max-w-2xl">
          These are just a few highlights from my work. You can find many more experiments, 
          contributions, and side projects on my{" "}
          <a
            href="https://github.com/JuttigaGowtham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            GitHub profile
          </a>.
        </p>
      </div>
    </>
  );
};

export default Projects;
