import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMPACT_STATS } from '../Data/mockData';

const Hero = ({ setCurrentPage }) => (
  <div className="relative overflow-hidden bg-gradient-to-br from-[#fef3c7] to-[#e6f4d0] min-h-[90vh] flex items-center">
    <div className="absolute top-0 right-0 w-2/3 h-full bg-[url('[https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80](https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80)')] bg-cover bg-center opacity-10" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div className="lg:w-3/5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d5016]/10 text-[#2d5016] font-semibold text-sm mb-6 border border-[#2d5016]/20">
          <span className="flex h-2 w-2 rounded-full bg-green-600 animate-pulse"></span>
          Connecting Waste to Value
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#2d5016] leading-tight mb-6 font-['Archivo_Black']">
          Turn Waste Into <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5016] to-[#a4d65e]">
            Wealth & Impact
          </span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
          India's first transparent circular economy marketplace. We connect generators, recyclers, and manufacturers to ensure 100% traceability and fair pricing for every kg of waste.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setCurrentPage('marketplace')}
            className="px-8 py-4 bg-[#2d5016] text-white rounded-full font-bold text-lg hover:bg-[#264212] transition-transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2"
          >
            Browse Materials <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-white text-[#2d5016] border-2 border-[#2d5016] rounded-full font-bold text-lg hover:bg-[#f0fdf4] transition-all flex items-center justify-center gap-2">
            List Your Waste
          </button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-300/50 pt-8">
          {IMPACT_STATS.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-[#2d5016]">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
