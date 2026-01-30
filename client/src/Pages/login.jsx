import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recycle, ArrowRight, User, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, validation and auth logic go here
    if (!formData.username || !formData.password) {
      alert("Please enter both username and password.");
      return;
    }
    alert("Logged in successfully!");
    navigate('/marketplace');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#2d5016] flex justify-center items-center font-['DM_Sans'] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#a4d65e] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#0891b2] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse delay-700"></div>

      <div className="w-full max-w-md p-8 mb-15 mt-15 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl relative border border-white/20 z-10 mx-4">
        <button 
          onClick={() => navigate('/')}
          className="absolute top-6 left-6 text-white/80 hover:text-[#a4d65e] transition-colors flex items-center gap-1 group"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        <div className="text-center mt-8 mb-10">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Recycle className="w-8 h-8 text-[#a4d65e] animate-spin-slow" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 font-['Archivo_Black']">Welcome Back</h2>
          <p className="text-green-100/70">Login to access your dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Username Input */}
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-200 group-focus-within:text-[#a4d65e] transition-colors z-10" />
            <input
              type="text"
              placeholder="Username"
              className="w-full h-14 pl-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 outline-none focus:bg-white/10 focus:border-[#a4d65e]/50 backdrop-blur-sm transition-all"
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
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
          </div>

          <button 
            type="submit"
            className="h-14 w-full mt-2 bg-[#a4d65e] text-[#2d5016] text-lg font-bold rounded-xl hover:bg-[#b5e570] hover:scale-[1.02] transition-all shadow-lg shadow-black/20 backdrop-blur-sm"
          >
            Login
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-green-100/60 text-sm">
            Don't have an account? 
            <button onClick={() => navigate('/signup')} className="ml-2 text-white font-semibold hover:text-[#a4d65e] transition-colors">Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
