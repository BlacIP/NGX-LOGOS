import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { LogoGrid } from './components/LogoGrid';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';
import { logos, categories } from './data/logos';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredLogos = useMemo(() => {
    return logos.filter(logo => {
      const matchesSearch = 
        logo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        logo.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        logo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        logo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = 
        selectedCategory === 'all' || 
        logo.category.toLowerCase() === selectedCategory.toLowerCase();
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                NGX Listed Companies Logo Collection
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A comprehensive open-source collection of Nigerian Exchange Group (NGX) listed company logos. 
                Download high-quality PNG (250px, 500px, 1000px) and SVG files for your projects, research, 
                or design work - completely free.
              </p>
            </div>
          </div>
        </div>
        
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />
        
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8" style={{ maxWidth: '90rem' }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">
              {filteredLogos.length} {filteredLogos.length === 1 ? 'Logo' : 'Logos'} Found
            </h3>
            
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                Clear search
              </button>
            )}
          </div>
          
          <LogoGrid logos={filteredLogos} />
        </div>
      </main>
      
      <Stats totalLogos={logos.length} />
      <Footer />
    </div>
  );
}

export default App;