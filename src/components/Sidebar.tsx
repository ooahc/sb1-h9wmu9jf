import React from 'react';
import { categories } from '../data/tools';

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function Sidebar({ selectedCategory, onCategoryChange }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 p-4 fixed left-0 top-0 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-6">Categories</h2>
      <nav>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onCategoryChange(category)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}