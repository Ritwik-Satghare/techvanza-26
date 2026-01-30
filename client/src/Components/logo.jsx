

import React from 'react'

const logo = () => {
  return (
    <div className="flex items-center gap-2 font-['Archivo_Black'] text-[2rem] text-white tracking-tighter">
      {/* Centered Spinning Emoji */}
      <span className="inline-block text-[2.5rem] animate-[spin_4s_linear_infinite]">
        ♻
      </span>
      <span>ReCircle</span>
    </div>
  );
};

export default logo