import React from 'react';
import bg from "../logos/bg.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center px-4 py-16 md:py-28">
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#181824] via-[#23234a] to-[#0B0B0F]">
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12 md:gap-0">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-sm font-semibold text-orange-300 mb-6 shadow-md animate-fade-in">
            🚀 Crafted for Ambitious Engineers
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-xl mb-6 animate-fade-in-up">
            Level Up Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Tech Journey</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-medium mb-10 max-w-xl animate-fade-in">
            Unlock premium resources, hands-on projects, and a vibrant community to supercharge your career. Learn, build, and succeed with the most trusted platform for engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up">
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 px-8 py-3 rounded-2xl text-lg font-bold shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition-all duration-200 focus:outline-none">
              Get Started
            </button>
            <button className="bg-white/10 border border-orange-400 text-orange-400 px-8 py-3 rounded-2xl text-lg font-bold hover:bg-orange-400 hover:text-white transition-colors duration-200 focus:outline-none">
              Explore Offerings
            </button>
          </div>
        </div>
        {/* Right Side: Glassmorphism Card with Glowing Border */}
        <div className="flex-1 flex items-center justify-center animate-fade-in-up">
          <div className="relative rounded-3xl p-2 bg-white/10 backdrop-blur-xl shadow-2xl border-2 border-orange-400 animate-glow">
            <img src={bg} alt="Mockup" className="w-[350px] md:w-[500px] max-w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease both;
        }
      `}</style>
    </section>
  );
}
