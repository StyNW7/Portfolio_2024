"use client";

import React from 'react';

// Dummy data for projects
const projects = [
  // {
  //   title: 'Portfolio Website',
  //   subtitle: 'A personal portfolio website built with modern technologies.',
  //   imageUrl: '/images/projects/koktahu.png',
  //   tags: ['Web', 'React', 'TailwindCSS'],
  //   specialTags: ['Featured'],
  //   link: 'https://github.com/StyNW7/Data_Structures',
  // },
  {
    title: 'Interactive Education Website',
    subtitle: 'Interactive education website without using a framework',
    imageUrl: '/images/projects/koktahu1.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    specialTags: ['Web'],
    link: 'https://kok-tahu.vercel.app',
  },
  {
    title: 'SEA Salon',
    subtitle: 'Simple Fullstack Website built with Django Framework',
    imageUrl: '/images/projects/seasalon.png',
    tags: ['Django', 'SQLite'],
    specialTags: ['Django Website'],
    link: 'https://github.com/StyNW7/SEASalon',
  },
  {
    title: 'MetaFi Trading System',
    subtitle: 'A trading system using Basic to Advanced C Data Structures',
    imageUrl: '/images/projects/metafi.png',
    tags: ['C', 'C++'],
    specialTags: ['Execute Application'],
    link: 'https://github.com/StyNW7/All-About-C',
  },
  {
    title: 'BlackSouls',
    subtitle: 'Web Design with demo of a simple game using Pure JavaScript',
    imageUrl: '/images/projects/blacksouls.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    specialTags: ['Web'],
    link: 'https://stynw7.github.io/BlackSouls/',
  },
  {
    title: 'Naruto Website',
    subtitle: 'Replicate an official Naruto Website built with Simple Web Design',
    imageUrl: '/images/projects/naruto.png',
    tags: ['HTML5', 'CSS', 'JavaScript', 'jQuery'],
    specialTags: ['Django Website'],
    link: 'https://stynw7.github.io/Naruto/',
  },
  {
    title: 'Minecraft 3D Website',
    subtitle: 'Basic Website using ThreeJS',
    imageUrl: '/images/projects/minecraft.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'ThreeJS'],
    specialTags: ['Web'],
    link: 'https://minecraft-compgraph.vercel.app/',
  },
];

const MyProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto max-w-screen-lg">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto w-11/12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-white bg-opacity-10 rounded-lg shadow-lg p-5 overflow-hidden backdrop-blur-lg transition transform hover:scale-105 hover:shadow-xl"
              style={{ minHeight: '320px' }}
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-lg mb-4">
                <img src={project.imageUrl} alt={project.title} className="object-cover w-full h-40 group-hover:brightness-50 transition" />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-1">{project.title}</h3>

              {/* Project Subtitle */}
              <p className="text-sm text-gray-400 mb-2">{project.subtitle}</p>

              {/* Project Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500 bg-opacity-50 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {/* Special Tags */}
                {project.specialTags.map((specialTag, idx) => (
                  <span
                    key={idx}
                    className="bg-red-500 text-xs px-3 py-1 rounded-full"
                  >
                    {specialTag}
                  </span>
                ))}
              </div>

              {/* Hover Effect for GitHub/Website Link */}
              <div
                className="absolute inset-0 bg-blue-500 bg-opacity-75 flex items-center justify-center transition transform translate-y-full group-hover:translate-y-0 duration-300"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-semibold"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
