import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import VehicleDetails from './pages/VehicleDetails';
import { VehicleType } from './types';
import { VehicleProvider } from './context/VehicleContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <VehicleProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300 font-sans">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Listing type={VehicleType.CAR} />} />
              <Route path="/bikes" element={<Listing type={VehicleType.BIKE} />} />
              <Route path="/vans" element={<Listing type={VehicleType.VAN} />} />
              <Route path="/vehicle/:id" element={<VehicleDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>

          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </VehicleProvider>
  );
};

export default App;