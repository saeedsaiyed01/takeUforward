import React from 'react';
import bg5 from "../logos/bg5.jpg";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 text-center overflow-hidden w-full"
      style={{
        backgroundImage: `url(${bg5})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay, now behind navbar */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      {/* Subtle Glow/Light Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-gradient-to-b from-[#ff9100]/30 via-transparent to-transparent rounded-full blur-3xl opacity-60" />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl leading-tight text-center"
          style={{ fontFamily: 'Instrument Serif, serif', lineHeight: '1.15' }}
        >
          Upskill yourself<br />With Just <br />
          <span className='text-[#fb3b00]' style={{ fontFamily: 'Instrument Serif, serif', lineHeight: '1.15' }}>One SUBSCRIPTION.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto  font-normal"style={{ fontFamily: 'DM Sans, serif', lineHeight: '1.15' }}>
          Maximize your potential with a powerful platform built to shape the future of digital trading.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-[#181824]  text-white px-8 py-3 rounded-xl text-base shadow-lg hover:bg-white hover:text-black transition-all duration-200 focus:outline-none"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >Explore Offerings
          </button>
          <button
            className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-xl hover:scale-105 hover:shadow-orange-500/30 text-base border border-[#ffffff22] shadow-lg transition-all duration-200 focus:outline-none"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
