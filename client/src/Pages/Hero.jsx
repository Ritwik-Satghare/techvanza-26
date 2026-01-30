import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Recycle, 
  Leaf, 
  Package, 
  Coins, 
  Factory, 
  Trash2 
} from 'lucide-react';
import { IMPACT_STATS } from '../data/mockData';

const Hero = () => {
  const navigate = useNavigate();

  // Configuration for floating background icons
  const backgroundIcons = [
    { Icon: Trash2, color: 'text-gray-400', left: '10%', delay: '0s', duration: '15s' },
    { Icon: Leaf, color: 'text-green-400', left: '25%', delay: '2s', duration: '12s' },
    { Icon: Package, color: 'text-amber-700', left: '40%', delay: '5s', duration: '18s' },
    { Icon: Coins, color: 'text-yellow-500', left: '60%', delay: '1s', duration: '14s' },
    { Icon: Factory, color: 'text-gray-500', left: '80%', delay: '7s', duration: '20s' },
    { Icon: Recycle, color: 'text-emerald-600', left: '90%', delay: '3s', duration: '16s' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#fef3c7] via-[#f0fdf4] to-[#e6f4d0] min-h-[90vh] flex items-center">
      
      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(120vh) rotate(0deg); opacity: 0; }
          20% { opacity: 0.3; }
          80% { opacity: 0.3; }
          100% { transform: translateY(-20vh) rotate(360deg); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation-name: float-up;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>

      {/* --- BACKGROUND LAYER 1: The Massive Recycle Symbol --- */}
      <div className="absolute -right-20 -bottom-40 opacity-9 pointer-events-none">
        <Recycle size={600} className="text-[#2d5016] animate-spin-slow" />
      </div>

      {/* --- BACKGROUND LAYER 2: Floating Waste-to-Value Icons --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {backgroundIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute -bottom-20 ${item.color} opacity-20 animate-float`}
            style={{
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            <item.Icon size={48} />
          </div>
        ))}
      </div>

      {/* --- BACKGROUND LAYER 3: Image Texture Overlay --- */}
      <div 
        className="absolute top-0 right-0 w-2/3 h-full bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" 
        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
      ></div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:w-3/5">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2d5016]/10 text-[#2d5016] font-semibold text-sm mb-6 border border-[#2d5016]/20 backdrop-blur-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
            </span>
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
               onClick={() => navigate('/browse-materials')}
              className="px-8 py-4 bg-[#2d5016] text-white rounded-full font-bold text-lg hover:bg-[#264212] transition-all hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group" 
            >
              Browse Materials <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/sell-waste')}
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#2d5016] border-2 border-[#2d5016] rounded-full font-bold text-lg hover:bg-[#f0fdf4] transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              List Your Waste
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-[#2d5016]/20 pt-8">
            {IMPACT_STATS.map((stat, index) => (
              <div key={index} className="group cursor-default">
                <div className="text-3xl font-bold text-[#2d5016] group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;