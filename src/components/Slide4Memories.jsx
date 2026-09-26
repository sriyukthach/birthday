import React from 'react';
import { ArrowRight, ArrowLeft, Maximize2 } from 'lucide-react';
import { PHOTOS } from './photosData';

export default function Slide4Memories({ onNext, onPrev, onOpenLightbox }) {
  return (
    <div className="relative w-full max-w-6xl mx-auto min-h-[72vh] md:min-h-[76vh] flex flex-col justify-between gap-6 px-4 sm:px-6 py-4 md:py-6 animate-fade-in">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-warm-sand/50 pb-4">
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full warm-glass-pill shadow-warm-sm border border-warm-gold/25">
            <span className="text-xs sm:text-sm font-cormorant font-medium tracking-widest uppercase text-warm-brown/80">
              04 • Memories & Moments
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-medium text-warm-charcoal tracking-tight">
            More memories. <span className="italic font-cormorant text-warm-terracotta">More laughs.</span>
          </h2>
          <p className="text-warm-brown/75 font-sans text-sm sm:text-base font-light">
            To more memories, more laughs, and many more birthdays.
          </p>
        </div>

        <div className="text-left sm:text-right text-xs font-cormorant tracking-widest text-warm-muted uppercase">
          Click any photograph to expand
        </div>
      </div>

      {/* Editorial Photo Grid / Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-2">
        {PHOTOS.map((photo, index) => {
          // Asymmetrical editorial heights
          const isTall = index === 0 || index === 4;
          const isWide = index === 7;
          
          return (
            <div
              key={photo.id}
              onClick={() => onOpenLightbox(index)}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer bg-warm-cream border border-warm-sand/50 shadow-warm-sm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1 ${
                isTall ? 'row-span-2 aspect-[3/4]' : isWide ? 'col-span-2 md:col-span-2 aspect-[16/9]' : 'aspect-square sm:aspect-[4/3]'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              
              {/* Subtle hover gradient and expand icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/70 via-warm-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                <div className="flex items-center justify-between text-warm-ivory">
                  <span className="font-cormorant italic text-xs sm:text-sm truncate max-w-[80%]">
                    {photo.caption}
                  </span>
                  <div className="p-1.5 rounded-full bg-warm-charcoal/50 backdrop-blur-sm">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Number tag */}
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md warm-glass-pill text-[10px] font-sans font-medium text-warm-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                0{index + 1}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Navigation Controls */}
      <div className="flex items-center justify-between pt-2 border-t border-warm-sand/40">
        <button
          onClick={onPrev}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full warm-glass-card text-warm-brown hover:text-warm-charcoal hover:border-warm-terracotta/40 transition-all duration-300 shadow-warm-sm active:scale-95 cursor-pointer text-sm font-medium"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-sans uppercase tracking-wider text-xs sm:text-sm">PREV</span>
        </button>

        <button
          onClick={onNext}
          className="group inline-flex items-center gap-3 px-7 py-3 rounded-full bg-warm-charcoal text-warm-ivory hover:bg-warm-terracotta transition-all duration-300 shadow-warm-md hover:shadow-warm-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          aria-label="Proceed to next slide"
        >
          <span className="font-sans font-medium text-sm tracking-wider uppercase">
            NEXT
          </span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

    </div>
  );
}
