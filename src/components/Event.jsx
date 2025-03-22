import React from 'react';

function Event() {
  return (
    <div className='bg-[#18181C]'>
    <div className="  px-4 py-8 mx-auto max-w-7xl font-primary">
      {/* Header Section */}
      <div className="text-center sm:text-left mb-8">
        <h2 className="text-5xl font-bold mb-2"><span className='text-white'>IEEE</span> <span className='text-[#4FB777]'>Events</span></h2>
        <p className="text-white">Take a look at events hosted by IEEE SUSL Branch.</p>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured Image */}
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="/image5.jpg"
            alt="Featured Event"
            loading="lazy"
          />
        </div>

        {/* Small Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="w-full h-32 md:h-48 rounded-lg overflow-hidden shadow-md">
              <img
                className="w-full h-full object-cover"
                src={`/image-${num}.jpg`}
                alt={`Event ${num}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Event;