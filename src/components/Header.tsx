'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkModePreference);
    document.documentElement.classList.toggle('dark', darkModePreference);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2 && sectionTop > -section.offsetHeight / 2) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newDarkMode = !prev;
      localStorage.setItem('darkMode', newDarkMode.toString());
      document.documentElement.classList.toggle('dark', newDarkMode);
      return newDarkMode;
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 dark:bg-gray-900 text-white z-50 shadow-md transition-transform duration-300 ease-in-out">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} className="mr-2" />
          <h1 className="text-2xl font-bold">Jayme Aj Arns</h1>
        </div>
        <div className="block lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded transition-colors duration-300 hover:bg-gray-700 dark:hover:bg-gray-600"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
        <nav className={`lg:flex lg:items-center lg:gap-4 ${isMenuOpen ? 'block' : 'hidden'} lg:block transition-transform duration-300 ease-in-out`}>
          <Link
            href="#projects"
            className={`block px-3 py-2 rounded transition-colors duration-300 ${activeSection === 'projects' ? 'bg-gray-700 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-600'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#about"
            className={`block px-3 py-2 rounded transition-colors duration-300 ${activeSection === 'about' ? 'bg-gray-700 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-600'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className={`block px-3 py-2 rounded transition-colors duration-300 ${activeSection === 'contact' ? 'bg-gray-700 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-600'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <button
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-4 p-2 rounded transition-colors hover:bg-gray-700 dark:hover:bg-gray-600"
          >
            {isDarkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-400" />
            )}
          </button>
        </nav>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-gray-800 dark:bg-gray-900 text-white flex flex-col items-center justify-center ${isMenuOpen ? 'block' : 'hidden'} transition-opacity duration-300 ease-in-out`}>
        <Link
          href="#projects"
          className={`block px-4 py-2 text-xl rounded transition-colors duration-300 mb-4 ${activeSection === 'projects' ? 'bg-gray-700 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-600'}`}
          onClick={() => {
            setIsMenuOpen(false);
            setActiveSection('projects');
          }}
        >
          Projects
        </Link>
        <Link
          href="#about"
          className={`block px-4 py-2 text-xl rounded transition-colors duration-300 mb-4 ${activeSection === 'about' ? 'bg-gray-700 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-600'}`}
          onClick={() => {
            setIsMenuOpen(false);
            setActiveSection('about');
          }}
        >
          About
        </Link>
        <Link
          href="#contact"
          className={`block px-4 py-2 text-xl rounded transition-colors duration-300 mb-4 ${activeSection === 'contact' ? 'bg-gray-700 dark:bg-gray-600' : 'hover:bg-gray-700 dark:hover:bg-gray-600'}`}
          onClick={() => {
            setIsMenuOpen(false);
            setActiveSection('contact');
          }}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
