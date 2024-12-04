import React from 'react'
import { Link } from 'react-router-dom';

const Tab = ({ image, text }) => {
  return (
    <div className="flex items-center space-x-4 p-4 cursor-pointer hover:bg-gray-200 rounded-md transition-all">
      <img src={image} alt={text} className="w-8 h-8" />
        <Link to={`/${text.toLowerCase()}`}>{text}</Link>
    </div>
  )
}

export default Tab;
