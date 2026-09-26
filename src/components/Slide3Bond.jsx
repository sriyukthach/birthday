import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Slide3Bond({ onNext, onPrev }) {
  return (
    <div className="relative w-full max-w-6xl mx-auto min-h-[72vh] md:min-h-[76vh] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 px-4 sm:px-6 py-6 md:py-8 animate-fade-in">
      
      {/* Left Column: Photo Collage (Sibling & Family) */}
      <div className="w-full lg:w-1/2 flex justify-center items-center z-10">
        <div className="relative w-full max-w-lg pb-10 sm:pb-12">
          
          {/* Main Hero Photograph (2J2A8069.jpg - Brother & Sister together) */}
          <div className="relative w-[78%] sm:w-[72%] mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-warm-lg border border-warm-sand/60 bg-warm-cream/50 aspect-[3/4] z-10 group transform -rotate-1 hover:rotate-0 transition-all duration-500">
            <img
              src="/photos/2J2A8069.jpg"
              alt="Anna and sister together"
              className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/30 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full warm-glass-pill text-[10px] font-cormorant tracking-widest uppercase text-warm-charcoal/90">
              Brother & Sister
            </div>
          </div>

          {/* Overlapping Image 1 (2J2A7222.jpg - warm laughing family moment) */}
          <div className="absolute -bottom-2 -left-2 sm:-left-4 w-[48%] sm:w-[46%] aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-warm-md border-2 border-warm-ivory bg-warm-sand/40 z-20 transform -rotate-3 hover:rotate-0 transition-all duration-500 group">
            <img
              src="/photos/2J2A7222.jpg"
              alt="Family laughing together"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Overlapping Image 2 (2J2A8072.jpg - ceremonial family portrait) */}
          <div className="absolute -bottom-4 -right-2 sm:-right-4 w-[48%] sm:w-[46%] aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-warm-md border-2 border-warm-ivory bg-warm-sand/40 z-20 transform rotate-3 hover:rotate-0 transition-all duration-500 group">
            <img
              src="/photos/2J2A8072.jpg"
              alt="Family portrait"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Subtle warm glow circle behind */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-warm-goldLight/20 blur-2xl -z-10" />
        </div>
      </div>

      {/* Right Column: Narrative & Quotes */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-6 lg:space-y-8 z-10">
        
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full warm-glass-pill self-start shadow-warm-sm border border-warm-gold/25">
          <span className="text-xs sm:text-sm font-cormorant font-medium tracking-widest uppercase text-warm-brown/80">
            03 • The Bond
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-warm-charcoal tracking-tight leading-[1.12]">
          Some bonds just <br />
          <span className="italic font-cormorant font-normal text-warm-terracotta">
            find their way back.
          </span>
        </h2>

        {/* Dual Sincere Quotes */}
        <div className="space-y-4">
          <div className="relative pl-5 border-l-2 border-warm-gold/70">
            <p className="font-cormorant text-xl sm:text-2xl text-warm-brown leading-relaxed italic font-normal">
              “We don't always say it, but I really value the bond between us. Happy birthday to a great older brother.”
            </p>
          </div>

          <div className="relative pl-5 border-l-2 border-warm-terracotta/60">
            <p className="font-sans text-sm sm:text-base text-warm-muted leading-relaxed font-light">
              “Happy Birthday to the brother I'm genuinely lucky to have.”
            </p>
          </div>
        </div>

        {/* Navigation */}
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

    </div>
  );
}
