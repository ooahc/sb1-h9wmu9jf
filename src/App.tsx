import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { SearchBar } from './components/SearchBar';
import { ToolCard } from './components/ToolCard';
import { ViewToggle } from './components/ViewToggle';
import { tools } from './data/tools';
import { ViewMode, SortOption } from './types';
import { SortAsc } from 'lucide-react';

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('rating');

  const filteredTools = useMemo(() => {
    return tools
      .filter((tool) => {
        const matchesSearch = 
          tool.name.toLowerCase().includes(search.toLowerCase()) ||
          tool.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
        const matchesCategory = 
          selectedCategory === 'All' || tool.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <SearchBar search={search} onSearchChange={setSearch} />
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <SortAsc className="h-5 w-5 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-white border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  <option value="rating">Rating</option>
                  <option value="name">Name</option>
                </select>
              </div>
              
              <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
            </div>
          </div>

          <div className={`
            grid gap-6
            ${viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
            }
          `}>
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} viewMode={viewMode} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;