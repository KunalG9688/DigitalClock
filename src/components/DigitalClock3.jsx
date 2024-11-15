import React, { useEffect, useState } from 'react';

const DigitalClock3 = () => {
  const [time, setTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clear the timer when component unmounts
  }, []);

  const formattedTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours =
      hours % 12 === 0 ? 12 : hours % 12 < 10 ? `0${hours % 12}` : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  return (
    <div className={`flex flex-col h-screen items-center justify-center transition-colors ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex text-6xl font-bold mb-4">
        {/* Apply animation to the time */}
        {formattedTime(time)
          .split('')
          .map((char, index) => (
            <span
              key={index}
              className="number-change"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
      </div>
      <button
        onClick={toggleTheme}
        className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default DigitalClock3;
