import React from 'react';
import { SquareTerminal } from 'lucide-react';

const navItems = [
  { href: '#experience', label: 'EXP' },
  { href: '#education', label: 'EDU' },
  { href: '#publications', label: 'PUBS' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#contact', label: 'CONTACT' },
];

const Taskbar = () => {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-blue-400 bg-blue-800 font-mono"
    >
      <div className="container mx-auto flex max-w-4xl items-center gap-1 overflow-x-auto px-2 py-2">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2 border border-blue-400 bg-blue-700 px-3 py-1 text-xs font-bold hover:bg-blue-600 transition-colors"
        >
          <SquareTerminal className="h-4 w-4" />
          <span className="hidden sm:inline">PORTFOLIO_OS</span>
        </a>

        <div className="ml-auto flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 border border-blue-400 px-2 py-1 text-xs hover:bg-blue-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Taskbar;
