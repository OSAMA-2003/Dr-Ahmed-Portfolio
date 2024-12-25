import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { navItems } from './navItems';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-gray-600 hover:text-emerald-600 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 left-0 bg-white shadow-lg py-4 px-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} onClick={onToggle}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};