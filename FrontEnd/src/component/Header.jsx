import React, { useState } from 'react';
import bar from '../../public/icons/bar.svg';
import user from '../../public/icons/user.svg';
import Bar from './Bar';

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showDiv, setShowDiv] = useState(false);

  const handleBarClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-teal-600 relative">
      {/* Left Icon */}
      <img
        src={bar}
        alt="Menu Icon"
        className="w-8 h-8 text-white cursor-pointer z-20"
        onClick={handleBarClick}
      />

      {/* Search Bar */}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        className="w-full max-w-md p-2 text-sm text-gray-800 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-700"
      />

      {/* Right Icon */}
      <img src={user} alt="User Icon" className="w-8 h-8 text-white" />
      
      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 w-64 h-full bg-teal-600 p-4 transition-all duration-300 ease-in-out transform z-10 ${
          showDiv ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Bar />
      </div>
    </header>
  );
};

export default Header;
