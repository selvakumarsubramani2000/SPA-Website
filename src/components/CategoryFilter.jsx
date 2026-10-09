import React from 'react';
import { 
  LayoutGrid, 
  Armchair, 
  CookingPot, 
  UtensilsCrossed, 
  Wind, 
  Zap,
  SlidersHorizontal
} from 'lucide-react';
import { categories } from '../data/products';

const iconMap = {
  LayoutGrid,
  Armchair,
  CookingPot,
  UtensilsCrossed,
  Wind,
  Zap
};

export default function CategoryFilter({ 
  selectedCategory, 
  setSelectedCategory, 
  sortBy, 
  setSortBy,
  productCount 
}) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-20 z-30 shadow-xs py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          
          {/* Category Pills Slider */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const IconComponent = iconMap[cat.icon] || LayoutGrid;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                    isActive 
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25 scale-[1.02]' 
                      : 'bg-gray-100 hover:bg-gray-200/80 text-gray-700'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-amber-800 text-amber-100' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Sort & Count Info */}
          <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
            <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
              Showing <strong className="text-gray-900">{productCount}</strong> items
            </span>

            <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1.5 rounded-lg border border-gray-200">
              <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs font-semibold text-gray-700 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured / Best Deals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
