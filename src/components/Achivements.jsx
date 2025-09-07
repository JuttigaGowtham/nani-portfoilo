// src/components/Achievements.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaCode } from "react-icons/fa";

const achievements = [
  {
    title: "Member of Global Coding Club",
    description:
      "Actively contributed as a member of the Global Coding Club, collaborating with peers on innovative coding challenges, hackathons, and skill-building sessions to foster technical growth and community engagement.",
    icon: <FaUsers size={28} className="text-purple-400" />,
    year: "2023 - Present",
  },
  {
    title: "Academic Topper - CSD Branch",
    description:
      "Recognized as the academic topper in the Computer Science and Data Science branch at Kakinada Institute of Engineering and Technology, maintaining exceptional performance across all semesters.",
    icon: <FaAward size={28} className="text-yellow-400" />,
    year: "2023 - 2024",
  },
  {
    title: "Completed 100 Days Coding Challenge - CodeChef",
    description:
      "Successfully completed the 100 Days Coding Challenge on CodeChef, solving diverse algorithmic problems to strengthen problem-solving skills, consistency, and speed in competitive programming.",
    icon: <FaCode size={28} className="text-green-400" />,
    year: "2025 - Present",
  },
];

const AchievementCard = ({ title, description, icon, year }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.07, rotate: 1 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="group border border-white/10 backdrop-blur-md bg-black/50 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 text-white rounded-xl p-6 flex flex-col shadow-md cursor-pointer relative overflow-hidden"
  >
    {/* Glow effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent blur-2xl"></div>

    <div className="flex items-center gap-3 mb-3 relative z-10">
      <motion.div whileHover={{ rotate: 15, scale: 1.2 }}>{icon}</motion.div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>

    <p className="text-gray-300 text-sm mb-4 relative z-10">{description}</p>
    <p className="text-gray-500 text-xs relative z-10">{year}</p>
  </motion.div>
);

const Achievements = () => {
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
        <h1 className="text-7xl font-extrabold text-purple-500 mb-4">Achievements</h1>

        {/* Intro text */}
        <p className="text-lg text-gray-300 mb-6 max-w-3xl">
          Every milestone I’ve achieved reflects my dedication, curiosity, and love for solving challenges. 
          From academic excellence to community contributions, each accomplishment motivates me to keep pushing 
          boundaries in technology.
        </p>

        <p className="text-md text-gray-400 italic mb-12 max-w-2xl">
          “Achievements are not just about recognition, but about the journey of learning, 
          teamwork, and growth behind them.”
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {achievements.map((ach, index) => (
            <AchievementCard
              key={index}
              title={ach.title}
              description={ach.description}
              icon={ach.icon}
              year={ach.year}
            />
          ))}
        </div>

        {/* Closing Note */}
        <p className="text-gray-400 text-sm mt-12 max-w-2xl">
          These achievements remind me that progress is built step by step. 
          I look forward to adding many more milestones while contributing to 
          impactful projects and communities. 
        </p>
      </div>
    </>
  );
};

export default Achievements;
