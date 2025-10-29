import React, { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('sinta');

  const packages = {
    sinta: [
      {
        name: 'Sinta 6',
        price: '1.000.000',
        popular: false,
        features: [
          'Penyusunan artikel lengkap',
          'Cek plagiarisme',
          'Submit ke jurnal Sinta 6',
          'Revisi 2x',
          'Estimasi 3-4 bulan'
        ]
      },
      {
        name: 'Sinta 5',
        price: '1.500.000',
        popular: false,
        features: [
          'Penyusunan artikel lengkap',
          'Cek plagiarisme premium',
          'Submit ke jurnal Sinta 5',
          'Revisi 3x',
          'Estimasi 4-5 bulan'
        ]
      },
      {
        name: 'Sinta 4',
        price: '2.000.000',
        popular: true,
        features: [
          'Penyusunan artikel lengkap',
          'Cek plagiarisme premium',
          'Submit ke jurnal Sinta 4',
          'Revisi unlimited',
          'Estimasi 5-6 bulan',
          'Prioritas support'
        ]
      },
      {
        name: 'Sinta 3',
        price: '3.000.000',
        popular: false,
        features: [
          'Penyusunan artikel lengkap',
          'Cek plagiarisme premium',
          'Submit ke jurnal Sinta 3',
          'Revisi unlimited',
          'Estimasi 6-8 bulan',
          'Prioritas support',
          'Konsultasi intensif'
        ]
      }
    ],
    other: [
      {
        name: 'Non Sinta',
        price: '1.000.000',
        popular: false,
        features: [
          'Penyusunan artikel lengkap',
          'Cek plagiarisme',
          'Submit ke jurnal non-Sinta',
          'Revisi 2x',
          'Estimasi 2-3 bulan'
        ]
      },
      {
        name: 'Paket Kustom',
        price: 'Hubungi Kami',
        popular: true,
        features: [
          'Disesuaikan kebutuhan',
          'Pilih jurnal sendiri',
          'Fleksibel timeline',
          'Revisi sesuai kesepakatan',
          'Konsultasi personal'
        ]
      },
      {
        name: 'Konsultasi',
        price: 'Gratis',
        popular: false,
        features: [
          'Konsultasi jurnal target',
          'Review draft artikel',
          'Saran perbaikan',
          'Estimasi biaya',
          'Durasi 30 menit'
        ]
      }
    ]
  };

  const currentPackages = selectedCategory === 'sinta' ? packages.sinta : packages.other;

  return (
    <section id="harga" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Paket Harga Transparan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Pilih paket yang sesuai dengan kebutuhan publikasi Anda
          </p>

          <div className="inline-flex bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setSelectedCategory('sinta')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === 'sinta'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Jurnal Sinta
            </button>
            <button
              onClick={() => setSelectedCategory('other')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === 'other'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Lainnya
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
                pkg.popular
                  ? 'border-blue-500 shadow-xl scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Populer
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center">
                  {pkg.price !== 'Hubungi Kami' && pkg.price !== 'Gratis' && (
                    <span className="text-sm text-gray-600 mr-1">Rp</span>
                  )}
                  <span className={`font-bold ${pkg.price.length > 10 ? 'text-2xl' : 'text-3xl'} text-blue-600`}>
                    {pkg.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
              >
                {pkg.price === 'Gratis' ? 'Mulai Konsultasi' : 'Pilih Paket'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <Zap className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Garansi Uang Kembali 100%</h3>
          <p className="text-blue-100">
            Jika artikel tidak terbit sesuai kesepakatan, uang Anda akan dikembalikan penuh
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
