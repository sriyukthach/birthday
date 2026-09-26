import React from 'react';
import { RotateCcw, ArrowLeft } from 'lucide-react';
import { getPhotoUrl } from './photosData';

export default function Slide5Final({ onReplay, onPrev }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto min-h-[72vh] md:min-h-[76vh] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 px-4 sm:px-6 py-6 md:py-8 animate-fade-in">
      
      {/* Left / Center Hero Final Portrait */}
      <div className="w-full lg:w-5/12 flex justify-center items-center z-10">
        <div className="relative w-full max-w-sm group">
          {/* Subtle warm halo */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-warm-terracotta/25 via-warm-gold/20 to-transparent blur-xl opacity-80" />

          {/* Portrait Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-warm-lg border-2 border-warm-sand/50 bg-warm-cream/50 aspect-[3/4] transition-all duration-700">
            <img
              src={getPhotoUrl('2J2A7217.jpg')}
              alt="Anna final portrait"
              className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/30 via-transparent to-transparent opacity-60" />
          </div>

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full warm-glass-pill text-xs font-cormorant tracking-widest text-warm-charcoal shadow-warm-sm border border-warm-gold/30 whitespace-nowrap">
            With Love & Respect
          </div>
        </div>
      </div>

      {/* Right Column: Sincere Final Wishes & Narrative Flow */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center text-left space-y-6 md:space-y-7 z-10">
        
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full warm-glass-pill self-start shadow-warm-sm border border-warm-gold/25">
          <span className="text-xs sm:text-sm font-cormorant font-medium tracking-widest uppercase text-warm-brown/80">
            05 • Epilogue
          </span>
        </div>

        {/* Large Heading */}
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-warm-charcoal tracking-tight leading-tight">
          Happy Birthday, <br />
          <span className="italic font-cormorant font-normal text-warm-terracotta">
            Anna. 🤍
          </span>
        </h2>

        {/* Narrative Lines */}
        <div className="space-y-4 pt-1 border-l-2 border-warm-terracotta/50 pl-5">
          <p className="font-sans text-base sm:text-lg text-warm-charcoal/90 font-medium leading-relaxed">
            Thanks for being someone I can always look up to.
          </p>

          <p className="font-cormorant text-xl sm:text-2xl text-warm-brown italic font-normal leading-relaxed">
            “Wishing you all the happiness you deserve. Happy Birthday, Anna.”
          </p>

          <p className="font-sans text-sm sm:text-base text-warm-muted leading-relaxed font-light">
            Some bonds just find their way back. Happy Birthday, Anna. 🤍
          </p>
        </div>

        {/* Sign-off */}
        <div className="pt-2">
          <p className="font-cormorant italic text-xl sm:text-2xl text-warm-terracotta font-medium tracking-wide">
            With love.
          </p>
        </div>

        {/* Actions: Prev + Replay */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={onPrev}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full warm-glass-card text-warm-brown hover:text-warm-charcoal hover:border-warm-terracotta/40 transition-all duration-300 shadow-warm-sm active:scale-95 cursor-pointer text-sm font-medium"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="font-sans uppercase tracking-wider text-xs sm:text-sm">PREV</span>
          </button>

          <button
            onClick={onReplay}
            className="group inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-warm-terracotta text-warm-ivory hover:bg-warm-terracottaDark transition-all duration-300 shadow-warm-md hover:shadow-warm-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Replay from beginning"
          >
            <span className="font-sans font-medium text-sm sm:text-base tracking-wider uppercase">
              Replay
            </span>
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:-rotate-180" />
          </button>
        </div>
      </div>

    </div>
  );
}
