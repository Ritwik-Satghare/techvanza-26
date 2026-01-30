import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recycle, ArrowRight, User, Phone, Lock } from 'lucide-react';

const Signup = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({ username: "", phone: "", password: "" });
  const navigate=useNavigate()
  
  const patterns = {
    username: /^[a-z\d-]{3,15}$/i,
    number:/^[6-9]\d{9}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[*@\-/$%&])[a-zA-Z\d*@/\-$%&]{8,}$/
  };

  const validate = (type, value) => patterns[type].test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate("username", formData.username) || !validate("email", formData.email) || !validate("password", formData.password)) {
      alert("Please check your inputs.");
      return;
    }
    alert("Account created successfully!");
    setCurrentPage('home');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#2d5016] flex justify-center items-center font-['DM_Sans'] relative overflow-hidden">
      {/* Background Decor - Glassmorphism support */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a4d65e] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse "></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0891b2] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse delay-700"></div>

      <div className="w-full mb-15 max-w-md p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl relative border border-white/20 z-10 mx-4 mt-15">
        <button 
          className="absolute top-6 left-6 text-white/80 hover:text-[#a4d65e] transition-colors flex items-center gap-1 group" onClick={()=>navigate("/")}
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        <div className="text-center mt-8 mb-8">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Recycle className="w-8 h-8 text-[#a4d65e] animate-spin-slow" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 font-['Archivo_Black']">Join the Movement</h2>
          <p className="text-green-100/70">Create your account to start trading waste.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Username Input */}
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-200 group-focus-within:text-[#a4d65e] transition-colors z-10" />
            <input
              type="text"
              placeholder="Username"
              className="w-full h-14 pl-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 outline-none focus:bg-white/10 focus:border-[#a4d65e]/50 backdrop-blur-sm transition-all"
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
             {formData.username && !validate("username", formData.username) && (
              <p className="text-xs text-[#a4d65e] mt-1 ml-2 font-medium bg-black/20 inline-block px-2 py-0.5 rounded">3-15 chars, letters/digits only.</p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-200 group-focus-within:text-[#a4d65e] transition-colors z-10" />
            <input
              type="email"
              placeholder="Phone no."
              className="w-full h-14 pl-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 outline-none focus:bg-white/10 focus:border-[#a4d65e]/50 backdrop-blur-sm transition-all"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            {formData.email && !validate("phone", formData.phone) && (
              <p className="text-xs text-[#a4d65e] mt-1 ml-2 font-medium bg-black/20 inline-block px-2 py-0.5 rounded">Please enter a valid number.</p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-200 group-focus-within:text-[#a4d65e] transition-colors z-10" />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-14 pl-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 outline-none focus:bg-white/10 focus:border-[#a4d65e]/50 backdrop-blur-sm transition-all"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
             {formData.password && !validate("password", formData.password) && (
              <p className="text-xs text-[#a4d65e] mt-1 ml-2 font-medium bg-black/20 inline-block px-2 py-0.5 rounded">Min 8 chars, 1 uppercase, 1 number.</p>
            )}
          </div>

          <button 
            type="submit"
            className="h-14 w-full mt-4 bg-[#a4d65e] text-[#2d5016] text-lg font-bold rounded-xl hover:bg-[#b5e570] hover:scale-[1.02] transition-all shadow-lg shadow-black/20 backdrop-blur-sm"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-green-100/60 text-sm">
            Already have an account? 
            <button  className="ml-2 text-white font-semibold hover:text-[#a4d65e] transition-colors" onClick={() => navigate('/login')}>Login</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;