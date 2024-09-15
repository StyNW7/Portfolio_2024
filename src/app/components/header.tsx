// src/app/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-700 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-10">
        <h1 className="text-2xl font-bold">
          <Link href="/">My Portfolio</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link href="#projects" className="hover:underline">Projects</Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
