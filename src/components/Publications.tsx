import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

const publications = [
  {
    venue: "ACL 2024",
    location: "Bangkok, Thailand",
    papers: [
      "From Moments to Milestones: Incremental Timeline Summarization Leveraging Large Language Models",
      "Are Decoder-Only Language Models Better than Encoder-Only Language Models in Understanding Word Meaning?"
    ]
  },
  {
    venue: "IJCNLP-AACL 2023",
    location: "Bali, Indonesia",
    papers: [
      "WAMP: Writing, Annotation, and Marking Platform"
    ]
  },
  {
    venue: "EACL 2023",
    location: "Dubrovnik, Croatia",
    papers: [
      "ALLECS: A Lightweight Language Error Correction System"
    ]
  }
];

const Publications = () => {
  return (
    <div className="mb-8">
      <div className="border-2 border-blue-400 bg-blue-700 p-6">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6" />
          <h2 className="text-xl font-bold">PUBLICATIONS.bib</h2>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="border-l-2 border-blue-400 pl-4">
              <div className="mb-2">
                <h3 className="text-lg font-semibold">{pub.venue}</h3>
                <div className="text-blue-200 text-sm">{pub.location}</div>
              </div>
              <div className="text-sm space-y-1">
                {pub.papers.map((title, i) => (
                  <div key={i} className="flex">
                    <span className="text-blue-300 mr-2">{'>'}</span>
                    <span><strong>{title}</strong></span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-blue-800 p-4 rounded border border-blue-500">
            <div className="text-sm text-blue-200 mb-2">DEBUG_INFO:</div>
            <div className="text-xs space-y-1">
              {/* <div>Research alignment: NLP meets LLMs, with a side quest in GEC tooling.</div>
              <div>Published across top-tier venues: ACL, EACL, IJCNLP-AACL.</div>
              <div>Field-tested with LoRA, LangChain, and ChromaDB.</div> */}
              <div className="flex items-center gap-2 mt-3">
                <ExternalLink className="w-3 h-3" />
                <a
                  href="https://scholar.google.com/citations?user=si3AXV8AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white underline transition-colors"
                >
                  View full publications on Google Scholar
                </a>
              </div>
              <div className="text-blue-300">
                User ID: si3AXV8AAAAJ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
