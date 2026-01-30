import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { MOCK_LISTINGS } from '../Data/mockData';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredListings = MOCK_LISTINGS.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || item.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-[#f9fafb] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-[#2d5016] mb-2">Live Marketplace</h2>
            <p className="text-gray-600">Find verified recyclable materials from trusted sources.</p>
          </div>
          
          <div className="flex w-full md:w-auto gap-3">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search materials, city..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#a4d65e] focus:border-transparent outline-none shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-white p-3 rounded-xl border border-gray-200 hover:bg-gray-50 shadow-sm text-[#2d5016]">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 overflow-x-auto pb-6 mb-2 no-scrollbar">
          {["All", "Plastic", "Metal", "Paper", "Textile", "E-Waste"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                activeFilter === cat 
                  ? "bg-[#2d5016] text-white shadow-md" 
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    item.type === 'Plastic' ? 'bg-blue-100 text-blue-800' :
                    item.type === 'Metal' ? 'bg-orange-100 text-orange-800' :
                    item.type === 'Paper' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {item.type}
                  </div>
                  {item.verified && (
                    <div className="flex items-center text-[#2d5016] text-xs font-bold bg-[#e6f4d0] px-2 py-1 rounded-md">
                      <ShieldCheck className="w-3 h-3 mr-1" /> Verified
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#2d5016] transition-colors">{item.title}</h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-[#a4d65e]" />
                  {item.location} <span className="mx-2">•</span> {item.distance} away
                </div>

                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">Quantity</span>
                    <span className="font-bold text-gray-800">{item.quantity}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">Asking Price</span>
                    <span className="font-bold text-[#2d5016] text-lg">{item.price}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                    <span className="text-xs text-gray-400">Est. Market Value</span>
                    <span className="text-xs font-medium text-gray-500">{item.marketPrice}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-[#2d5016] text-white font-bold py-3 rounded-xl hover:bg-[#223d11] transition-colors flex items-center justify-center gap-2">
                    Buy Now
                  </button>
                  <button className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600">
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Blockchain Footer */}
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex justify-between items-center">
                <div className="flex items-center text-xs text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-[#a4d65e] mr-2"></div>
                  Block ID: {item.traceId}
                </div>
                <span className="text-xs font-bold text-[#2d5016]">{item.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
