import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  UploadCloud, 
  MapPin, 
  Package, 
  DollarSign, 
  Tag 
} from 'lucide-react';

const ListWaste = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    type: 'Plastic',
    quantity: '',
    price: '',
    marketPrice: '',
    address: '',
    city: '',
    state: '',
    seller: '',
    grade: 'Mixed'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Listing:", formData);
    alert("Listing submitted successfully! It will be verified shortly.");
    navigate('/marketplace');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-['DM_Sans']">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center text-gray-600 hover:text-[#2d5016] cursor-pointer mb-8  font-medium  transition-all hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-[#2d5016] px-8 py-6">
            <h1 className="text-2xl font-bold text-white font-['Archivo_Black']">List Your Waste</h1>
            <p className="text-green-100 mt-2">Fill in the details below to connect with verified recyclers.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            
            {/* Basic Info Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                <Package className="w-5 h-5 text-[#a4d65e]" /> Material Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Listing Title</label>
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="e.g. Bulk PET Bottles from Factory"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a4d65e] focus:ring-2 focus:ring-[#a4d65e]/20 outline-none transition-all"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Material Type</label>
                  <select
                    name="type"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a4d65e] focus:ring-2 focus:ring-[#a4d65e]/20 outline-none bg-white transition-all"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option>Plastic</option>
                    <option>Paper</option>
                    <option>Metal</option>
                    <option>Textile</option>
                    <option>E-Waste</option>
                    <option>Glass</option>
                    <option>Rubber</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quality Grade</label>
                  <select
                    name="grade"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a4d65e] focus:ring-2 focus:ring-[#a4d65e]/20 outline-none bg-white transition-all"
                    value={formData.grade}
                    onChange={handleChange}
                  >
                    <option>Grade A (Clean/Sorted)</option>
                    <option>Grade B (Semi-Clean)</option>
                    <option>Mixed / Unsorted</option>
                    <option>Recycled Granules</option>
                    <option>Scrap / Raw</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity (with Unit)</label>
                  <input
                    type="text"
                    name="quantity"
                    required
                    placeholder="e.g. 500 kg, 2 Tons"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a4d65e] focus:ring-2 focus:ring-[#a4d65e]/20 outline-none transition-all"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#a4d65e]" /> Pricing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Asking Price</label>
                  <input
                    type="text"
                    name="price"
                    required
                    placeholder="e.g. ₹45/kg"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a4d65e] focus:ring-2 focus:ring-[#a4d65e]/20 outline-none transition-all"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Est. Market Price (Optional)</label>
                  <input
                    type="text"
                    name="marketPrice"
                    placeholder="e.g. ₹48/kg"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a4d65e] focus:ring-2 focus:ring-[#a4d65e]/20 outline-none transition-all"
                    value={formData.marketPrice}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#a4d65e]" /> Pickup Location
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                  <textarea
                    name="address"
                    required
                    rows="3"
                    placeholder="Street, Area, Landmark..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a4d65e] focus:ring-2 focus:ring-[#a4d65e]/20 outline-none transition-all resize-none"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="e.g. Pune"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a4d65e] focus:ring-2 focus:ring-[#a4d65e]/20 outline-none transition-all"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    required
                    placeholder="e.g. Maharashtra"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a4d65e] focus:ring-2 focus:ring-[#a4d65e]/20 outline-none transition-all"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Seller Info Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                <Tag className="w-5 h-5 text-[#a4d65e]" /> Seller Info
              </h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Seller/Business Name</label>
                <input
                  type="text"
                  name="seller"
                  required
                  placeholder="e.g. EcoTextiles Pvt Ltd"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#a4d65e] focus:ring-2 focus:ring-[#a4d65e]/20 outline-none transition-all"
                  value={formData.seller}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#2d5016] text-white font-bold text-xl py-4 rounded-xl hover:bg-[#223d11] transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-3"
              >
                <UploadCloud className="w-6 h-6" /> Post Listing
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ListWaste;