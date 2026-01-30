import React from 'react';
import { Users, Factory, CheckCircle2 } from 'lucide-react';

const About = () => (
  <div className="bg-white min-h-screen">
    {/* Mission Header */}
    <div className="bg-[#2d5016] text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Archivo_Black']">Fixing the Broken Loop</h1>
      <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
        India generates 377 million tons of waste annually. 70% is lost. 
        We are building the digital infrastructure to capture it.
      </p>
    </div>

    {/* The Problem Grid */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why We Exist</h2>
        <p className="text-gray-500">The current ecosystem works in silos. We bring it together.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-8 bg-gray-50 rounded-3xl hover:bg-[#fef9e7] transition-colors duration-300">
          <div className="w-14 h-14 bg-[#2d5016] rounded-2xl flex items-center justify-center mb-6">
            <Users className="w-7 h-7 text-[#a4d65e]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusive Growth</h3>
          <p className="text-gray-600 leading-relaxed">
            Onboarding informal waste workers with digital identities and simplified wallets, giving them access to fair market prices for the first time.
          </p>
        </div>

        <div className="p-8 bg-gray-50 rounded-3xl hover:bg-[#fef9e7] transition-colors duration-300">
          <div className="w-14 h-14 bg-[#0891b2] rounded-2xl flex items-center justify-center mb-6">
            <Factory className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Ready</h3>
          <p className="text-gray-600 leading-relaxed">
            Helping manufacturers source verified, high-quality recycled materials to meet EPR targets without the hassle of unorganized vendors.
          </p>
        </div>

        <div className="p-8 bg-gray-50 rounded-3xl hover:bg-[#fef9e7] transition-colors duration-300">
          <div className="w-14 h-14 bg-[#78350f] rounded-2xl flex items-center justify-center mb-6">
            <CheckCircle2 className="w-7 h-7 text-[#a4d65e]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">100% Transparency</h3>
          <p className="text-gray-600 leading-relaxed">
            Every transaction is recorded. From collection to remanufacturing, we provide blockchain-inspired provenance for total trust.
          </p>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="bg-[#a4d65e] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d5016] mb-8">Ready to close the loop?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-[#2d5016] text-white rounded-full font-bold text-lg hover:bg-[#1a300d] shadow-xl">
            Register as Recycler
          </button>
          <button className="px-8 py-4 bg-white text-[#2d5016] rounded-full font-bold text-lg hover:bg-gray-100 shadow-xl">
            Register as Generator
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default About;