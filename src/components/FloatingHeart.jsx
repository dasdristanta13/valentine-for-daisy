import React from 'react';

const FloatingHeart = ({ style }) => {
  return (
    <div 
      className="absolute text-red-500 animate-bounce"
      style={style}
    >
      ❤️
    </div>
  );
};