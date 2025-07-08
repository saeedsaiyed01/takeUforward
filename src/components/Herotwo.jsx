import React from 'react';

  
export default function Herotwo() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] bg-[#0B0B0F] px-4 py-16 gap-10 overflow-hidden">
      {/* Left: Quote, Description, Socials */}
      <div className="flex-1 flex flex-col justify-center items-start max-w-lg">
        <div className="text-5xl text-orange-400 mb-4 font-serif">“</div>
        <div className="text-white text-lg md:text-xl mb-6 font-light">
          A Google Software Engineer, ex-Amazon and Media.net, with offers from Facebook London, and a competitive coding ace with Candidate Master and 6* Codechef accolades.
        </div>
        <div className="text-gray-400 mb-2">Find more about me on</div>
        <div className="flex gap-4 mb-8">
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 text-gray-300 hover:text-white hover:border-white transition"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" stroke="currentColor" strokeWidth="2"/></svg></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 text-gray-300 hover:text-white hover:border-white transition"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 12v4m0-4a4 4 0 018 0v4m-8-4V8m8 4V8" stroke="currentColor" strokeWidth="2"/></svg></a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 text-gray-300 hover:text-white hover:border-white transition"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2"/></svg></a>
        </div>
      </div>
      {/* Right: Striver Image over Orange Half-Circle, Name, Title */}
      <div className="flex-1 flex flex-col items-center justify-end relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[220px] bg-orange-500 rounded-b-full z-0" />
        <img src={striver} alt="Striver" className="relative z-10 w-72 md:w-96 h-auto object-cover mb-4 rounded-2xl shadow-2xl" style={{ marginBottom: '-40px' }} />
        <div className="relative z-10 flex flex-col items-center mt-8">
          <div className="text-2xl font-bold text-white font-serif">Raj Vikramaditya</div>
          <div className="text-orange-400 font-medium">Founder takeUforward</div>
          <div className="text-gray-300 text-sm">SWE-III @ Google</div>
        </div>
      </div>
    </section>
  );
}


