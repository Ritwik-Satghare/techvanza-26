// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Landing from './Pages/Landing'

// import Navbar from './Components/navbar';
// import Hero from './Pages/Hero';
// import Marketplace from './Pages/Marketplace';
// // import About from './pages/About';
// import Signup from './Pages/signUp';
// // import Footer from './components/Footer'; // Assume Footer is also separated

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//   <Signup/>
//     </>
//   )
// }

// export default App

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Hero from './Pages/Hero';
import Marketplace from './Pages/Marketplace';
import About from './Pages/About';
import Signup from './Pages/Signup';
import './App.css'
import Login from './Pages/login';
import ListWaste from './Pages/listWaste';
import BrowseMaterials from './Pages/browseMaterials';



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Component to handle layout conditionally (hiding footer on signup)
const Layout = () => {
  const location = useLocation();
  const isSignup = location.pathname === '/signup';

  return (
    <div className="font-['DM_Sans'] text-gray-900 bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
           <Route path="/browse-materials" element={<BrowseMaterials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell-waste" element={<ListWaste />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;

