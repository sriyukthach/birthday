import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Slide1Intro({ onNext }) {
  return (
    <div className="relative w-full max-w-6xl mx-auto min-h-[72vh] md:min-h-[76vh] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 px-4 sm:px-6 py-6 md:py-8 animate-fade-in">
      
      {/* Left Column: Refined Editorial Typography */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-6 lg:space-y-8 z-10 order-2 lg:order-1">
        
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full warm-glass-pill self-start shadow-warm-sm border border-warm-gold/25">
          <span className="w-1.5 h-1.5 rounded-full bg-warm-terracotta animate-pulse" />
          <span className="text-xs sm:text-sm font-cormorant font-semibold tracking-widest uppercase text-warm-brown/90">
            A little something for you...
          </span>
        </div>

        {/* Large Editorial Heading */}
        <div className="space-y-2">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-warm-charcoal tracking-tight leading-[1.08]">
            Happy Birthday, <br />
            <span className="italic font-cormorant font-normal text-warm-terracotta">
              Anna.
            </span>
          </h1>
          <div className="w-16 h-[2px] bg-warm-gold/60 rounded-full mt-4" />
        </div>

        {/* Supporting Text */}
        <p className="text-warm-brown/80 font-sans text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-lg">
          Here’s to another year of memories, laughs, and everything that makes you, you.
        </p>

        {/* Next Action Button */}
        <div className="pt-2 sm:pt-4">
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-warm-charcoal text-warm-ivory hover:bg-warm-terracotta transition-all duration-300 shadow-warm-md hover:shadow-warm-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Proceed to next slide"
          >
            <span className="font-sans font-medium text-sm sm:text-base tracking-wider uppercase">
              NEXT
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Right Column: Hero Photograph with Cinematic Frame */}
      <div className="w-full lg:w-1/2 flex justify-center items-center z-10 order-1 lg:order-2">
        <div className="relative w-full max-w-md lg:max-w-lg group">
          
          {/* Subtle warm accent decorative border glow */}
          <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-warm-terracotta/20 via-warm-gold/15 to-transparent blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Photograph Container */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-warm-lg border border-warm-sand/50 bg-warm-cream/40 aspect-[4/5] sm:aspect-[3/4]">
            <img
              src="/photos/2J2A7207.jpg"
              alt="Anna portrait"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              loading="eager"
            />
            {/* Subtle soft bottom gradient to blend gently */}
            <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/30 via-transparent to-transparent opacity-60" />
            
            {/* Corner aesthetic badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full warm-glass-pill text-[11px] font-cormorant tracking-widest uppercase text-warm-charcoal/90 shadow-warm-sm">
              01 • Prologue
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
