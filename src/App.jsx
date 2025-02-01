import React, { useState, useEffect } from 'react';
import FloatingHeart from './components/FloatingHeart';
import Sparkle from './components/Sparkle';

import React, { useState, useEffect } from 'react';
import { Heart, Stars, SparkleIcon } from 'lucide-react';

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

const Sparkle = ({ style }) => (
  <div 
    className="absolute text-yellow-200 animate-ping"
    style={style}
  >
    ✨
  </div>
);

const ValentineWebsite = () => {
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialAnimation(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const createSparkles = () => {
    const newSparkles = [];
    for (let i = 0; i < 15; i++) {
      newSparkles.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 2 + 1}s`,
        size: `${Math.random() * 15 + 8}px`,
      });
    }
    setSparkles(newSparkles);
  };

  const createHearts = () => {
    const newHearts = [];
    for (let i = 0; i < 20; i++) {
      newHearts.push({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        size: `${Math.random() * 20 + 10}px`,
      });
    }
    setHearts(newHearts);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      createSparkles();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSpecialMessage = () => {
    setShowSpecialMessage(true);
    createHearts();
  };

  const handleResponse = (answer) => {
    setResponse(answer);
    if (answer === 'yes') {
      createHearts();
      createSparkles();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-red-400 flex justify-center items-center p-4 transition-all duration-1000">
      <div 
        className={`max-w-2xl w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-xl text-center text-white relative overflow-hidden
          ${showInitialAnimation ? 'scale-0' : 'scale-100 transition-transform duration-1000 ease-out'}`}
      >
        <div className="text-6xl mb-6 animate-pulse transition-transform hover:scale-110 duration-300">❤️</div>
        
        <h1 className="text-4xl font-bold mb-8 text-white animate-fade-in transition-all duration-500 hover:scale-105">
          Dearest Tiyasha (My Daisy)
        </h1>
        
        <div className="space-y-4 text-lg opacity-0 animate-slide-up">
          <p className="transition-all duration-300 hover:transform hover:translate-y-1">My beloved Daisy,</p>
          <p className="transition-all duration-300 hover:transform hover:translate-y-1">
            Even though we're miles apart, my heart beats closer to yours with each passing moment. 
            You make every day brighter just by being in it, and I wanted to create this special 
            space to tell you how much you mean to me.
          </p>
          <p className="transition-all duration-300 hover:transform hover:translate-y-1">
            Your smile lights up my world like a beautiful daisy in the morning sun, and your love 
            makes everything better. The way you bring joy to my life is more precious than any treasure.
          </p>
          <p className="text-2xl font-bold mt-6 mb-6 animate-bounce">
            Will you be my Valentine, Daisy? 
          </p>
        </div>

        {!response && (
          <div className="flex justify-center gap-4 mt-6 animate-fade-in">
            <button
              onClick={() => handleResponse('yes')}
              className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              Yes, I will! ❤️
            </button>
            <button
              onClick={() => handleResponse('no')}
              className="px-8 py-3 bg-pink-400 hover:bg-pink-500 rounded-full text-white font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              Not yet 💔
            </button>
          </div>
        )}

        {response === 'yes' && (
          <div className="mt-8 p-6 bg-white bg-opacity-20 rounded-2xl transform transition-all duration-500 animate-slide-up">
            <h2 className="text-2xl font-bold mb-4">Thank you, my sweet Daisy! ❤️</h2>
            <p className="text-lg">
              You've made me the happiest person in the world! I promise to cherish every moment 
              with you and make our Valentine's Day special, despite the distance. You're my 
              perfect flower, my beautiful Daisy, and I'm so blessed to have you in my life.
            </p>
          </div>
        )}

        {response === 'no' && (
          <div className="mt-8 p-6 bg-white bg-opacity-20 rounded-2xl transform transition-all duration-500 animate-slide-up">
            <p className="text-lg">
              I understand, my dear Daisy. No matter what, you'll always be special to me, 
              and I'll be here whenever you're ready. Your happiness means the world to me.
            </p>
          </div>
        )}

        <button
          onClick={handleSpecialMessage}
          className="mt-8 px-8 py-3 bg-red-500 hover:bg-red-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg animate-pulse"
        >
          Click for a Special Message ❤️
        </button>
        
        {showSpecialMessage && (
          <div className="mt-8 p-6 bg-white bg-opacity-20 rounded-2xl transform transition-all duration-500 animate-slide-up">
            <p className="text-lg">
              Daisy, my sweet flower, you're the first person I think of when I wake up and 
              the last person on my mind before I sleep. Every moment with you is precious, 
              and I cherish every memory we create together. The way you laugh, the sparkle 
              in your eyes, and your caring heart make you the most amazing person I've ever known. 
              You're my favorite person in the whole world, and I'm so grateful to have you in my life.
            </p>
          </div>
        )}

        <div className="mt-8 transform transition-all duration-500 animate-slide-up">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message back to me..."
            className="w-full p-4 rounded-xl bg-white bg-opacity-20 text-white placeholder-gray-200 resize-none transition-all duration-300 focus:scale-105"
            rows="4"
          />
          <button className="mt-4 px-8 py-3 bg-red-500 hover:bg-red-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg">
            Send Your Love ❤️
          </button>
        </div>

        {(hearts.length > 0 || response === 'yes') && hearts.map((heart) => (
          <FloatingHeart
            key={heart.id}
            style={{
              left: heart.left,
              animationDuration: heart.animationDuration,
              fontSize: heart.size,
            }}
          />
        ))}

        {sparkles.map((sparkle) => (
          <Sparkle
            key={sparkle.id}
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDuration: sparkle.animationDuration,
              fontSize: sparkle.size,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Add custom styles to head
const style = document.createElement('style');
style.textContent = `
  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  .animate-slide-up {
    animation: slide-up 0.8s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default ValentineWebsite;