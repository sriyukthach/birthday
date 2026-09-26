import React from 'react';

const quotes = [
  "They say you don't choose your family, but if I could choose a brother today, I’d still pick you. Glad you were born, man.",
  "We don't always say it, but I really value the bond between us. Happy birthday to a great older brother.",
  "Happy Birthday to the brother I'm genuinely lucky to have.",
  "To more memories, more laughs, and many more birthdays.",
  "Happy Birthday, Anna. Thanks for being someone I can always look up to.",
  "Wishing you all the happiness you deserve. Happy Birthday, Anna.",
  "Some bonds just find their way back. Happy Birthday, Anna. 🤍",
];

export default function BackgroundQuotes() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0" 
      aria-hidden="true"
    >
      {/* Column 1 - Left Stream */}
      <div className="absolute -left-12 top-0 w-1/2 opacity-[0.055] md:opacity-[0.065] animate-quote-stream">
        <div className="flex flex-col gap-28 md:gap-36 text-warm-brown font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide leading-relaxed">
          {quotes.concat(quotes).map((quote, idx) => (
            <div 
              key={`col1-${idx}`} 
              className={`max-w-xl transition-all duration-700 ${
                idx % 3 === 0 ? '-rotate-2 pl-4' : idx % 3 === 1 ? 'rotate-1 pl-12' : 'rotate-[-1deg] pl-2'
              }`}
            >
              <p className="italic">“{quote}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* Column 2 - Right Stream */}
      <div className="absolute -right-8 top-12 w-1/2 opacity-[0.045] md:opacity-[0.055] animate-quote-stream-delayed">
        <div className="flex flex-col gap-32 md:gap-40 text-warm-terracotta font-cormorant text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-wide leading-relaxed">
          {quotes.slice().reverse().concat(quotes).map((quote, idx) => (
            <div 
              key={`col2-${idx}`} 
              className={`max-w-xl ml-auto transition-all duration-700 ${
                idx % 2 === 0 ? 'rotate-1 pr-6' : '-rotate-2 pr-12'
              }`}
            >
              <p className="italic">“{quote}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft warm radial gradient mask to keep text ultra-subtle in center */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
    </div>
  );
}
