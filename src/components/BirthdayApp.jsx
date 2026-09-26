import React, { useState, useEffect, useCallback, useRef } from 'react';
import BackgroundQuotes from './BackgroundQuotes';
import Navigation from './Navigation';
import Slide1Intro from './Slide1Intro';
import Slide2Appreciation from './Slide2Appreciation';
import Slide3Bond from './Slide3Bond';
import Slide4Memories from './Slide4Memories';
import Slide5Final from './Slide5Final';
import Lightbox from './Lightbox';
import { PHOTOS } from './photosData';

const TOTAL_SLIDES = 5;

export default function BirthdayApp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');
  
  // Touch swipe handling
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Preload all 8 photos immediately
  useEffect(() => {
    PHOTOS.forEach((photo) => {
      const img = new Image();
      img.src = photo.src;
    });
  }, []);

  const goToNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setSlideDirection('next');
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      setSlideDirection('prev');
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index) => {
    setSlideDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
  }, [currentSlide]);

  const handleReplay = useCallback(() => {
    setSlideDirection('prev');
    setCurrentSlide(0);
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't navigate slides if lightbox is open
      if (lightboxOpen) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrev();
      } else if (e.key === ' ' && !e.target.matches('button, input, textarea')) {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, lightboxOpen]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    if (lightboxOpen) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (lightboxOpen || touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;

    // Ensure horizontal swipe is dominant and above threshold (45px)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Lightbox handlers
  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % PHOTOS.length);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
  };

  return (
    <div 
      className="relative min-h-screen w-full bg-warm-ivory text-warm-charcoal flex flex-col justify-between overflow-x-hidden selection:bg-warm-terracotta/20 selection:text-warm-brown"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Film Grain Texture */}
      <div className="film-grain" />

      {/* Background Floating Quotes Stream */}
      <BackgroundQuotes />

      {/* Subtle Radial Ambient Warmth */}
      <div className="fixed inset-0 bg-warm-radial pointer-events-none -z-10" />

      {/* Top Navigation */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onSelectSlide={goToSlide}
      />

      {/* Main Slide Content Area */}
      <main className="relative z-10 flex-1 flex items-center justify-center py-2 sm:py-4">
        <div key={currentSlide} className="w-full transition-opacity duration-500">
          {currentSlide === 0 && <Slide1Intro onNext={goToNext} />}
          {currentSlide === 1 && <Slide2Appreciation onNext={goToNext} onPrev={goToPrev} />}
          {currentSlide === 2 && <Slide3Bond onNext={goToNext} onPrev={goToPrev} />}
          {currentSlide === 3 && (
            <Slide4Memories 
              onNext={goToNext} 
              onPrev={goToPrev} 
              onOpenLightbox={handleOpenLightbox} 
            />
          )}
          {currentSlide === 4 && <Slide5Final onReplay={handleReplay} onPrev={goToPrev} />}
        </div>
      </main>

      {/* Bottom Subtle Navigation Hint */}
      <footer className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-[11px] sm:text-xs text-warm-muted font-sans z-20">
        <div className="hidden sm:flex items-center gap-2 font-medium tracking-wide">
          <span>Use <kbd className="px-1.5 py-0.5 rounded bg-warm-sand/40 font-mono text-[10px] text-warm-charcoal">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-warm-sand/40 font-mono text-[10px] text-warm-charcoal">→</kbd> keys to navigate</span>
        </div>
        <div className="sm:hidden text-center w-full opacity-70">
          Swipe left or tap NEXT to continue
        </div>
        <div className="hidden sm:block font-cormorant italic text-warm-brown/70 text-sm">
          A heartfelt tribute
        </div>
      </footer>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={PHOTOS}
        activeIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </div>
  );
}
