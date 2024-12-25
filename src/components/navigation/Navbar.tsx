import React, { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { navItems } from './navItems';
import { GraduationCap } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900">د. أحمد حسن</span>
          </div>

          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <MobileMenu isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </header>
  );
};