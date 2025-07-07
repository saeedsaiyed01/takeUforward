import React from 'react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import Xlogo from '../icons/Xlogo';
import logo from "../logos/logo.png";

const companyLinks = [
  'About Us',
  'Contact Us',
  'Pricing',
  'Privacy Policy',
  'Terms and Conditions',
  'Cancellation / Refund Policy',
];
const quickAccess = [
  "Striver's DSA Sheet",
  'Technical Blogs',
  'CS Subjects',
  "Striver's CP Sheet",
];
const dsaSheets = [
  "Striver's SDE Sheet",
  "Striver's A2Z DSA Playlist",
  'SDE Core Sheet',
  "Striver's CP Sheet",
];
const dsaPlaylist = [
  'Array Series',
  'Graph Series',
  'DP Series',
  'LinkedList Series',
];

const Footer = () => (
  <footer className="bg-[#181c1f] text-gray-300 pt-12 pb-8 px-4 md:px-16" style={{ fontFamily: 'Geist, Geist Fallback, sans-serif' }}>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start">
      {/* Logo and description */}
      <div className="md:w-1/4 mb-8 md:mb-0">
        <img src={logo} alt="TUF" className="h-10 mb-4" />
        <p className="text-gray-400 mb-6 text-sm max-w-xs pr-10 ">
          The best place to learn data Structures, algorithms, most asked coding interview questions, real interview experiences free of cost.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="#" className="rounded-full border border-gray-500 p-2 hover:bg-gray-700 transition"><FaLinkedin size={20} /></a>
          <a href="#" className="rounded-full border border-gray-500 p-2 hover:bg-gray-700 transition"><Xlogo/></a>
          <a href="#" className="rounded-full border border-gray-500 p-2 hover:bg-gray-700 transition"><FaYoutube size={20} /></a>
        </div>
      </div>
      {/* Links */}
      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
        <div>
          <h4 className="text-orange-400 font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            {companyLinks.map(link => (
              <li key={link}><a href="#" className="hover:text-white transition">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-orange-400 font-semibold mb-3">Quick Access</h4>
          <ul className="space-y-2">
            {quickAccess.map(link => (
              <li key={link}><a href="#" className="hover:text-white transition">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-orange-400 font-semibold mb-3">DSA Sheets</h4>
          <ul className="space-y-2">
            {dsaSheets.map(link => (
              <li key={link}><a href="#" className="hover:text-white transition">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-orange-400 font-semibold mb-3">DSA Playlist</h4>
          <ul className="space-y-2">
            {dsaPlaylist.map(link => (
              <li key={link}><a href="#" className="hover:text-white transition">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 