import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import StockList from './components/StockList';
import AdBanner from './components/AdBanner';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content */}
      <main className="pb-16">
        <AdBanner />

        {/* Search Bar */}
        <div className="p-4 sticky top-0 bg-gray-50 z-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search stocks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white"
            />
          </div>
        </div>

        <StockList searchQuery={searchQuery} />
      </main>

      <BottomNav />
    </div>
  );
}

export default App;