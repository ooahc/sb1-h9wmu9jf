import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({ search, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 sm:h-5 w-4 sm:w-5" />
      <input
        type="text"
        placeholder="搜索AI工具..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-shadow"
      />
    </div>
  );
}