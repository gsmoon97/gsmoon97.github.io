import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "M.S. Computer Science",
    school: "Columbia University",
    location: "New York, NY",
    period: "Sep 2025 - Dec 2026 (Expected)",
    bullets: [
      "Specialization: Machine Learning Track",
      "Teaching Assistant: High Performance Machine Learning (COMS 6998) with Prof. K. El Maghraoui",
      "Research Collaboration: Optimizing Granite Speech Model architectures with IBM Research",
      "Relevant Coursework: High Performance Machine Learning (A+), Neural Networks & Deep Learning (A)",
    ]
  },
  {
    degree: "B.Comp. Computer Science (Honors)",
    school: "National University of Singapore",
    location: "Singapore",
    period: "Aug 2019 - Jun 2022",
    bullets: [
      "Awarded Certificate of Distinction in Artificial Intelligence Focus Area",
      "Awarded Certificate of Merit in Database Systems Focus Area",
      "Relevant Coursework: Artificial Intelligence, Natural Language Processing, Computer Vision and Pattern Recognition, Database Systems, Big Data Systems for Data Science",
    ]
  }
];

const Education = () => {
  return (
    <div className="mb-8">
      <div className="border-2 border-blue-400 bg-blue-700 p-6">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6" />
          <h2 className="text-xl font-bold">EDUCATION.txt</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-blue-400 pl-4">
              <div className="mb-2">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <h3 className="text-lg font-semibold">{edu.school}</h3>
                </div>
                <div className="text-blue-200 text-sm">
                  <span>{edu.degree}</span> | <span>{edu.location}</span> | <span>{edu.period}</span>
                </div>
              </div>

              {edu.bullets.length > 0 && (
                <div className="mt-3">
                  {edu.bullets.map((bullet, bulletIndex) => (
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

export default Education;
