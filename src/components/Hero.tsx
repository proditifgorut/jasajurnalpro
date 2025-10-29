import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Terpercaya & Profesional</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Jasa Pembuatan Artikel<br />
            <span className="text-blue-200">Jurnal Ilmiah</span> Berkualitas
          </h1>

          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Dari penyusunan draft hingga submit ke jurnal. Melayani berbagai bidang keilmuan dengan tim penulis profesional dan berpengalaman.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('harga')}
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl flex items-center"
            >
              Lihat Paket Harga
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Konsultasi Gratis
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            {[
              { number: '500+', label: 'Artikel Terbit' },
              { number: '10+', label: 'Bidang Keilmuan' },
              { number: '98%', label: 'Tingkat Kepuasan' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
