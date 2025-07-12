"use client";

import { useState, useEffect } from 'react';

function scrollToSection(id: string) {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Namkeen", href: "#namkeen" },
  { name: "Sweets", href: "#sweets" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-md border-b border-white/20 shadow-2xl' 
        : 'bg-white/5 backdrop-blur-sm border-b border-white/10 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                <div className="text-2xl animate-pulse">🍯</div>
                <span className="text-2xl font-display font-extrabold bg-gradient-to-r from-[#E63946] to-[#FF6B6B] bg-clip-text text-transparent tracking-tight drop-shadow-sm">
                  Happy Namkeen
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => {
                      const id = link.href.replace('#', '');
                      scrollToSection(id);
                    }}
                    className={`relative font-display font-semibold px-6 py-3 rounded-full transition-all duration-300 group ${
                      isActive 
                        ? 'text-white bg-gradient-to-r from-[#E63946] to-[#FF6B6B] shadow-lg transform scale-105' 
                        : 'text-[#4B4B4B] hover:text-white hover:bg-gradient-to-r hover:from-[#FFB703] hover:to-[#FF8500] hover:shadow-lg hover:transform hover:scale-105'
                    }`}
                  >
                    {/* Animated background */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#E63946] to-[#FF6B6B] opacity-100' 
                        : 'bg-gradient-to-r from-[#FFB703] to-[#FF8500] opacity-0 group-hover:opacity-100'
                    }`}></div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#E63946] blur-md opacity-30' 
                        : 'bg-[#FFB703] blur-md opacity-0 group-hover:opacity-30'
                    }`}></div>
                    
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-[#4B4B4B] hover:text-[#E63946] transition-colors duration-200 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB703] to-transparent"></div>
    </nav>
  );
}