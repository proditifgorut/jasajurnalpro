import React from 'react';
import { FileText, Search, Upload, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: FileText,
      title: 'Penyusunan Draft',
      description: 'Pembuatan artikel jurnal dari data dan informasi yang Anda berikan',
      features: ['Outline terstruktur', 'Referensi lengkap', 'Format sesuai template']
    },
    {
      icon: Search,
      title: 'Review & Revisi',
      description: 'Pengecekan plagiarisme, grammar, dan perbaikan konten',
      features: ['Cek plagiarisme', 'Proofreading', 'Revisi unlimited']
    },
    {
      icon: Upload,
      title: 'Proses Submit',
      description: 'Pengiriman artikel ke jurnal target hingga diterima',
      features: ['Pendaftaran akun', 'Upload artikel', 'Follow-up reviewer']
    },
    {
      icon: CheckCircle2,
      title: 'Publikasi',
      description: 'Memastikan artikel Anda terbit dan terindeks',
      features: ['Konfirmasi terbit', 'Link artikel', 'Sertifikat publikasi']
    }
  ];

  return (
    <section id="layanan" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Layanan Lengkap Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kami menangani seluruh proses publikasi jurnal ilmiah Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
