import React from 'react';
import heroImage from '@/assets/hero-illustration.png';

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-hero-bg to-hero-accent rounded-lg p-8 text-white relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">XYYRRO UNIVERSAL STUDIOS PRIVATE LIMITED!</h2>
          <p className="text-white/90">Manage your payments and transactions efficiently</p>
        </div>
        <div className="hidden md:block">
          <img 
            src={heroImage} 
            alt="Business professional" 
            className="h-32 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;