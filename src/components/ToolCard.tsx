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
    : 'flex items-start gap-6 w-full';

  return (
    <div className={`
      bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow
      border border-gray-200 ${cardClass}
    `}>
      <div className={viewMode === 'grid' ? 'space-y-4' : 'flex-1'}>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Icon className="h-6 w-6 text-gray-700" />
          </div>
          <h3 className="text-lg font-semibold">{tool.name}</h3>
        </div>
        
        <p className="text-gray-600 mt-2">{tool.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{tool.rating}</span>
          </div>
          
          <span className={`
            px-2 py-1 rounded-md text-sm
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
          className="inline-block mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Visit Tool
        </a>
      </div>
    </div>
  );
}