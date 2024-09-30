"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Jika user scroll ke bawah
        setShowNavbar(false);
      } else {
        // Jika user scroll ke atas
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Clean up event listener
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (

    <header
      className={`bg-gray-700 text-white py-4 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-10">
        
        <h1 className="text-2xl font-bold">
          <Link href="/">Stanley Wijaya</Link>
        </h1>

        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-3xl">
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="#about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:underline">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
          </li>
        </ul>

        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center space-y-8 z-40">
            <Link
              href="#about"
              className="text-4xl hover:underline"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-4xl hover:underline"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-4xl hover:underline"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
