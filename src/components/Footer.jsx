
import React from "react";
import { FiDownload } from "react-icons/fi";

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

        <div className="absolute top-[85%] left-1/2 -translate-x-1/2 flex flex-row items-center gap-6">
          {/* <a
            href="https://drive.google.com/file/d/1rBlvJQJfvr8uj6RddhUhzKWZugcG-0Vu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-purple-600 bg-purple-600 text-white rounded-md backdrop-blur-md hover:bg-purple-700 hover:border-purple-700 transition"
          >
            <FiDownload size={16} />
            Get my Resume
          </a> */}
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

  {/* Foreground Content intentionally left empty, all content is now in background */}
    </footer>
  );
};

export default Footer;
