import React from 'react';

interface MilestoneProps {
  initials: string;
  name: string;
  year?: string;
  bgColor: string;
  textColor: string;
  borderColor?: string;
  isItalic?: boolean;
}

const Milestone: React.FC<MilestoneProps> = ({ initials, name, year, bgColor, textColor, borderColor, isItalic }) => (
  <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark p-2 z-10 transition-transform hover:scale-110 cursor-default">
    <div 
      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs ${bgColor} ${textColor} ${borderColor ? `border ${borderColor}` : ''} ${isItalic ? 'italic' : ''}`}
    >
      {initials}
    </div>
    <span className="text-[10px] uppercase font-bold tracking-wider">{name}</span>
    {year && <span className="font-hand font-bold text-lg md:absolute md:top-14 text-gray-500">{year}</span>}
  </div>
);

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="mb-32 py-12 border-t border-b border-gray-100 dark:border-gray-800">
      <div className="text-center mb-12">
        <p className="font-hand text-gray-500 dark:text-gray-400 text-lg">
          Development Roadmap &<br />System Milestones
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* SVG Curve Line - Hidden on Mobile */}
        <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-0 hidden md:block opacity-50">
          <svg width="100%" height="40" viewBox="0 0 800 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M20 20 C 150 25, 150 15, 280 20 C 410 25, 410 15, 540 20 C 670 25, 670 15, 780 20 L 770 15 M 780 20 L 770 25" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="text-gray-800 dark:text-gray-200"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 relative z-10">
          <Milestone 
            initials="R&D" 
            name="Research" 
            year="2024" 
            bgColor="bg-gray-900" 
            textColor="text-white" 
          />
          <Milestone 
            initials="MVP" 
            name="Prototype" 
            bgColor="bg-gray-700" 
            textColor="text-white" 
            isItalic 
          />
          <Milestone 
            initials="β" 
            name="Beta Test" 
            bgColor="bg-black" 
            textColor="text-white" 
            borderColor="border-gray-600" 
          />
          <Milestone 
            initials="AUD" 
            name="Audit" 
            bgColor="bg-red-500" 
            textColor="text-white" 
          />
          <Milestone 
            initials="LIVE" 
            name="Deploy" 
            year="2026" 
            bgColor="bg-indigo-100" 
            textColor="text-indigo-600" 
            borderColor="border-indigo-200" 
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;