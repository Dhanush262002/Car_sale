export enum VehicleType {
  CAR = 'Car',
  BIKE = 'Bike',
  VAN = 'Van'
}

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  price: number;
  images: string[];
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  color: string;
  owners: number;
  featured?: boolean;
  description?: string;
}

export interface FilterState {
  type?: VehicleType;
  minPrice: number;
  maxPrice: number;
  brand: string[];
  color: string[];
  maxOwners: number | null;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}