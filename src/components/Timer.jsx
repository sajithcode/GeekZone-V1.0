import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTime = () => {
    const eventDate = new Date('2025-04-26T18:00:00'); // Event date: March 26, 2025
    const now = new Date();

    const diff = eventDate - now; // Difference in milliseconds

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    } else {
      // If the event date has passed
      setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-left items-center">
      <div
        className="p-8 rounded-lg relative overflow-hidden"
        style={{ backgroundColor: '#1F1F1F' }}
      >
        {/* Green border line */}
        <div
          className="absolute inset-0 border-2 border-green-500 rounded-lg shadow-lg"
          style={{
            boxShadow: '0 0 10px 2px rgba(0, 255, 0, 0.5)',
          }}
        ></div>
        
        <div className="flex space-x-4">
          <div className="text-center">
            <span className="text-4xl font-bold text-[#FFFFFF]">{time.days}</span>
            <span className="block text-sm text-[#FFFFFF]">Days</span>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-[#FFFFFF]">{time.hours}</span>
            <span className="block text-sm text-[#FFFFFF]">Hours</span>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-[#FFFFFF]">{time.minutes}</span>
            <span className="block text-sm text-[#FFFFFF]">Minutes</span>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-[#FFFFFF]">{time.seconds}</span>
            <span className="block text-sm text-[#FFFFFF]">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;