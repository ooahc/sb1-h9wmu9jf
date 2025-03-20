import React from 'react';
import { Grid, List } from 'lucide-react';
import { ViewMode } from '../types';

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
      <button
        onClick={() => onViewModeChange('grid')}
        className={`p-2 rounded-md transition-colors ${
          viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'
        }`}
      >
        <Grid className="h-5 w-5" />
      </button>
      <button
        onClick={() => onViewModeChange('list')}
        className={`p-2 rounded-md transition-colors ${
          viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'
        }`}
      >
        <List className="h-5 w-5" />
      </button>
    </div>
  );
}