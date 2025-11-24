import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Car, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Cars', path: '/cars' },
    { name: 'Bikes', path: '/bikes' },
    { name: 'Vans', path: '/vans' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <div className="relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
             <div className="relative bg-white dark:bg-black p-2 rounded-full border border-red-500">
                <Car className="w-6 h-6 text-red-600" />
             </div>
          </div>
          <span className="self-center text-2xl font-display font-bold whitespace-nowrap dark:text-white">
            Red<span className="text-red-600">Velocity</span>
          </span>
        </Link>
        
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3 items-center">
           <Link 
             to="/admin" 
             className="hidden md:flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 transition-colors mr-2"
             title="Admin Access"
           >
              <Lock size={14} /> Admin
           </Link>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-2 px-3 md:p-0 rounded md:bg-transparent transition-colors ${
                    isActive(link.path)
                      ? 'text-red-600 dark:text-red-500 font-bold'
                      : 'text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-red-500'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black"
          >
            <ul className="flex flex-col p-4 font-medium">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3 rounded ${
                      isActive(link.path)
                        ? 'bg-red-600 text-white'
                        : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
               <li className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 py-2 px-3 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500"
                  >
                    <Lock size={16} /> Admin Access
                  </Link>
               </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;