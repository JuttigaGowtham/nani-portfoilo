
import React, { useEffect, useRef, useState } from "react";
import gowthamIMG from "../assets/gowtham.jpg";

const Home = () => {
  const nameText = "Hi, I'm Gowtham Juttiga";
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 10);
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-end justify-start px-4 md:px-12 pb-10 text-white relative"
      style={{
        backgroundImage: `url(${gowthamIMG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Text Section */}
      <div
        ref={headingRef}
        className="relative max-w-3xl text-left z-10 w-full"
        style={{
          padding: "2rem 1rem",
          borderRadius: "12px",
          boxShadow: "none",
        }}
      >
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
          style={{
            fontSize: "2rem",
            lineHeight: "2.5rem",
            wordBreak: "break-word",
          }}
        >
          {isVisible &&
            nameText.split("").map((char, index) => (
              <span
                key={index}
                className={`letter-animation animate-delay-${index * 50}`}
                style={{ fontSize: "inherit" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          {isVisible && (
            <span className="blue-dot letter-animation animate-delay-1000"></span>
          )}
        </h1>

        <h2
          className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4 letter-animation animate-delay-1200"
          style={{ fontSize: "1.2rem" }}
        >
          <span className="text-purple-400">Full Stack Developer</span>
        </h2>

        <p
          className="text-sm md:text-lg lg:text-xl text-white leading-relaxed mb-6 animate-delay-1400 letter-animation"
          style={{ fontSize: "1rem" }}
        >
          Tech enthusiast with 3 years of experience in MERN stack and Python,
          possessing a strong foundation in Data Structures and Algorithms.
          Skilled in developing, debugging, and delivering efficient code, with
          the ability to quickly learn new technologies. Adept at translating
          business requirements into scalable technical solutions. Let's
          connect!
        </p>
      </div>

      {/* Animations + Styles */}
      <style>
        {`
          .blue-dot {
            display: inline-block;
            width: 12px;
            height: 12px;
            background-color: #6a67ff;
            border-radius: 50%;
            margin-left: 8px;
            vertical-align: middle;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .letter-animation {
            display: inline-block;
            animation-name: fadeInUp;
            animation-duration: 0.4s;
            animation-fill-mode: forwards;
            opacity: 0;
          }

          ${Array.from({ length: 40 }, (_, i) =>
            `.animate-delay-${i * 50} { animation-delay: ${i * 0.05}s; }`
          ).join("\n")}

          @media (max-width: 768px) {
            .min-h-screen {
              min-height: 100vh;
            }
            .max-w-3xl {
              max-width: 100%;
            }
            h1 {
              font-size: 2rem !important;
              line-height: 2.5rem !important;
            }
            h2 {
              font-size: 1.2rem !important;
            }
            p {
              font-size: 1rem !important;
            }
            .relative {
              padding: 1.2rem 0.5rem !important;
            }
          }
          @media (max-width: 480px) {
            .relative {
              padding: 0.7rem 0.2rem !important;
            }
            h1 {
              font-size: 1.3rem !important;
              line-height: 1.7rem !important;
            }
            h2 {
              font-size: 1rem !important;
            }
            p {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
