"use client"; // Untuk menandai sebagai Client Component

import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiVisualstudiocode, SiFigma, SiPostman, SiDocker } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
  { name: 'React', icon: <FaReact className="text-blue-300" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
];

const tools = [
  { name: 'VSCode', icon: <SiVisualstudiocode className="text-blue-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'Figma', icon: <SiFigma className="text-red-500" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-300" /> },
];

const SkillsTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'tools'>('skills');

  return (
    <section id="skills-tools" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-10">Skills & Tools</h2>

        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mx-2 font-semibold rounded-md transition ${
              activeTab === 'skills' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-blue-500 border border-blue-500'
            }`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={`px-4 py-2 mx-2 font-semibold rounded-md transition ${
              activeTab === 'tools' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-blue-500 border border-blue-500'
            }`}
            onClick={() => setActiveTab('tools')}
          >
            Tools
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mx-auto" style={{ width: '100%' }}>
          {(activeTab === 'skills' ? skills : tools).map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-lg transition transform hover:scale-105 hover:bg-opacity-20 hover:shadow-xl hover:brightness-100"
            >
              <div className="text-5xl mb-2 transition">
                {item.icon}
              </div>
              <p className="text-lg font-medium">{item.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsTools;
