import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">JurnalPro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Solusi profesional untuk publikasi artikel jurnal ilmiah Anda di berbagai bidang keilmuan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li><a href="#harga" className="text-gray-400 hover:text-blue-400 transition-colors">Sinta 3</a></li>
              <li><a href="#harga" className="text-gray-400 hover:text-blue-400 transition-colors">Sinta 4</a></li>
              <li><a href="#harga" className="text-gray-400 hover:text-blue-400 transition-colors">Sinta 5</a></li>
              <li><a href="#harga" className="text-gray-400 hover:text-blue-400 transition-colors">Sinta 6</a></li>
              <li><a href="#harga" className="text-gray-400 hover:text-blue-400 transition-colors">Non Sinta</a></li>
              <li><a href="#harga" className="text-gray-400 hover:text-blue-400 transition-colors">Paket Kustom</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Bidang Keilmuan</h3>
            <ul className="space-y-2">
              <li><a href="#fields" className="text-gray-400 hover:text-blue-400 transition-colors">Teknik Informatika</a></li>
              <li><a href="#fields" className="text-gray-400 hover:text-blue-400 transition-colors">Sistem Informasi</a></li>
              <li><a href="#fields" className="text-gray-400 hover:text-blue-400 transition-colors">Manajemen</a></li>
              <li><a href="#fields" className="text-gray-400 hover:text-blue-400 transition-colors">Akuntansi</a></li>
              <li><a href="#fields" className="text-gray-400 hover:text-blue-400 transition-colors">Ilmu Hukum</a></li>
              <li><a href="#fields" className="text-gray-400 hover:text-blue-400 transition-colors">Dan Lainnya</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/6283119226089" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">+62 831-1922-6089</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:infojurnal@unisgu.ac.id" className="text-gray-400 hover:text-white">infojurnal@unisgu.ac.id</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Jl. Pendidikan No. 123<br />
                  Jakarta Selatan, DKI Jakarta
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} JurnalPro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
