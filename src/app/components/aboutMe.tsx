// src/app/components/AboutMe.tsx
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-lg text-gray-600">
          I am a full-stack developer with experience in building high-quality websites and applications. 
          My expertise includes JavaScript, React, Node.js, and more.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
