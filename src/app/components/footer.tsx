// src/app/components/Footer.tsx
"use client";

import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Footer: React.FC = () => {
  const icons = [
    { icon: <FaInstagram size={30} />, link: 'https://instagram.com/snw.77', name: 'Instagram' },
    { icon: <FaGithub size={30} />, link: 'https://github.com/StyNW7', name: 'GitHub' },
    { icon: <FaLinkedin size={30} />, link: 'https://www.linkedin.com/in/stanley-nathanel-wijaya/', name: 'LinkedIn' },
    { icon: <FaCode size={30} />, link: 'https://leetcode.com/u/xStyNWx/', name: 'LeetCode' },
  ];

  return (
    <footer className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto flex justify-center space-x-6">
        {icons.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20 transition"
          >
            <div className="text-white group-hover:text-current transition duration-300">
              {social.icon}
            </div>
            <div
              className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 bg-white transition duration-300 rounded-full"
              aria-label={social.name}
            ></div>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
