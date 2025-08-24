import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import DashboardLayout from './components/DashboardLayout';
import DashboardApiPage from './pages/DashboardApiPage';
import DashboardBillingPage from './pages/DashboardBillingPage';
import DashboardStatsPage from './pages/DashboardStatsPage';
import Showcase from './components/ui/Showcase';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/showcase" element={<Showcase />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="api" element={<DashboardApiPage />} />
          <Route path="billing" element={<DashboardBillingPage />} />
          <Route path="stats" element={<DashboardStatsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
