import React from 'react';
import { Recycle } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#1a2e0d] text-gray-300 py-12 border-t border-[#2d5016]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
           <Recycle className="w-6 h-6 text-[#a4d65e]" />
           <span className="text-xl font-bold text-white font-['Archivo_Black']">CircularConnect</span>
        </div>
        <p className="max-w-xs text-gray-400">
          Building the digital infrastructure for a waste-free India. 
          Connecting values, creating impact.
        </p>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-4">Platform</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-[#a4d65e] cursor-pointer">Marketplace</li>
          <li className="hover:text-[#a4d65e] cursor-pointer">Sell Waste</li>
          <li className="hover:text-[#a4d65e] cursor-pointer">Pricing Index</li>
          <li className="hover:text-[#a4d65e] cursor-pointer">EPR Services</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">Support</h4>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-[#a4d65e] cursor-pointer">Help Center</li>
          <li className="hover:text-[#a4d65e] cursor-pointer">Partner with us</li>
          <li className="hover:text-[#a4d65e] cursor-pointer">Privacy Policy</li>
          <li className="hover:text-[#a4d65e] cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-[#2d5016] text-sm text-center text-gray-500">
      © 2026 Circular Connect Pvt Ltd. Made for a cleaner India.
    </div>
  </footer>
);

export default Footer;