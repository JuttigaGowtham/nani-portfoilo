// src/components/Contact.jsx
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "Email",
    value: "gowthamjuttiga@gmail.com",
    icon: FaEnvelope,
    link: "mailto:gowthamjuttiga@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 9346253766",
    icon: FaPhone,
    link: "tel:+9193466253766",
  },
  {
    label: "Location",
    value: "Andhra Pradesh, India",
    icon: FaMapMarkerAlt,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/juttiga-gowtham",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/juttiga-gowtham-a5bb4b290/",
  },
  {
    label: "GitHub",
    value: "github.com/JuttigaGowtham",
    icon: FaGithub,
    link: "https://github.com/JuttigaGowtham",
  },
  {
    label: "Instagram",
    value: "@_mr.nani._",
    icon: FaInstagram,
    link: "https://www.instagram.com/_mr.nani._/",
  },
];

const ContactCard = ({ label, value, Icon, link }) => (
  <motion.a
    href={link || "#"}
    target={link ? "_blank" : "_self"}
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.07, backgroundColor: "rgba(30,41,59,0.7)" }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
    className="group border border-white/10 backdrop-blur-md text-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-md min-h-[65px] cursor-pointer relative overflow-hidden"
  >
    {/* Glow background */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-transparent blur-2xl"></div>

    <motion.div
      whileHover={{ rotate: 12, scale: 1.2 }}
      className="relative z-10"
    >
      {Icon && <Icon size={22} />}
    </motion.div>

    <div className="relative z-10">
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-xs text-gray-300">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <>
      <style>{`
        .pattern-bg {
          background-color: #0a0a0a;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center;
        }
      `}</style>

      <div
        id="contact"
        className="pattern-bg min-h-screen flex flex-col justify-center items-center text-center px-4 py-20"
      >
        <h1 className="text-7xl font-extrabold text-purple-500 mb-4">
          Contact Me
        </h1>

        {/* Intro Text */}
        <p className="text-lg text-gray-300 mb-4 max-w-2xl">
          Whether you have an idea, a project, or just want to say hi — my inbox
          is always open. I love connecting with people and exploring new
          opportunities.
        </p>

        <p className="text-md text-gray-400 italic mb-12">
          Let’s collaborate, innovate, and create something impactful together 
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
          {contacts.map((c, index) => (
            <ContactCard
              key={index}
              label={c.label}
              value={c.value}
              Icon={c.icon}
              link={c.link}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-6 border border-white/10 bg-black/40 rounded-2xl max-w-2xl backdrop-blur-md"
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Ready to collaborate?
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Drop me a message via email or connect on LinkedIn. I’ll respond as
            soon as possible.
          </p>
          <a
            href="mailto:gowthamjuttiga@gmail.com"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold transition duration-300"
          >
            Send a Message ✉️
          </a>
        </motion.div>

        {/* Closing Note */}
        {/* <p className="text-gray-500 text-xs mt-10">
          © {new Date().getFullYear()} Juttiga Gowtham • All Rights Reserved
        </p> */}
      </div>
    </>
  );
};

export default Contact;
