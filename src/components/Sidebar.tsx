import React from 'react';
import { categories } from '../data/tools';
import { X } from 'lucide-react';

interface SidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ selectedCategory, onCategoryChange, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* 移动端遮罩层 */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        w-64 h-screen bg-white border-r border-gray-200 p-4 fixed left-0 top-0 
        overflow-y-auto z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Categories</h2>
          <button 
            onClick={onClose}
            className="md:hidden p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => {
                    onCategoryChange(category);
                    if (window.innerWidth < 768) onClose();
                  }}
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
    </>
  );
}