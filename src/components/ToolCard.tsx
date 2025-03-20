import React from 'react';
import { Tool } from '../types';
import * as Icons from 'lucide-react';
import { Star } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  viewMode: 'grid' | 'list';
}

export function ToolCard({ tool, viewMode }: ToolCardProps) {
  const Icon = Icons[tool.logo as keyof typeof Icons];
  
  const cardClass = viewMode === 'grid'
    ? 'w-full'
    : 'flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full';

  return (
    <div className={`
      bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow
      border border-gray-200 ${cardClass}
    `}>
      <div className={viewMode === 'grid' ? 'space-y-3 sm:space-y-4' : 'flex-1'}>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold">{tool.name}</h3>
        </div>
        
        <p className="text-sm sm:text-base text-gray-600 mt-2">{tool.description}</p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 text-xs sm:text-sm rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-3 sm:mt-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
            <span className="text-xs sm:text-sm text-gray-600">{tool.rating}</span>
          </div>
          
          <span className={`
            px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs sm:text-sm
            ${tool.pricing === 'Free' ? 'bg-green-100 text-green-700' :
              tool.pricing === 'Freemium' ? 'bg-blue-100 text-blue-700' :
              'bg-purple-100 text-purple-700'}
          `}>
            {tool.pricing}
          </span>
        </div>
        
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 text-white text-sm sm:text-base rounded-lg hover:bg-gray-800 transition-colors"
        >
          访问工具
        </a>
      </div>
    </div>
  );
}