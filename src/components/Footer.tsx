
import React from 'react';
import { AlertTriangle, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <div className="space-y-6">
      <div className="border-2 border-blue-400 bg-blue-700 p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6" />
          <h2 className="text-xl font-bold">CONTACT_PROTOCOLS.sys</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span className="text-blue-200">GitHub:</span>
            <span>github.com/geonsik</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <span className="text-blue-200">LinkedIn:</span>
            <span>linkedin.com/in/geonsik</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="text-blue-200">Email:</span>
            <span>contact@geonsik.dev</span>
          </div>
        </div>
      </div>

      <div className="text-center text-sm space-y-2">
        <div className="border-t-2 border-blue-400 pt-4">
          <div className="text-blue-200">
            If this portfolio helped, you can restart your search or contact Geonsik Moon directly.
          </div>
          <div className="text-xs mt-2 opacity-75">
            PORTFOLIO_OS Version 2024.12 | Build: BSOD_THEME_v1.0 | Uptime: ∞
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
