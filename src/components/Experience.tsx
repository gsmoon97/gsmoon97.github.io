import React from 'react';
import { Briefcase } from 'lucide-react';
import Section from './Section';
import { experience } from '@/data/resume';

const Experience = () => {
  return (
    <Section id="experience" icon={Briefcase} title="EXPERIENCE.log">
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-400 pl-4">
            <div className="mb-2">
              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="w-4 h-4" />
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
                    <span className="text-blue-200 mr-2">{'>'}</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
