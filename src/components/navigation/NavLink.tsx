import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
        onClick?.();
      }}
      className="text-gray-700 hover:text-emerald-600 transition-colors px-4 py-2 rounded-md text-lg"
    >
      {children}
    </a>
  );
};