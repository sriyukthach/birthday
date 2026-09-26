import React from 'react';
import ProgressIndicator from './ProgressIndicator';
import MusicToggle from './MusicToggle';

export default function Navigation({ currentSlide, totalSlides, onSelectSlide }) {
  return (
    <header className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-5 pb-3 flex items-center justify-between z-30 relative">
      
      {/* Subtle brand / title */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-warm-terracotta" />
        <span className="font-cormorant font-semibold tracking-widest text-xs sm:text-sm uppercase text-warm-charcoal/80">
          For Anna
        </span>
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSelectSlide={onSelectSlide}
      />

      {/* Right side controls: Music & keyboard hint */}
      <div className="flex items-center gap-3">
        <MusicToggle />
      </div>

    </header>
  );
}
