
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useVehicles } from '../context/VehicleContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Share2, Heart, Fuel, Gauge, Settings, Users, Calendar, CheckCircle } from 'lucide-react';
import { formatCurrency } from '../utils';

const VehicleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getVehicle } = useVehicles();
  const vehicle = getVehicle(id || '');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vehicle Not Found</h2>
        <Link to="/" className="text-red-600 hover:underline">Back to Home</Link>
      </div>
    );
  }

  // Ensure images array exists
  const images = vehicle.images && vehicle.images.length > 0 
    ? vehicle.images 
    : ['https://via.placeholder.com/1200x800?text=No+Image+Available'];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      
      {/* Breadcrumbs / Back */}
      <div className="max-w-screen-xl mx-auto px-4 mb-6">
        <Link to={`/${vehicle.type.toLowerCase()}s`} className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors">
          <ChevronLeft size={20} /> Back to {vehicle.type}s
        </Link>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
             <AnimatePresence mode='wait'>
                <motion.img 
                  key={activeImageIndex}
                  src={images[activeImageIndex]} 
                  alt={vehicle.name} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
             </AnimatePresence>
             <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-red-600 transition-colors">
                   <Heart size={20} />
                </button>
                <button className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors">
                   <Share2 size={20} />
                </button>
             </div>
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
             {images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImageIndex === idx ? 'border-red-600 scale-95' : 'border-transparent hover:border-gray-400'}`}
                >
                   <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
             ))}
          </div>
        </div>

        {/* Right: Info */}
        <div>
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded-full mb-3">
               {vehicle.year} • {vehicle.type}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {vehicle.name}
          </h1>

          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-4xl font-bold text-red-600">{formatCurrency(vehicle.price)}</span>
            <span className="text-gray-500 dark:text-gray-400 line-through text-lg">
                {formatCurrency(vehicle.price * 1.05)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="p-2 bg-white dark:bg-black rounded-lg text-red-600"><Gauge size={20}/></div>
                  <div>
                      <div className="text-xs text-gray-500">Mileage</div>
                      <div className="font-bold text-gray-900 dark:text-white">{vehicle.mileage.toLocaleString()} mi</div>
                  </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="p-2 bg-white dark:bg-black rounded-lg text-red-600"><Fuel size={20}/></div>
                  <div>
                      <div className="text-xs text-gray-500">Fuel</div>
                      <div className="font-bold text-gray-900 dark:text-white">{vehicle.fuel}</div>
                  </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="p-2 bg-white dark:bg-black rounded-lg text-red-600"><Settings size={20}/></div>
                  <div>
                      <div className="text-xs text-gray-500">Transmission</div>
                      <div className="font-bold text-gray-900 dark:text-white">{vehicle.transmission}</div>
                  </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="p-2 bg-white dark:bg-black rounded-lg text-red-600"><Users size={20}/></div>
                  <div>
                      <div className="text-xs text-gray-500">Owners</div>
                      <div className="font-bold text-gray-900 dark:text-white">{vehicle.owners}</div>
                  </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="p-2 bg-white dark:bg-black rounded-lg text-red-600"><Calendar size={20}/></div>
                  <div>
                      <div className="text-xs text-gray-500">Year</div>
                      <div className="font-bold text-gray-900 dark:text-white">{vehicle.year}</div>
                  </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                  <div className="p-2 bg-white dark:bg-black rounded-lg text-red-600"><div className="w-5 h-5 rounded-full border border-gray-300" style={{backgroundColor: vehicle.color.toLowerCase()}}></div></div>
                  <div>
                      <div className="text-xs text-gray-500">Color</div>
                      <div className="font-bold text-gray-900 dark:text-white">{vehicle.color}</div>
                  </div>
              </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Description</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
               {vehicle.description || "No description provided for this vehicle."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
             <Link 
               to="/contact"
               className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/30 text-center transition-all"
            >
               Contact Seller
            </Link>
             <button className="flex-1 py-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-red-600 dark:hover:border-red-600 text-gray-900 dark:text-white font-bold rounded-xl transition-all">
               Schedule Test Drive
            </button>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
             <div className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500"/> Verified Seller</div>
             <div className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500"/> Inspected</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
