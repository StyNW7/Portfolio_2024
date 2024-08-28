// src/app/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-xl mt-4">I am a web developer passionate about creating amazing user experiences.</p>
        <a href="#projects" className="mt-8 px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition">See My Work</a>
      </div>
    </section>
  );
};

export default HeroSection;
