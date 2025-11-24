import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 pt-12 pb-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
              Red<span className="text-red-600">Velocity</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Experience the future of vehicle buying. Premium cars, bikes, and vans curated for excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#/cars" className="hover:text-red-600">Buy a Car</a></li>
              <li><a href="#/bikes" className="hover:text-red-600">Buy a Bike</a></li>
              <li><a href="#/vans" className="hover:text-red-600">Buy a Van</a></li>
              <li><a href="#/about" className="hover:text-red-600">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-red-600">Financing</a></li>
              <li><a href="#" className="hover:text-red-600">Return Policy</a></li>
              <li><a href="#" className="hover:text-red-600">Car Inspection</a></li>
              <li><a href="#/contact" className="hover:text-red-600">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-red-600" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-red-600" /> sales@redvelocity.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-red-600" /> 123 Neon Avenue, Tech City
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} RedVelocity Auto Sales. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;