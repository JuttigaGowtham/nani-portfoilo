// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Bachelor of Technology in Computer Science & Data Science",
    institution: "Kakinada Institute of Engineering and Technology, A.P",
    year: "2021 - 2025",
    details: [
      "CGPA: 8.20 / 10.0",
      "Specialized in MERN Stack, Data Structures, and Python.",
      "Worked on multiple projects, hackathons, and coding competitions.",
      "Actively engaged in building scalable web apps and learning advanced algorithms.",
    ],
  },
  {
    title: "Intermediate (MPC)",
    institution: "Pragathi Junior College, Tanuku",
    year: "2019 - 2021",
    details: [
      "CGPA: 69%",
      "Built a strong foundation in Mathematics and Physics.",
      "Developed problem-solving skills that later helped in programming logic.",
    ],
  },
  {
    title: "SSC",
    institution: "Bhashyam EM High School, Tanuku",
    year: "2018 - 2019",
    details: [
      "CGPA: 96%",
      "Excelled in academics with a keen interest in science and technology.",
      "Represented school in state-level science exhibitions.",
    ],
  },
];

const EducationCard = ({ title, institution, year, details }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="border border-white/10 backdrop-blur-md bg-black/50 hover:bg-white/10 transition-all duration-300 text-white rounded-xl p-6 flex flex-col shadow-md cursor-pointer"
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-1">{institution}</p>
    <p className="text-gray-500 text-xs mb-3">{year}</p>
    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
      {details.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const Education = () => {
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
        <h1 className="text-7xl font-extrabold text-purple-500 mb-4">Education</h1>
        
        {/* Intro Section */}
        <p className="text-lg text-gray-300 mb-6 max-w-3xl">
          Education has been the cornerstone of my journey into technology. 
          From excelling in core subjects during school to specializing in 
          <span className="text-purple-400 font-semibold"> Computer Science & Data Science</span>, 
          each step has sharpened my problem-solving abilities, teamwork, and 
          dedication to continuous learning.
        </p>

        <p className="text-md text-gray-400 italic mb-12 max-w-2xl">
          “My academic experiences not only strengthened my technical foundation, 
          but also taught me perseverance, curiosity, and the value of practical knowledge.”
        </p>

        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              title={edu.title}
              institution={edu.institution}
              year={edu.year}
              details={edu.details}
            />
          ))}
        </div>

        {/* Closing Note */}
        <p className="text-gray-400 text-sm mt-12 max-w-2xl">
          These milestones represent not just academic achievements, but the growth 
          of my technical mindset. My education continues to inspire me to build 
          impactful projects, learn cutting-edge technologies, and grow as a 
          <span className="text-purple-400"> lifelong learner</span>.
        </p>
      </div>
    </>
  );
};

export default Education;
