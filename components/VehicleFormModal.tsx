import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save } from 'lucide-react';
import { Vehicle, VehicleType } from '../types';

interface VehicleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (vehicle: Omit<Vehicle, 'id'>) => void;
  initialData?: Vehicle;
  title: string;
}

const VehicleFormModal: React.FC<VehicleFormModalProps> = ({ isOpen, onClose, onSubmit, initialData, title }) => {
  const [formData, setFormData] = useState<Omit<Vehicle, 'id'>>({
    name: '',
    type: VehicleType.CAR,
    price: 0,
    images: [],
    year: new Date().getFullYear(),
    mileage: 0,
    fuel: 'Petrol',
    transmission: 'Automatic',
    color: '',
    owners: 1,
    featured: false,
    description: ''
  });

  const [imagesInput, setImagesInput] = useState('');

  useEffect(() => {
    if (initialData) {
      const { id, ...rest } = initialData;
      setFormData(rest);
      setImagesInput(rest.images ? rest.images.join('\n') : '');
    } else {
      setFormData({
        name: '',
        type: VehicleType.CAR,
        price: 0,
        images: [],
        year: new Date().getFullYear(),
        mileage: 0,
        fuel: 'Petrol',
        transmission: 'Automatic',
        color: '',
        owners: 1,
        featured: false,
        description: ''
      });
      setImagesInput('');
    }
  }, [initialData, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
     setImagesInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process images input: split by newlines, trim, remove empty strings
    const imagesArray = imagesInput.split('\n').map(url => url.trim()).filter(url => url.length > 0);
    
    // If no images provided, use a placeholder
    const finalImages = imagesArray.length > 0 ? imagesArray : ['https://via.placeholder.com/800x600?text=No+Image'];

    onSubmit({
        ...formData,
        images: finalImages
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col max-h-[90vh]"
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 custom-scrollbar">
          <form id="vehicleForm" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Vehicle Name</label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none"
                placeholder="e.g. Tesla Model 3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none"
              >
                <option value={VehicleType.CAR}>Car</option>
                <option value={VehicleType.BIKE}>Bike</option>
                <option value={VehicleType.VAN}>Van</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price ($)</label>
              <input
                required
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Year</label>
              <input
                required
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mileage</label>
              <input
                required
                type="number"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Fuel Type</label>
              <select
                name="fuel"
                value={formData.fuel}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none"
              >
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Transmission</label>
              <select
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none"
              >
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Color</label>
              <input
                required
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Owners</label>
              <input
                required
                type="number"
                min="1"
                name="owners"
                value={formData.owners}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
              <textarea
                name="description"
                rows={3}
                value={formData.description || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none resize-none"
                placeholder="Detailed description of the vehicle..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URLs (One per line)</label>
              <textarea
                required
                rows={4}
                value={imagesInput}
                onChange={handleImagesChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none font-mono text-sm"
                placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
              />
              <p className="text-xs text-gray-500 mt-1">Enter multiple image URLs, one on each line. The first image will be the main thumbnail.</p>
            </div>

            <div className="md:col-span-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="featured" className="text-sm font-medium text-gray-700 dark:text-gray-300">Mark as Featured</label>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Cancel
          </button>
          <button type="submit" form="vehicleForm" className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-600/30 transition-all">
            <Save size={18} />
            Save Vehicle
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default VehicleFormModal;