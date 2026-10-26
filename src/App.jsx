import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import CoreExpertise from './components/sections/CoreExpertise';
import CareerTimeline from './components/sections/CareerTimeline';
import FeaturedProjects from './components/sections/FeaturedProjects';
import OperationsDemo from './components/sections/OperationsDemo';
import VendorLifecycle from './components/sections/VendorLifecycle';
import B2BSalesCaseStudy from './components/sections/B2BSalesCaseStudy';
import TenantSatisfaction from './components/sections/TenantSatisfaction';
import EducationAndTools from './components/sections/EducationAndTools';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Deep Navy Hero Section */}
        <HeroSection />

        {/* Clean Light Content Sections */}
        <AboutSection />
        <CoreExpertise />
        <CareerTimeline />
        <FeaturedProjects />
        <OperationsDemo />
        <VendorLifecycle />
        <B2BSalesCaseStudy />
        <TenantSatisfaction />
        <EducationAndTools />
        <ContactSection />
      </main>

      {/* Corporate Navy Footer */}
      <Footer />
    </div>
  );
}
