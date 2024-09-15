"use client";

import { useEffect } from "react";
import '../../styles/customCursor.css';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;

    // Gerakkan lingkaran sesuai dengan posisi kursor
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    // Hilangkan cursor saat keluar dari jendela browser
    const handleMouseLeaveWindow = () => {
      cursor.style.opacity = '0';
    };

    // Munculkan kembali cursor saat masuk ke dalam jendela browser
    const handleMouseEnterWindow = () => {
      cursor.style.opacity = '1';
    };

    // Saat hover di elemen pointer (seperti tombol, link), ubah ukuran dan warna lingkaran
    const handleMouseEnter = () => {
      cursor.classList.add('hovered');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hovered');
    };

    // Deteksi elemen yang menggunakan pointer
    const hoverElements = document.querySelectorAll('a, button, .hover-target');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeaveWindow);
    window.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
      window.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, []);

  return <div className="custom-cursor"></div>;
}
