import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, images, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || activeIndex === null || !images[activeIndex]) return null;

  const currentImg = images[activeIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-warm-charcoal/90 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div 
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-10 pointer-events-none"
      >
        <div className="px-3.5 py-1.5 rounded-full bg-warm-charcoal/60 backdrop-blur-md border border-warm-sand/20 text-warm-ivory text-xs sm:text-sm font-cormorant tracking-widest pointer-events-auto">
          {activeIndex + 1} / {images.length}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="p-2 sm:p-2.5 rounded-full bg-warm-charcoal/60 hover:bg-warm-terracotta text-warm-ivory transition-colors duration-200 border border-warm-sand/20 pointer-events-auto cursor-pointer"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-warm-charcoal/60 hover:bg-warm-terracotta text-warm-ivory transition-all duration-200 border border-warm-sand/20 hover:scale-105 cursor-pointer z-10"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-warm-charcoal/60 hover:bg-warm-terracotta text-warm-ivory transition-all duration-200 border border-warm-sand/20 hover:scale-105 cursor-pointer z-10"
        aria-label="Next photo"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Main Image Container */}
      <div 
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-warm-sand/30 bg-warm-charcoal/40">
          <img
            src={currentImg.src}
            alt={currentImg.alt || "Memory photo"}
            className="max-h-[78vh] w-auto max-w-full object-contain rounded-xl select-none transition-transform duration-300 hover:scale-[1.01]"
          />
        </div>

        {currentImg.caption && (
          <p className="mt-3 text-center text-warm-cream/90 font-cormorant italic text-base sm:text-lg tracking-wide">
            {currentImg.caption}
          </p>
        )}
      </div>
    </div>
  );
}
