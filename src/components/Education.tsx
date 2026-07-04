import React from 'react';
import { GraduationCap } from 'lucide-react';
import Section from './Section';
import { education } from '@/data/resume';

const Education = () => {
  return (
    <Section id="education" icon={GraduationCap} title="EDUCATION.txt">
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

export default Education;
