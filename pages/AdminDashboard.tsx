import React, { useState } from 'react';
import { useVehicles } from '../context/VehicleContext';
import { Vehicle } from '../types';
import { Edit, Trash2, Plus, Search, Lock, LogIn } from 'lucide-react';
import VehicleFormModal from '../components/VehicleFormModal';
import { motion } from 'framer-motion';

const AdminDashboard: React.FC = () => {
  const { vehicles, deleteVehicle, addVehicle, updateVehicle } = useVehicles();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Thanya26@') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleAdd = () => {
    setEditingVehicle(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (vehicle: Vehicle) => {
    setEditingVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleSubmit = (vehicleData: Omit<Vehicle, 'id'>) => {
    if (editingVehicle) {
      updateVehicle(editingVehicle.id, vehicleData);
    } else {
      addVehicle(vehicleData);
    }
  };

  const filteredVehicles = vehicles.filter(v => 
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    v.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 w-full max-w-md"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600">
              <Lock size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">Admin Access</h2>
          <p className="text-center text-gray-500 mb-6">Enter password to manage inventory.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                autoFocus
              />
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2"
            >
              <LogIn size={20} /> Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4 max-w-screen-xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
            Inventory <span className="text-red-600">Management</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your listings, update prices, and track inventory.
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
        >
          <Plus size={20} /> Add Vehicle
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search inventory..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black/50 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Vehicle</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Year/Miles</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img 
                          src={vehicle.images && vehicle.images.length > 0 ? vehicle.images[0] : 'https://via.placeholder.com/50'} 
                          alt="" 
                          className="w-10 h-10 rounded-lg object-cover" 
                        />
                        {vehicle.name}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        vehicle.type === 'Car' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                        vehicle.type === 'Bike' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                      }`}>
                        {vehicle.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">
                      ${vehicle.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      {vehicle.year} • {vehicle.mileage.toLocaleString()} mi
                    </td>
                    <td className="px-6 py-4">
                      {vehicle.featured ? (
                        <span className="text-yellow-600 dark:text-yellow-400 text-xs font-bold flex items-center gap-1">Featured</span>
                      ) : (
                        <span className="text-gray-500 text-xs">Standard</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => handleEdit(vehicle)}
                          className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button 
                          onClick={() => deleteVehicle(vehicle.id)}
                          className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No vehicles found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 text-center">
            {filteredVehicles.length} vehicles total
        </div>
      </div>

      <VehicleFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editingVehicle}
        title={editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}
      />
    </div>
  );
};

export default AdminDashboard;