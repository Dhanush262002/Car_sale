import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Vehicle, VehicleType } from '../types';
import { MOCK_VEHICLES } from '../constants';

interface VehicleContextType {
  vehicles: Vehicle[];
  addVehicle: (vehicle: Omit<Vehicle, 'id'>) => void;
  updateVehicle: (id: string, updatedVehicle: Partial<Vehicle>) => void;
  deleteVehicle: (id: string) => void;
  getVehicle: (id: string) => Vehicle | undefined;
}

const VehicleContext = createContext<VehicleContextType | undefined>(undefined);

export const VehicleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize from local storage or mock data
  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    const saved = localStorage.getItem('vehicles');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Migration logic: check if data needs updates
      return parsed.map((v: any) => ({
        ...v,
        images: v.images || (v.image ? [v.image] : ['https://picsum.photos/800/600']), // Backwards compatibility
        description: v.description || "No description available for this vehicle."
      }));
    }
    return MOCK_VEHICLES;
  });

  // Persist to local storage whenever vehicles change
  useEffect(() => {
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
  }, [vehicles]);

  const addVehicle = (vehicleData: Omit<Vehicle, 'id'>) => {
    const newVehicle: Vehicle = {
      ...vehicleData,
      id: Math.random().toString(36).substr(2, 9),
    };
    setVehicles(prev => [newVehicle, ...prev]);
  };

  const updateVehicle = (id: string, updatedVehicle: Partial<Vehicle>) => {
    setVehicles(prev => prev.map(v => (v.id === id ? { ...v, ...updatedVehicle } : v)));
  };

  const deleteVehicle = (id: string) => {
    setVehicles(prev => prev.filter(v => v.id !== id));
  };

  const getVehicle = (id: string) => {
    return vehicles.find(v => v.id === id);
  };

  return (
    <VehicleContext.Provider value={{ vehicles, addVehicle, updateVehicle, deleteVehicle, getVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicles = () => {
  const context = useContext(VehicleContext);
  if (context === undefined) {
    throw new Error('useVehicles must be used within a VehicleProvider');
  }
  return context;
};