import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { SearchBar } from './components/SearchBar';
import { ToolCard } from './components/ToolCard';
import { ViewToggle } from './components/ViewToggle';
import { tools } from './data/tools';
import { ViewMode, SortOption } from './types';
import { SortAsc, Menu } from 'lucide-react';

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      {/* 移动端菜单按钮 */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-white rounded-lg shadow-md"
      >
        <Menu className="h-6 w-6 text-gray-700" />
      </button>
      
      <Sidebar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      <main className="p-4 pt-16 md:pt-4 md:p-8 md:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
            <SearchBar search={search} onSearchChange={setSearch} />
            
            <div className="flex items-center gap-4 self-end md:self-auto">
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
            grid gap-4 md:gap-6
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