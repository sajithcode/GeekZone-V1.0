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
    <div className="flex justify-center items-center mt-3 px-4">
      <div className="rounded-lg relative overflow-hidden">
        {/* Green border line */}
        <div
          className="absolute inset-0 shadow-lg rounded-lg"
          style={{
            boxShadow: '0 0 10px 2px rgba(0, 255, 0, 0.5)',
          }}
        ></div>
  
        <div className="flex flex-nowrap justify-center gap-2 sm:gap-4 z-10 relative p-4">
          {[
            { label: 'Days', value: time.days },
            { label: 'Hours', value: time.hours },
            { label: 'Minutes', value: time.minutes },
            { label: 'Seconds', value: time.seconds },
          ].map((unit, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#2B2B2B] p-3 sm:p-4 rounded-lg shadow-md w-16 sm:w-20"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-xs sm:text-sm text-white mt-1 sm:mt-2">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Timer;