
import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    title: "LLM Training Operations Specialist",
    company: "ByteDance",
    location: "Singapore",
    period: "2023 – Present",
    bullets: [
      "Led a 100-annotator multi-agent RL data pipeline delivering 10K+ test cases.",
      "Co-authored two ACL 2024 papers on timeline summarisation & word semantics.",
      "Fine-tuned Llama 2, Mistral, FLAN-T5 with LoRA + 4-bit QLoRA."
    ]
  },
  {
    title: "M.S. Computer Science (Machine Learning Track)",
    company: "Columbia University",
    location: "New York, NY",
    period: "Starting Sep 2025",
    bullets: []
  }
];

const Experience = () => {
  return (
    <div className="mb-8">
      <div className="border-2 border-blue-400 bg-blue-700 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6" />
          <h2 className="text-xl font-bold">EXPERIENCE_DATA.log</h2>
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-blue-400 pl-4">
              <div className="mb-2">
                <div className="flex items-center gap-2 mb-1">
                  {exp.company === "Columbia University" ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : (
                    <Briefcase className="w-4 h-4" />
                  )}
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                </div>
                <div className="text-blue-200 text-sm">
                  <span>{exp.company}</span> | <span>{exp.location}</span> | <span>{exp.period}</span>
                </div>
              </div>
              
              {exp.bullets.length > 0 && (
                <div className="mt-3">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="text-sm mb-1 flex">
                      <span className="text-blue-300 mr-2">{'>'}</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
