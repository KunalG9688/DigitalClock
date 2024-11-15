import React, { useState, useEffect } from 'react';

const DigitalClock1 = () => {
  const [time, setTime] = useState(new Date());
  const [isDark, setisDarkMode] = useState(false);

  const toggleTheme = () =>{
    setisDarkMode(!isDark)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    // <div className={`flex flex-col justify-center items-center h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
    <div className={`flex flex-col h-screen items-center justify-center transition-colors ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
         <div className='flex flex-col justify-center items-center h-screen'>
      <div className=" flex space-x-6 p-8 rounded-2xl bg-green-800">
        <div className="card">
          <p className="text-5xl font-bold">{hours % 12 === 0 ? 12 : hours % 12 < 10 ? `0${hours % 12}` : hours % 12}</p>
          <span className="text-sm text-gray-400">Hours</span>
        </div>
        <div className="card">
          <p className="text-5xl font-bold">{minutes < 10 ? `0${minutes}` : minutes}</p>
          <span className="text-sm text-gray-400">Minutes</span>
        </div>
        <div className="card">
          <p className="text-5xl font-bold">{seconds < 10 ? `0${seconds}` : seconds}</p>
          <span className="text-sm text-gray-400">Seconds</span>
        </div>
      </div>
      <div
        className="relative inline-flex items-center cursor-pointer pt-6"
        onClick={toggleTheme}
      >
        {/* Circle Toggle */}
        <span
          className={`w-12 h-6 rounded-full border-black ${isDark ? 'bg-blue-500' : 'bg-gray-500'} transition-colors duration-300`}
        >
          <span
            className={`block w-6 h-6 rounded-full bg-white transition-transform duration-300 transform ${
              isDark ? 'translate-x-6' : 'translate-x-0'
            }`}
            
          />
          <p className='pt-3 font-bold text-xl'>Theme</p>
        </span>
      </div>
    </div>
    </div>
  );
};

export default DigitalClock1;
