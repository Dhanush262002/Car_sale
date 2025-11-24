
import React from 'react';
import { motion } from 'framer-motion';
import { Fuel, Gauge, Settings, Users } from 'lucide-react';
import { Vehicle } from '../types';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  // Use first image as thumbnail or fallback
  const mainImage = vehicle.images && vehicle.images.length > 0 
    ? vehicle.images[0] 
    : 'https://via.placeholder.com/800x600?text=No+Image';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-900/10 dark:hover:shadow-red-900/20 transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={mainImage}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
          {vehicle.year}
        </div>
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {vehicle.type}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 truncate">{vehicle.name}</h3>
        <p className="text-2xl font-display font-bold text-red-600 mb-4">
          {formatCurrency(vehicle.price)}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <Gauge size={14} className="text-red-500" />
            <span>{vehicle.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <Fuel size={14} className="text-red-500" />
            <span>{vehicle.fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <Settings size={14} className="text-red-500" />
            <span>{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <Users size={14} className="text-red-500" />
            <span>{vehicle.owners} Owner{vehicle.owners > 1 ? 's' : ''}</span>
          </div>
        </div>

        <Link 
          to={`/vehicle/${vehicle.id}`}
          className="block w-full text-center py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-red-600 dark:hover:bg-red-600 text-gray-900 dark:text-white hover:text-white font-semibold rounded-lg transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
