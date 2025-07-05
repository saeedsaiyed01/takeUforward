import React from 'react'
import Moon from '../icons/moon'
import logo from '../logos/logo.png'
function Navbar() {
    return (
        <nav className='bg-black text-white p-5 rounded-lg border-2 border-white flex  items-center justify-between'>
            <div className="flex items-center space-x-3 w-11 h-auto"><img src={logo} alt="logo" ></img>
                <span className="text-lg font-semibold">takeUforward</span>
            </div>
            <div className="flex space-x-6 text-end
            ">
                <a href="#" className="hover:text-gray-300">Home</a>
                <a href="#" className="hover:text-gray-300">Pricing</a>
                <div className="relative group">
                    <button className="hover:text-gray-300">Resources ▼</button>
                    {/* Dropdown menu on hover (optional) */}
                    <div className="absolute hidden group-hover:block bg-[#2a2a2e] mt-2 rounded shadow-md p-2">
                        <a href="#" className="block px-4 py-2 hover:bg-[#3a3a3e] rounded">Blog</a>
                        <a href="#" className="block px-4 py-2 hover:bg-[#3a3a3e] rounded">Tutorials</a>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-1">
                    <Moon />
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
