import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { getPhotoUrl } from './photosData';

export default function Slide2Appreciation({ onNext, onPrev }) {
  return (
    <div className="relative w-full max-w-6xl mx-auto min-h-[72vh] md:min-h-[76vh] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 px-4 sm:px-6 py-6 md:py-8 animate-fade-in">
      
      {/* Left Column: Refined Solo Photographs Composition */}
      <div className="w-full lg:w-1/2 flex justify-center items-center z-10">
        <div className="relative w-full max-w-md">
          
          {/* Main Solo Photograph (2J2A7217.jpg - Anna seated smiling) */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-warm-lg border border-warm-sand/60 bg-warm-cream/50 aspect-[4/5] sm:aspect-[3/4] z-10 group">
            <img
              src={getPhotoUrl('2J2A7217.jpg')}
              alt="Anna smiling portrait"
              className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/25 via-transparent to-transparent opacity-50" />
          </div>

          {/* Secondary Accent Photograph (2J2A7309.jpg - serene ceremonial reflection) */}
          <div className="hidden sm:block absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-44 md:w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-warm-lg border-2 border-warm-ivory bg-warm-sand/40 z-20 transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
            <img
              src={getPhotoUrl('2J2A7309.jpg')}
              alt="Anna traditional ceremony portrait"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Soft background shape */}
          <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-warm-peach/60 blur-xl -z-10" />
        </div>
      </div>

      {/* Right Column: Editorial Quote & Narrative */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-6 lg:space-y-8 z-10">
        
        {/* Subtle Section Marker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full warm-glass-pill self-start shadow-warm-sm border border-warm-gold/25">
          <span className="text-xs sm:text-sm font-cormorant font-medium tracking-widest uppercase text-warm-brown/80">
            02 • Appreciation
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-warm-charcoal tracking-tight leading-tight">
          Glad you were <br className="hidden sm:inline" />
          <span className="italic font-cormorant font-normal text-warm-terracotta">
            born, man.
          </span>
        </h2>

        {/* Exact Quote Block */}
        <div className="relative pl-6 border-l-2 border-warm-terracotta/60 space-y-3">
          <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-warm-brown leading-relaxed italic font-normal">
            “They say you don't choose your family, but if I could choose a brother today, I’d still pick you. Glad you were born, man.”
          </p>
        </div>

        {/* Navigation Buttons */}
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
