import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav
      className="w-full fixed top-0 left-0 z-10 bg-transparent flex items-center justify-between px-8 py-2 box-border"
    >
      {/* Logo & Name */}
      <div className="flex items-center">
        <span className="font-bold text-xl text-white">Juttiga</span>
        <span className="font-bold text-xl text-purple-500 ml-1">Gowtham</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center list-none m-0 p-0 gap-8">
        {["Home", "Skills", "Projects", "Education", "Achievements", "Contact"].map(
          (item) => (
            <li key={item} className="nav-item">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white text-base font-medium hover:text-purple-500 transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Resume Button (hidden on mobile) */}
      <a
        href="https://drive.google.com/file/d/1TeCsaHElgR30HY_vUoNKnTN5uYw2F4Ws/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 px-4 py-2 border-2 border-purple-500 rounded-lg text-purple-500 bg-transparent font-medium text-base hover:bg-purple-500 hover:text-white transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="inline"
        >
          <path d="M12 16.5l4-4h-3V7.5h-2v5H8l4 4zM5 19.5h14v-2H5v2z" />
        </svg>
        Get My Resume
      </a>

      {/* Hamburger Menu Icon */}
      <div
        className="md:hidden flex flex-col cursor-pointer gap-1"
        onClick={toggleMenu}
      >
        <div className="w-6 h-0.5 bg-white" />
        <div className="w-6 h-0.5 bg-white" />
        <div className="w-6 h-0.5 bg-white" />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 w-full p-4 rounded-lg flex flex-col gap-4 animate-slideIn"
          style={{
            background: "rgba(26,26,26,0.7)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            border: "1px solid rgba(162,89,230,0.15)",
          }}
        >
          {["Home", "Skills", "Projects", "Education", "Achievements", "Contact"].map(
            (item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-base font-medium text-center"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.4s ease ${0.1 + idx * 0.07}s forwards`,
                  display: "block",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            )
          )}
          <a
            href="https://drive.google.com/file/d/1TeCsaHElgR30HY_vUoNKnTN5uYw2F4Ws/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 border-2 border-purple-500 px-4 py-2 rounded-lg text-center text-base font-medium mx-auto w-3/4"
            style={{
              opacity: 0,
              animation: "fadeIn 0.4s ease 0.6s forwards",
              display: "block",
            }}
          >
            Get My Resume
          </a>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;