
import React, { useState, useEffect } from 'react';
import { VehicleType, FilterState } from '../types';
import { useVehicles } from '../context/VehicleContext';
import VehicleCard from '../components/VehicleCard';
import FilterSidebar from '../components/FilterSidebar';
import { Filter } from 'lucide-react';

interface ListingProps {
  type: VehicleType;
}

const Listing: React.FC<ListingProps> = ({ type }) => {
  const { vehicles } = useVehicles();
  
  // FIXED: Set maxPrice to 1 Crore (10,000,000) by default so no vehicles are hidden
  const [filters, setFilters] = useState<FilterState>({
    type: type,
    minPrice: 0,
    maxPrice: 10000000, 
    brand: [],
    color: [],
    maxOwners: null
  });
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Update type filter when prop changes
  useEffect(() => {
    setFilters(prev => ({ ...prev, type }));
  }, [type]);

  const filteredVehicles = vehicles.filter(v => {
    if (filters.type && v.type !== filters.type) return false;
    if (v.price > filters.maxPrice) return false;
    if (filters.brand.length > 0 && !filters.brand.some(b => v.name.includes(b))) return false;
    if (filters.color.length > 0 && !filters.color.includes(v.color)) return false;
    if (filters.maxOwners !== null && v.owners > filters.maxOwners) return false;
    return true;
  });

  return (
    <div className="pt-24 pb-20 px-4 max-w-screen-xl mx-auto min-h-screen">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
            Buy {type}s
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {filteredVehicles.length} vehicles found
          </p>
        </div>
        
        <button 
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-semibold"
        >
          <Filter size={16} /> Filters
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Desktop */}
        <div className="hidden lg:block w-1/4">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        {/* Sidebar - Mobile */}
        {isMobileFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)}>
            <div 
              className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 p-4 overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="w-full lg:w-3/4">
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredVehicles.map(v => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-500">No vehicles match your criteria</h3>
              <button 
                onClick={() => setFilters(prev => ({...prev, maxPrice: 10000000, brand: [], color: []}))}
                className="mt-4 text-red-600 font-semibold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listing;
