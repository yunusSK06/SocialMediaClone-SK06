import React from 'react';
import { Heart, MessageCircle, PlusSquare, Search, User } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onViewChange('home')}
          className="text-2xl font-bold tracking-tight text-black"
        >
          Instagram
        </button>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-xs mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-none outline-none focus:bg-white focus:ring-1 focus:ring-gray-300 transition-all"
              onFocus={() => onViewChange('search')}
            />
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => onViewChange('home')}
            className={`p-1 transition-colors ${currentView === 'home' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill={currentView === 'home' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          
          <button 
            onClick={() => onViewChange('search')}
            className={`p-1 md:hidden transition-colors ${currentView === 'search' ? 'text-black' : 'text-gray-600 hover:text-black'}`}
          >
            <Search className="w-6 h-6" />
          </button>

          <button className="p-1 text-gray-600 hover:text-black transition-colors">
            <PlusSquare className="w-6 h-6" />
          </button>

          <button className="p-1 text-gray-600 hover:text-black transition-colors">
            <Heart className="w-6 h-6" />
          </button>

          <button 
            onClick={() => onViewChange('profile')}
            className={`p-1 transition-all ${currentView === 'profile' ? 'ring-2 ring-black rounded-full' : ''}`}
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}