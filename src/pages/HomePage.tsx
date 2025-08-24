import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import GradientBackground from '../components/GradientBackground';
import MetaTags from '../components/MetaTags';


const HomePage: React.FC = () => {
  return (
    <GradientBackground>
      <MetaTags />
      <Navbar />
      <HeroSection />
      <Footer />
    </GradientBackground>
  );
};

export default HomePage;
