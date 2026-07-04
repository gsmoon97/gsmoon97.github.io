import React from 'react';
import { Cpu } from 'lucide-react';
import Section from './Section';
import { skills } from '@/data/resume';

const Skills = () => {
  return (
    <Section id="skills" icon={Cpu} title="SKILLS.dll">
      <div className="space-y-4">
        {skills.map((group, index) => (
          <div key={index} className="border-l-2 border-blue-400 pl-4">
            <div className="text-blue-200 text-sm mb-2">{group.category}</div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <span
                  key={i}
                  className="border border-blue-400 bg-blue-800 px-2 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
