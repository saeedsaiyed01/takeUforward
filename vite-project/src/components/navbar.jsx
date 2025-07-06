import React from 'react'
import logo from '../logos/logo.png'

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full flex justify-center bg-[#0B0B0F]/95 backdrop-blur-md py-2 px-0 rounded-2xl border border-[#ffffff22] mx-auto max-w-4xl shadow-lg">
            <div className="flex items-center justify-between w-full px-6" style={{ fontFamily: 'Geist, Geist Fallback, sans-serif' }}>
                {/* Left: Logo and Brand */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="logo" className="w-11 h-5" />
                    <span className="text-lg font-medium text-white">takeUforward</span>
                </div>
                {/* Center: Nav Links */}
                <div className="flex space-x-8">
                    <a href="#" className="text-white/90 hover:text-white transition font-medium">Home</a>
                    <a href="#" className="text-white/90 hover:text-white transition font-medium">Pricing</a>
                    <div className="relative group">
                        <button className="text-white/90 hover:text-white transition font-medium">Resources ▼</button>
                        {/* Dropdown menu on hover (optional) */}
                        <div className="absolute hidden group-hover:block bg-[#2a2a2e] mt-2 rounded shadow-md p-2">
                            <a href="#" className="block px-4 py-2 hover:bg-[#3a3a3e] rounded">Blog</a>
                            <a href="#" className="block px-4 py-2 hover:bg-[#3a3a3e] rounded">Tutorials</a>
                        </div>
                    </div>
                </div>
                {/* Right: Moon Icon and Profile Avatar */}
                <div className="flex items-center space-x-4 p-1">
                  
                    <span className="w-10 h-10 rounded-full bg-gray-900 border-2 border-gray-600 flex items-center justify-center overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#d1d8db" viewBox="0 0 24 24" className="w-8 h-8">
                            <circle cx="12" cy="8" r="4" fill="#e5ecee" />
                            <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" fill="#d1d8db" />
                        </svg>
                    </span>
                </div>
            </div>
        </nav>
    )
}
