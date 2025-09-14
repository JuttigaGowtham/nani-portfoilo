import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import signature from "../assets/gowtham_signature_inverted.png"; // <-- your signature image

export const ScreenFitText = () => {
  const containerRef = React.useRef(null);
  const textRef = React.useRef(null);

  React.useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;
      if (!container || !text) return;
      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2500;
      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = mid + "px";
        if (text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }
      text.style.fontSize = max + "px";
    };
    resizeText();
    window.addEventListener("resize", resizeText);
    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  return (
    <div
      className="flex h-full w-full items-center overflow-hidden bg-black absolute inset-0 z-0 pointer-events-none"
      ref={containerRef}
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              whitespace-nowrap text-center font-bold uppercase
              bg-clip-text text-transparent
              bg-gradient-to-r from-white/10 to-white/10 drop-shadow-md"
          ref={textRef}
        >
          Gowtham
        </span>

        <div className="footer-rights flex flex-row items-center gap-6">
          <p className="text-sm text-purple-400">© 2025 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative w-full px-4 py-32 text-center text-white overflow-hidden z-10 bg-black min-h-[400px]">
      {/* Animated Background Fit Text */}
      <ScreenFitText />

      {/* Signature image - bottom left corner (responsive) */}
      <div className="footer-signature">
        <img
          src={signature}
          alt="Signature"
          className="h-10 w-auto opacity-90"
        />
      </div>

      {/* Social Icons - bottom right corner (responsive) */}
      <div className="footer-socials flex gap-5 text-gray-400 z-20">
        <a
          href="https://x.com/GowthamJuttiga"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaTwitter size={22} />
        </a>
        <a
          href="https://www.instagram.com/_mr.nani._/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/juttiga-gowtham-a5bb4b290/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://github.com/JuttigaGowtham"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub size={22} />
        </a>
      </div>

      {/* Responsive styles */}
      <style>{`
        .footer-signature {
          position: absolute;
          bottom: 24px;
          left: 24px;
          z-index: 20;
        }
        .footer-socials {
          position: absolute;
          bottom: 24px;
          right: 24px;
          z-index: 20;
        }
        .footer-rights {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 40px;
          z-index: 20;
        }
        @media (max-width: 700px) {
          .footer-signature {
            position: absolute;
            bottom: 16px;
            left: 16px;
            margin-bottom: 0;
            display: block;
            justify-content: flex-start;
          }
          .footer-socials {
            position: absolute;
            bottom: 16px;
            right: 16px;
            margin-bottom: 0;
            display: flex;
            justify-content: flex-end;
          }
          .footer-rights {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 60px;
            z-index: 20;
          }
          footer {
            padding-bottom: 48px !important;
            min-height: 320px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
