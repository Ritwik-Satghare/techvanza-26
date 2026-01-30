import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Package, Recycle, Zap, Layers, Disc, Droplet } from 'lucide-react';

const categories = [
  { name: 'Plastic', icon: <Recycle className="w-8 h-8" />, desc: 'PET, HDPE, LDPE, PVC' },
  { name: 'Paper', icon: <Layers className="w-8 h-8" />, desc: 'Cardboard, Newsprint, Office' },
  { name: 'Metal', icon: <Package className="w-8 h-8" />, desc: 'Aluminum, Copper, Steel' },
  { name: 'Textile', icon: <Disc className="w-8 h-8" />, desc: 'Cotton, Wool, Synthetic' },
  { name: 'E-Waste', icon: <Zap className="w-8 h-8" />, desc: 'Circuits, Wires, Batteries' },
  { name: 'Glass', icon: <Droplet className="w-8 h-8" />, desc: 'Bottles, Broken Glass' },
];

const BrowseMaterials = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center text-gray-600 hover:text-[#2d5016] mb-8  font-medium  transition-all hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2d5016] font-['Archivo_Black'] mb-4">Browse by Category</h1>
          <p className="text-xl text-gray-600">Select a material type to view available listings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.name}
              onClick={() => navigate('/marketplace', { state: { category: cat.name } })}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-[#a4d65e] transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-[#e6f4d0] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2d5016] transition-colors duration-300">
                <div className="text-[#2d5016] group-hover:text-[#a4d65e] transition-colors duration-300">
                  {cat.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{cat.name}</h3>
              <p className="text-gray-500">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseMaterials;
