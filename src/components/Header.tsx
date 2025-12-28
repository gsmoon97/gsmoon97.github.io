import React from 'react';
import { ExternalLink, Download } from 'lucide-react';

const Header = () => {
  return (
    <div className="mb-12">
      {/* Main Hero Section - BSOD Style */}
      <div className="text-center mb-16">
        {/* Smiley Face */}
        <div className="mb-8">
          <div className="text-8xl mb-4">:)</div>
        </div>
        
        {/* Main BSOD Message */}
        <div className="space-y-6 text-xl">
          <div>Your device ran into a problem and needs to show a portfolio.</div>
          <div>We're just collecting some info about <strong>"Geonsik Moon"</strong>, and then we'll</div>
          <div>display it for you.</div>
        </div>

        {/* Progress */}
        <div className="mt-12 mb-8">
          <div className="text-2xl mb-4">100% complete</div>
        </div>

        {/* QR Code Placeholder and Contact Info */}
        <div className="mt-16 space-y-6">
          <div className="text-left max-w-2xl mx-auto">
            <div className="mb-4">For more information about this portfolio and possible opportunities,</div>
            <div className="flex items-center gap-2 mb-6">
              <ExternalLink className="w-4 h-4" />
              <a
                href="https://linkedin.com/in/gsmoon97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white underline transition-colors"
              >
                View full profile on LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Download className="w-4 h-4" />
              <a
                href="/Geonsik_Moon_Resume.pdf"
                download
                className="text-blue-200 hover:text-white underline transition-colors"
              >
                Download Resume
              </a>
              <span className="text-blue-200 text-sm ml-2">(Last updated: December 2025)</span>
            </div>

            <div className="mb-2">If you call a recruiter, give them this info:</div>
            <div className="bg-blue-800 border border-blue-400 px-4 py-2 inline-block">
              <span className="font-bold">Stop code: POTENTIAL_CANDIDATE_ALERT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Information Box */}
      <div className="border-2 border-blue-400 p-6 bg-blue-700 max-w-4xl mx-auto">
        <div className="mb-4">
          <h2 className="text-xl font-bold">GEONSIK_MOON.exe</h2>
        </div>
        
        <div className="space-y-2 text-sm">
          <div><span className="text-blue-200">Location:</span> New York, NY</div>
          <div><span className="text-blue-200">Current:</span> M.S. Computer Science (ML Track) @ Columbia University (Expected to graduate in Dec 2026)</div>
          <div><span className="text-blue-200">Next:</span> Looking for a full-time job (Expected to start from Jan 2027)</div>
          <div><span className="text-blue-200">Specialization:</span> AI/ML, Database Systems, LLM, NLP</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
