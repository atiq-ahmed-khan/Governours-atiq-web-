import React from 'react';
import { Building2, Phone, Mail, MapPin, Calendar, Search, Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <NewsSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;