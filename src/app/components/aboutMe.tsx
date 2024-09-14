// src/app/components/AboutMe.tsx
import React from 'react';
import Image from 'next/image';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="relative py-20 bg-gray-900 text-white">

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full opacity-20"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-300 rounded-full opacity-40"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-10 md:px-16">

        {/* Left Column (Image) */}
        <div className="md:w-1/2">
          <Image
            src="/images/pp.png"
            alt="Profile Photo"
            className="rounded-lg shadow-lg object-cover"
            width={400}
            height={400}
          />
        </div>

        {/* Right Column (Description) */}
        <div className="md:w-10/12 mt-8 md:mt-0 md:ml-6">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg leading-relaxed">
            I am a full-stack developer with a passion for creating high-quality websites and
            applications. My expertise includes JavaScript, TypeScript, React, Node.js, and more.
            I love solving problems and building digital experiences that make an impact.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying a good book. I am always open to new opportunities and collaborations.
          </p>

          {/* Download CV Button */}
          <a
            href="/documents/cv.pdf"
            download
            className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Download CV
          </a>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
