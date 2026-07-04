import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  icon: LucideIcon;
  title: string;
  iconClassName?: string;
  children: React.ReactNode;
}

const Section = ({ id, icon: Icon, title, iconClassName, children }: SectionProps) => {
  return (
    <section id={id} className="mb-8 scroll-mt-6">
      <div className="border-2 border-blue-400 bg-blue-700 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Icon className={cn('w-6 h-6', iconClassName)} />
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
