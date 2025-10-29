import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <BookOpen className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              JurnalPro
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Beranda', 'Layanan', 'Harga', 'Proses', 'Kontak'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'Beranda' ? 'hero' : item.toLowerCase())}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('kontak')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Konsultasi Gratis
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {['Beranda', 'Layanan', 'Harga', 'Proses', 'Kontak'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'Beranda' ? 'hero' : item.toLowerCase())}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('kontak')}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Konsultasi Gratis
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
