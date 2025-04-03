import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500">CodeCenter</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</Link>
            <Link to="/team" className="text-gray-700 hover:text-orange-500 transition-colors">Team</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-500">About</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Services</Link>
            <Link to="/team" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Team</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}