
import React from 'react';
import Hero from '../components/Hero';
import VehicleCard from '../components/VehicleCard';
import { TESTIMONIALS, FAQS } from '../constants';
import { useVehicles } from '../context/VehicleContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const { vehicles } = useVehicles();
  const featuredVehicles = vehicles.filter(v => v.featured);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Offer Banner */}
      <div className="bg-red-600 overflow-hidden py-3 relative">
        <motion.div 
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-white font-bold text-lg"
        >
          FLASH SALE: Get 0% financing on all electric vehicles this week! • 7-Day Money Back Guarantee • Free Home Delivery
        </motion.div>
      </div>

      {/* Featured Section */}
      <section className="py-20 px-4 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">Featured <span className="text-red-600">Inventory</span></h2>
          <p className="text-gray-600 dark:text-gray-400">Hand-picked vehicles just for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="#/cars" className="inline-block border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                View All Vehicles
            </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "140-Point Inspection", desc: "Every car passes a rigorous quality check." },
                    { title: "7-Day Return", desc: "Love it or return it for a full refund." },
                    { title: "Instant Finance", desc: "Paperless approval in under 5 minutes." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
                    >
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4 text-red-600">
                            <CheckCircle size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-gray-500">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 dark:text-white mb-12">Client <span className="text-red-600">Stories</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
                <div key={t.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-red-600 relative">
                    <div className="flex items-center gap-4 mb-4">
                        <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                            <p className="text-xs text-gray-500">{t.role}</p>
                        </div>
                    </div>
                    <div className="flex mb-3 text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">"{t.content}"</p>
                </div>
            ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                    <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="border border-gray-800 rounded-lg bg-gray-900 overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold hover:bg-gray-800 transition-colors"
            >
                {question}
                <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 pt-0 text-gray-400 border-t border-gray-800">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Home;
