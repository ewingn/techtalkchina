import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Home, Clock, Cpu, Car, Zap, Heart, Bell, User } from 'lucide-react';
import SearchBar from './SearchBar';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Latest', href: '/latest', icon: Clock },
  { name: 'AI', href: '/ai', icon: Cpu },
  { name: 'EVs', href: '/evs', icon: Car },
  { name: 'Energy', href: '/energy', icon: Zap },
  { name: 'MedTech', href: '/medtech', icon: Heart },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-red-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-lg">TTC</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-xl text-gray-900">
                  Tech Talk China
                </div>
                <div className="text-xs text-gray-500 -mt-0.5">China Tech News Hub</div>
              </div>
            </Link>
          </div>

          {/* Desktop Search - Improved */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="w-full relative">
              <SearchBar placeholder="Search China tech news..." />
            </div>
          </div>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-red-500 text-white shadow-md scale-105'
                      : 'text-gray-700 hover:text-red-500 hover:bg-red-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden lg:block">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Desktop Search Toggle (for medium screens) */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Newsletter/Account Button */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="p-2 rounded-lg text-gray-600 hover:text-red-500 hover:bg-red-50 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <Link
                to="/about"
                className="p-2 rounded-lg text-gray-600 hover:text-red-500 hover:bg-red-50 transition-colors"
              >
                <User className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-red-500 hover:bg-red-50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden py-3 border-t border-gray-100">
            <SearchBar 
              placeholder="Search China tech news..." 
              onClose={() => setIsSearchOpen(false)} 
              autoFocus 
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-6 space-y-1 bg-white border-t border-gray-100">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      active
                        ? 'bg-red-500 text-white shadow-md'
                        : 'text-gray-700 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                    {active && <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>}
                  </Link>
                );
              })}
              
              {/* Mobile Only Links */}
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-1">
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-red-500 hover:bg-red-50 transition-all"
                >
                  <User className="w-5 h-5" />
                  <span>About</span>
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-red-500 hover:bg-red-50 transition-all"
                >
                  <Bell className="w-5 h-5" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Live Update Banner (Optional) */}
      <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white text-center py-1 text-sm">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span>Live updates from China's tech ecosystem</span>
        </div>
      </div>
    </header>
  );
}

export default Header;