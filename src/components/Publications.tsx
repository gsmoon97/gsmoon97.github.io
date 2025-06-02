
import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const Publications = () => {
  return (
    <div className="mb-8">
      <div className="border-2 border-blue-400 bg-blue-700 p-6">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6" />
          <h2 className="text-xl font-bold">PUBLICATIONS.bib</h2>
        </div>

        <div className="space-y-4">
          <div className="border-l-2 border-blue-400 pl-4">
            <div className="mb-2">
              <h3 className="text-lg font-semibold">ACL 2024 Papers</h3>
              <div className="text-blue-200 text-sm">Co-authored research publications</div>
            </div>
            <div className="text-sm space-y-1">
              <div className="flex">
                <span className="text-blue-300 mr-2">{'>'}</span>
                <span>Timeline summarisation research</span>
              </div>
              <div className="flex">
                <span className="text-blue-300 mr-2">{'>'}</span>
                <span>Word semantics analysis</span>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-blue-400 pl-4">
            <div className="flex items-center gap-2 mb-2">
              <ExternalLink className="w-4 h-4" />
              <a 
                href="https://scholar.google.com/citations?user=si3AXV8AAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white underline transition-colors"
              >
                View full publications on Google Scholar
              </a>
            </div>
            <div className="text-sm text-blue-300">
              User ID: si3AXV8AAAAJ
            </div>
          </div>

          <div className="bg-blue-800 p-4 rounded border border-blue-500">
            <div className="text-sm text-blue-200 mb-2">DEBUG_INFO:</div>
            <div className="text-xs space-y-1">
              <div>Research focus: Machine Learning, NLP, Multi-agent RL</div>
              <div>Publication venues: ACL, computational linguistics conferences</div>
              <div>Collaboration: ByteDance research team</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
