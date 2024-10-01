"use client"; // Ensure this component is rendered on the client side

import React, { useEffect, useState } from 'react';
import '../../styles/typeWriter.css';

const HeroSection: React.FC = () => {

  // const [textIndex, setTextIndex] = useState(0);
  // const texts = [
  //   "Hello World",
  //   "I'm a Fullstack Developer",
  //   "Stanley Nathanael Wijaya"
  // ];

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //   }, 4000); // Switch text every 4 seconds

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <section className="relative h-screen bg-gray-900 text-white flex flex-col justify-center items-center" id="home">
      <div className="z-10 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-5xl lg:text-7xl font-bold font-mono mb-4 typewriter">
          Stanley N. Wijaya
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          Creating robust web applications with modern technologies.
        </p>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a
            href="#about"
            className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
