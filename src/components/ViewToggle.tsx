import React from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { ViewMode } from '../types';

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  return (
    <div className="flex bg-gray-100 p-1 rounded-lg">
      <button
        onClick={() => onViewModeChange('grid')}
        className={`p-1.5 rounded-md transition-colors ${
          viewMode === 'grid'
            ? 'bg-white shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <LayoutGrid className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
      <button
        onClick={() => onViewModeChange('list')}
        className={`p-1.5 rounded-md transition-colors ${
          viewMode === 'list'
            ? 'bg-white shadow-sm'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <List className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}