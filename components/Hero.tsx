import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const words = ["Dream Car", "Perfect Bike", "Ideal Van"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-200 dark:border-gray-800 rounded-full opacity-30 pointer-events-none"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-200 dark:border-gray-800 rounded-full opacity-30 pointer-events-none"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-semibold mb-4 border border-red-200 dark:border-red-900/50">
              New: AI-Powered Search
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white leading-tight">
              Find Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 relative">
                <AnimatePresence mode='wait'>
                    <motion.span
                        key={textIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        {words[textIndex]}
                    </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mt-4">
              Premium pre-owned vehicles checked, certified, and delivered to your doorstep. Experience the velocity of modern car buying.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#/cars" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all flex items-center justify-center gap-2 group">
              View Inventory <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#/contact" className="px-8 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-red-600 dark:hover:border-red-600 font-bold rounded-lg transition-colors flex items-center justify-center">
              Sell Your Car
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          {/* Glassmorphism Card Effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent backdrop-blur-md rounded-3xl transform rotate-3 scale-95 border border-white/10 z-0"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Car" 
            className="relative z-10 rounded-3xl shadow-2xl shadow-red-900/20 transform hover:-translate-y-2 transition-transform duration-500 w-full object-cover h-[500px]"
          />

          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 z-20 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-green-600 dark:text-green-400 font-bold">
                100%
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Quality Checked</p>
                <p className="font-bold text-gray-900 dark:text-white">Certified Vehicles</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;