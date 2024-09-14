// src/app/page.tsx
import React from 'react';
import Header from './components/header';
import HeroSection from './components/heroSection';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';
import ProjectCard from './components/projectCard';
import SkillsTools from './components/skillsTools';
import MyProjects from './components/projects';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <SkillsTools />
      <MyProjects />
      <Footer />
    </>
  );
};

export default HomePage;
