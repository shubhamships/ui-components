import { useLocation, Route, Routes, Link } from 'react-router-dom';
import { Card } from './components/Card';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import { Orders } from './pages/Orders';
import { Box } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Root = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const handleRouteChange = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000); 
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-20 hover:w-40 border-r-2 border-gray-300">
        <Navbar />
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6">
        {/* Dashboard Content */}
        <Dashboard />

        {/* Cards */}
        <div className="grid grid-cols-4 gap-4">
          <div className="relative">
            <Link to="/orders" onClick={handleRouteChange}>
              <Card
                icon={<Box />}
                title="All Orders"
                number={4}
                gradientFrom="from-blue-100"
                gradientTo="to-white"
              />
            </Link>
          </div>
          <div className="relative">
            <Card
              icon={<Box />}
              title="Drafted Orders"
              number={0}
              gradientFrom="from-green-100"
              gradientTo="to-white"
            />
          </div>
          <div className="relative">
            <Card
              icon={<Box />}
              title="Pending Orders"
              number={0}
              gradientFrom="from-red-100"
              gradientTo="to-white"
            />
          </div>
          <div className="relative">
            <Card
              icon={<Box />}
              title="Packed Orders"
              number={0}
              gradientFrom="from-orange-100"
              gradientTo="to-white"
            />
          </div>
        </div>

        {/* Loader (the transition effect) */}
        {loading && (
          <div className="loader absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-10 transition-all duration-300" />
        )}

        {/* Motion wrapper for route transitions */}
        <motion.div
          key={location.pathname} // Ensures page transitions are triggered when path changes
          initial={{ opacity: 0, x: 100 }} // Initial state (off-screen)
          animate={{ opacity: 1, x: 0 }} // Final state (on-screen)
          exit={{ opacity: 0, x: -100 }} // Exit state (off-screen to the left)
          transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
        >
          <Routes location={location}>
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </motion.div>
      </div>
    </div>
  );
};

export default Root;
