import React from 'react';
import { FilterState, VehicleType } from '../types';

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  className?: string;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, setFilters, className }) => {
  
  // Define brands specific to each vehicle type
  const getBrandsByType = (type?: VehicleType) => {
    switch (type) {
      case VehicleType.CAR:
        return ['Tesla', 'Ford', 'BMW', 'Mercedes', 'Audi', 'Honda', 'Toyota', 'VW'];
      case VehicleType.BIKE:
        return ['Yamaha', 'Harley Davidson', 'Honda', 'BMW', 'Kawasaki', 'Ducati', 'Suzuki'];
      case VehicleType.VAN:
        return ['Mercedes', 'Ford', 'VW', 'Renault', 'Peugeot', 'Citroen'];
      default:
        // Fallback or show all if no specific type is selected (though Listing page always sets one)
        return ['Tesla', 'Ford', 'BMW', 'Mercedes', 'Audi', 'Honda', 'Toyota', 'Yamaha', 'Harley Davidson', 'VW'];
    }
  };

  const currentBrands = getBrandsByType(filters.type);
  const colors = ['Red', 'Blue', 'Black', 'White', 'Silver', 'Grey'];

  const handleBrandChange = (brand: string) => {
    setFilters(prev => ({
      ...prev,
      brand: prev.brand.includes(brand) 
        ? prev.brand.filter(b => b !== brand)
        : [...prev.brand, brand]
    }));
  };

  const handleColorChange = (color: string) => {
    setFilters(prev => ({
      ...prev,
      color: prev.color.includes(color)
        ? prev.color.filter(c => c !== color)
        : [...prev.color, color]
    }));
  };

  return (
    <div className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Filters</h3>
        <button 
          onClick={() => setFilters({ type: filters.type, minPrice: 0, maxPrice: 100000, brand: [], color: [], maxOwners: null })}
          className="text-xs text-red-600 hover:underline"
        >
          Reset All
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Budget</h4>
        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={filters.maxPrice}
          onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-red-600"
        />
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>$0</span>
          <span>${filters.maxPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Brand - Dynamic based on Vehicle Type */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          {filters.type ? `${filters.type} Brands` : 'Brands'}
        </h4>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
          {currentBrands.map(brand => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 p-1 rounded transition-colors">
              <input
                type="checkbox"
                checked={filters.brand.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Color</h4>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={`w-8 h-8 rounded-full border-2 ${filters.color.includes(color) ? 'border-red-600 scale-110' : 'border-transparent'} shadow-sm transition-transform`}
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Owners */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Owners</h4>
        <select
          value={filters.maxOwners || ''}
          onChange={(e) => setFilters(prev => ({ ...prev, maxOwners: e.target.value ? Number(e.target.value) : null }))}
          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5"
        >
          <option value="">Any</option>
          <option value="1">1 Owner</option>
          <option value="2">2 Owners</option>
          <option value="3">3+ Owners</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;