import React, { useState, useEffect, useRef } from 'react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef(null);

  // Intimate, heartwarming, gentle music box / acoustic chime soundtrack using Web Audio API
  // Royalty-free, 100% self-contained, soft emotional background for a personal sibling tribute
  const startGentleMusic = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      isPlayingRef.current = true;

      // Master output with subtle warm room reverberation delay
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.045, ctx.currentTime);

      // Delay effect for intimate acoustic space
      const delayNode = ctx.createDelay();
      delayNode.delayTime.setValueAtTime(0.42, ctx.currentTime);

      const delayFeedback = ctx.createGain();
      delayFeedback.gain.setValueAtTime(0.25, ctx.currentTime);

      const delayFilter = ctx.createBiquadFilter();
      delayFilter.type = 'lowpass';
      delayFilter.frequency.setValueAtTime(600, ctx.currentTime);

      masterGain.connect(ctx.destination);
      masterGain.connect(delayNode);
      delayNode.connect(delayFilter);
      delayFilter.connect(delayFeedback);
      delayFeedback.connect(delayNode);
      delayFilter.connect(ctx.destination);

      // Heartwarming, slightly nostalgic melody motif in D major / G major pentatonic
      // Phrase structure: gentle pairs of notes with thoughtful, quiet pauses
      const melodyPhrases = [
        // Phrase 1: Warm opening motif (D - F# - A - D5)
        [
          { note: 293.66, bass: 146.83, dur: 2.2 }, // D4, D3
          { note: 369.99, bass: null,   dur: 1.8 }, // F#4
          { note: 440.00, bass: null,   dur: 2.4 }, // A4
          { note: 587.33, bass: 196.00, dur: 3.2 }, // D5, G3
        ],
        // Phrase 2: Tender ascending question (B4 - A4 - F#4 - E4)
        [
          { note: 493.88, bass: 220.00, dur: 2.0 }, // B4, A3
          { note: 440.00, bass: null,   dur: 1.8 }, // A4
          { note: 369.99, bass: null,   dur: 2.2 }, // F#4
          { note: 329.63, bass: 146.83, dur: 3.0 }, // E4, D3
        ],
        // Phrase 3: Nostalgic reflection (G4 - B4 - D5 - F#5)
        [
          { note: 392.00, bass: 196.00, dur: 2.0 }, // G4, G3
          { note: 493.88, bass: null,   dur: 1.8 }, // B4
          { note: 587.33, bass: null,   dur: 2.2 }, // D5
          { note: 739.99, bass: 246.94, dur: 3.4 }, // F#5, B3
        ],
        // Phrase 4: Warm, peaceful resolution (E5 - D5 - A4 - D4)
        [
          { note: 659.25, bass: 220.00, dur: 2.2 }, // E5, A3
          { note: 587.33, bass: null,   dur: 1.9 }, // D5
          { note: 440.00, bass: null,   dur: 2.4 }, // A4
          { note: 293.66, bass: 146.83, dur: 3.8 }, // D4, D3
        ]
      ];

      let phraseIdx = 0;
      let noteIdx = 0;

      const triggerNextNote = () => {
        if (!isPlayingRef.current || !ctx || ctx.state === 'closed') return;

        const now = ctx.currentTime;
        const currentPhrase = melodyPhrases[phraseIdx];
        const { note, bass, dur } = currentPhrase[noteIdx];

        // 1. Primary Melody Voice (Warm Acoustic Music Box / Kalimba Chime)
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(note, now);

        // Soft, warm acoustic filter
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1100, now);
        filter.frequency.exponentialRampToValueAtTime(350, now + dur);

        // Very gentle attack and organic decay envelope
        gainNode.gain.setValueAtTime(0.0001, now);
        gainNode.gain.linearRampToValueAtTime(0.35, now + 0.08);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + dur);

        // 2. Subtle Harmonic Sparkle (High Octave Shimmer at 5% volume)
        const harmOsc = ctx.createOscillator();
        const harmGain = ctx.createGain();
        harmOsc.type = 'triangle';
        harmOsc.frequency.setValueAtTime(note * 2, now);
        harmGain.gain.setValueAtTime(0.0001, now);
        harmGain.gain.linearRampToValueAtTime(0.03, now + 0.05);
        harmGain.gain.exponentialRampToValueAtTime(0.0001, now + dur * 0.7);

        osc.connect(gainNode);
        harmOsc.connect(harmGain);
        harmGain.connect(gainNode);
        gainNode.connect(filter);
        filter.connect(masterGain);

        osc.start(now);
        harmOsc.start(now);
        osc.stop(now + dur + 0.1);
        harmOsc.stop(now + dur + 0.1);

        // 3. Warm Bass Resonance on selected notes
        if (bass) {
          const bassOsc = ctx.createOscillator();
          const bassGain = ctx.createGain();
          const bassFilter = ctx.createBiquadFilter();

          bassOsc.type = 'sine';
          bassOsc.frequency.setValueAtTime(bass, now);

          bassFilter.type = 'lowpass';
          bassFilter.frequency.setValueAtTime(220, now);

          bassGain.gain.setValueAtTime(0.0001, now);
          bassGain.gain.linearRampToValueAtTime(0.18, now + 0.12);
          bassGain.gain.exponentialRampToValueAtTime(0.0001, now + dur * 1.2);

          bassOsc.connect(bassGain);
          bassGain.connect(bassFilter);
          bassFilter.connect(masterGain);

          bassOsc.start(now);
          bassOsc.stop(now + dur * 1.3);
        }

        // Advance note / phrase
        noteIdx++;
        let stepDelay = 1400; // Base interval between notes

        if (noteIdx >= currentPhrase.length) {
          noteIdx = 0;
          phraseIdx = (phraseIdx + 1) % melodyPhrases.length;
          stepDelay = 2600; // Quiet, breathing pause between musical phrases
        }

        timerRef.current = setTimeout(triggerNextNote, stepDelay);
      };

      triggerNextNote();
    } catch (err) {
      console.error("Audio playback error:", err);
    }
  };

  const stopMusic = () => {
    isPlayingRef.current = false;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
      setIsPlaying(false);
    } else {
      startGentleMusic();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopMusic();
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      title={isPlaying ? "Pause background music" : "Play gentle ambient music"}
      className="group relative flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full warm-glass-pill text-warm-brown hover:text-warm-terracotta hover:border-warm-terracotta/40 transition-all duration-300 shadow-warm-sm active:scale-95 cursor-pointer"
      aria-label="Toggle gentle background music"
    >
      <span className="text-sm font-cormorant font-semibold tracking-wider flex items-center gap-1.5">
        <span className={`text-base leading-none transition-transform duration-300 ${isPlaying ? 'scale-110 text-warm-terracotta' : 'opacity-70'}`}>
          ♫
        </span>
        <span className="hidden sm:inline text-xs uppercase tracking-widest opacity-80 font-sans">
          {isPlaying ? 'Music On' : 'Music'}
        </span>
      </span>

      {/* Animated waves indicator */}
      {isPlaying ? (
        <span className="flex items-end gap-0.5 h-3.5 pl-0.5" aria-hidden="true">
          <span className="w-0.5 bg-warm-terracotta rounded-full animate-[bounce_1.4s_infinite_100ms] h-3" />
          <span className="w-0.5 bg-warm-terracotta rounded-full animate-[bounce_1.4s_infinite_350ms] h-2" />
          <span className="w-0.5 bg-warm-terracotta rounded-full animate-[bounce_1.4s_infinite_200ms] h-3.5" />
        </span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-warm-sand group-hover:bg-warm-terracotta/50 transition-colors" />
      )}
    </button>
  );
}
