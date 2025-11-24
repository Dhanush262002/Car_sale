import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Call
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="pt-24 pb-20 px-4 max-w-screen-xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Info */}
        <div>
          <h1 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Get in <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Have questions about a specific car or need financing help? Our team at Sree Thanya Cars is ready to assist you.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">sales@sreethanyacars.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Showroom</h3>
                <p className="text-gray-600 dark:text-gray-400">123 Neon Avenue, Tech City</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
          {submitted ? (
             <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                    <Send className="text-green-600 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">We'll get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-red-600 font-semibold hover:underline">Send another</button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                    <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={e => setFormState({...formState, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={e => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea 
                        required
                        rows={4}
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                        placeholder="I'm interested in the Tesla Model 3..."
                    ></textarea>
                </div>
                <button 
                    type="submit"
                    className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg hover:shadow-red-600/30 transition-all duration-300"
                >
                    Send Message
                </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;