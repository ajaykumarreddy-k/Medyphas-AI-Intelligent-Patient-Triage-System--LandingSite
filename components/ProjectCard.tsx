import React from 'react';

interface ProjectCardProps {
  stage: string;
  title: string;
  description: string;
  icon: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  stage,
  title, 
  description,
  icon
}) => {
  return (
    <div className="group relative w-full h-[220px] bg-gray-50 dark:bg-[#18181b] rounded-2xl p-6 transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 flex flex-col justify-between overflow-hidden">
      
      {/* Header: Stage and Icon */}
      <div className="flex justify-between items-start w-full">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors">
          Stage {stage}
        </span>
        <span className="material-icons text-gray-300 dark:text-gray-600 text-[20px] group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          {icon}
        </span>
      </div>

      {/* Content: Title and Description */}
      <div className="mt-auto">
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white leading-tight">
          {title} 
        </h3>
        
        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 font-medium line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;