// src/app/page.tsx
import React from 'react';
import Typed from 'react-typed'
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Footer from './components/footer';
import SkillsTools from './components/skillsTools';
import MyProjects from './components/projects';
import HeroSection from './components/heroSection';

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
