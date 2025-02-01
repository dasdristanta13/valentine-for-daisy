import React from 'react';

const Sparkle = ({ style }) => (
  <div 
    className="absolute text-yellow-200 animate-ping"
    style={style}
  >
    ✨
  </div>
);

export default Sparkle;