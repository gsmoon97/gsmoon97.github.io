import React, { useEffect, useState } from 'react';
import { AlertTriangle, Github, Mail } from 'lucide-react';
import Section from './Section';
import { diagnostics, profile } from '@/data/resume';

const FunnyFooter = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const random = diagnostics[Math.floor(Math.random() * diagnostics.length)];
    setMessage(random);
  }, []);

  return (
    <div className="space-y-6">
      <Section id="contact" icon={AlertTriangle} iconClassName="text-yellow-300" title="CONTACT_PROTOCOLS.sys">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4 text-blue-200" />
            <span className="text-blue-200">GitHub:</span>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-white transition text-blue-200"
            >
              github.com/gsmoon97
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-200" />
            <span className="text-blue-200">Email:</span>
            <a
              href={`mailto:${profile.links.email}`}
              className="hover:underline hover:text-white transition text-blue-200"
            >
              {profile.links.email}
            </a>
          </div>
        </div>
      </Section>

      <div className="text-center text-sm space-y-2">
        <div className="border-t-2 border-blue-400 pt-4">
          <div className="text-blue-100 italic">{message}</div>
          <div className="text-xs mt-2 opacity-75">
            SYSTEM: PORTFOLIO_OS v2025.10 · Build: BSOD_THEME_v1.0 · Stability: Unstable but compiling...
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunnyFooter;
