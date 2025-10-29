import React from 'react';
import { MessageCircle, FileText, Search, Upload, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Konsultasi',
      description: 'Diskusi kebutuhan, bidang keilmuan, dan target jurnal Anda'
    },
    {
      icon: FileText,
      title: 'Penyusunan Draft',
      description: 'Tim kami menyusun artikel dari data yang Anda berikan'
    },
    {
      icon: Search,
      title: 'Review & Revisi',
      description: 'Pengecekan plagiarisme, grammar, dan revisi sesuai feedback'
    },
    {
      icon: Upload,
      title: 'Submit Artikel',
      description: 'Mengirimkan artikel ke jurnal target dan follow-up'
    },
    {
      icon: CheckCircle,
      title: 'Publikasi',
      description: 'Artikel Anda terbit dan mendapat sertifikat publikasi'
    }
  ];

  return (
    <section id="proses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Proses Kerja Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            5 langkah mudah menuju publikasi jurnal ilmiah Anda
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-blue-600 shadow-lg border-2 border-blue-200">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">7-14 Hari</div>
              <div className="text-gray-600">Waktu Penyusunan Draft</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Garansi Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
