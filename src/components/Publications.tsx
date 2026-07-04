import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import Section from './Section';
import { publications, profile } from '@/data/resume';

const Publications = () => {
  return (
    <Section id="publications" icon={FileText} title="PUBLICATIONS.bib">
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="border-l-2 border-blue-400 pl-4">
            <div className="mb-2">
              <h3 className="text-lg font-semibold">{pub.venue}</h3>
              <div className="text-blue-200 text-sm">{pub.location}</div>
            </div>
            <div className="text-sm space-y-1">
              {pub.papers.map((paper, i) => (
                <div key={i} className="flex">
                  <span className="text-blue-200 mr-2">{'>'}</span>
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1 hover:text-white transition-colors"
                  >
                    <strong className="underline decoration-blue-400 underline-offset-2 group-hover:decoration-white">
                      {paper.title}
                    </strong>
                    <ExternalLink className="w-3 h-3 mt-1 shrink-0 opacity-70 group-hover:opacity-100" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-blue-800 p-4 rounded border border-blue-500">
          <div className="text-sm text-blue-200 mb-2">DEBUG_INFO:</div>
          <div className="text-xs space-y-1">
            <div className="flex items-center gap-2 mt-3">
              <ExternalLink className="w-3 h-3" />
              <a
                href={profile.links.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white underline transition-colors"
              >
                View full publications on Google Scholar
              </a>
            </div>
            <div className="text-blue-200">
              User ID: {profile.links.scholarId}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Publications;
