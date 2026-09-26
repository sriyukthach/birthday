import React from 'react';

export default function ProgressIndicator({ currentSlide, totalSlides, onSelectSlide }) {
  const formatNum = (n) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <div className="flex items-center gap-4 text-warm-brown/70 select-none">
      {/* Editorial Number Display */}
      <div className="font-cormorant tracking-widest text-base sm:text-lg flex items-center gap-1.5 font-medium">
        <span className="text-warm-terracotta font-semibold text-lg sm:text-xl transition-all duration-300">
          {formatNum(currentSlide + 1)}
        </span>
        <span className="opacity-30">/</span>
        <span className="opacity-50 text-xs sm:text-sm font-sans tracking-wider">
          {formatNum(totalSlides)}
        </span>
      </div>

      {/* Subtle Step Bars */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isActive = index === currentSlide;
          const isPassed = index < currentSlide;
          return (
            <button
              key={index}
              onClick={() => onSelectSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                isActive
                  ? 'w-7 sm:w-9 bg-warm-terracotta shadow-sm'
                  : isPassed
                  ? 'w-2 sm:w-2.5 bg-warm-sand/80 hover:bg-warm-terracotta/60'
                  : 'w-2 sm:w-2.5 bg-warm-sand/40 hover:bg-warm-sand/70'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
