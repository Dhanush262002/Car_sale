import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 px-4 max-w-screen-xl mx-auto min-h-screen">
      
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">Driven by <span className="text-red-600">Passion</span></h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          RedVelocity was founded with a single mission: To revolutionize the way people buy and sell used vehicles through technology and transparency.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
            { label: "Vehicles Sold", value: "10k+" },
            { label: "Happy Customers", value: "98%" },
            { label: "Years Active", value: "12" },
            { label: "Team Members", value: "50+" },
        ].map((stat, i) => (
            <div key={i} className="p-8 bg-white dark:bg-gray-900 rounded-2xl text-center border border-gray-100 dark:border-gray-800">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm font-semibold uppercase">{stat.label}</div>
            </div>
        ))}
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
            <Shield className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Trust & Safety</h3>
            <p className="text-gray-600 dark:text-gray-400">Every transaction is secured, and every vehicle is verified against national databases for theft and accident history.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
            <Clock className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Efficiency</h3>
            <p className="text-gray-600 dark:text-gray-400">Our AI-powered platform speeds up the process, getting you behind the wheel faster than traditional dealerships.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl">
            <Award className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Quality First</h3>
            <p className="text-gray-600 dark:text-gray-400">We reject 70% of cars that apply to be listed. Only the best makes it to our inventory.</p>
        </div>
      </div>
    </div>
  );
};

export default About;