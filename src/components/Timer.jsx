import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  const calculateTime = () => {
    const eventDate = new Date("2025-06-02T18:00:00"); // Event date: March 26, 2025
    const now = new Date();

    const diff = eventDate - now; // Difference in milliseconds

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
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
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-start mt-8">
      {" "}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
        {" "}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: time.days === 1 ? "Day" : "Days", value: time.days },
            { label: time.hours === 1 ? "Hour" : "Hours", value: time.hours },
            {
              label: time.minutes === 1 ? "Minute" : "Minutes",
              value: time.minutes,
            },
            {
              label: time.seconds === 1 ? "Second" : "Seconds",
              value: time.seconds,
            },
          ].map((unit, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 p-3 sm:p-4 md:p-5 rounded-xl shadow-lg border border-gray-600 min-w-0 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:border-[#4FB777] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transitionDuration: "700ms",
              }}
            >
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#4FB777]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Number */}
              <span
                className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 relative z-10 group-hover:text-[#4FB777] transition-all duration-300 ${
                  unit.label === "Seconds" ? "animate-pulse" : ""
                }`}
              >
                {String(unit.value).padStart(2, "0")}
              </span>

              {/* Label */}
              <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-medium relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                {unit.label}
              </span>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#4FB777]/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        {/* Modern accent line */}
        <div
          className={`mt-6 h-1 bg-gradient-to-r from-transparent via-[#4FB777] to-transparent rounded-full transition-all duration-1000 ${
            isVisible ? "opacity-50 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;
