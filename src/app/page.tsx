// src/app/page.tsx
import React from 'react';
import Header from './components/header';
import HeroSection from './components/heroSection';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';
import ProjectCard from './components/projectCard';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <ProjectCard
        title="xStyNWx"
        description="Hello world!"
        imageUrl="/images/pp.png"
        projectLink="https://bento.me/snw77"
      />
      <Footer />
    </>
  );
};

export default HomePage;
