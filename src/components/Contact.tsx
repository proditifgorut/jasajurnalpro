import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    field: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, field, message } = formData;

    const waMessage = `Halo JurnalPro,

Saya tertarik dengan layanan Anda.
Nama: ${name}
Email: ${email}
Telepon: ${phone}
Bidang Keilmuan: ${field}
Pesan: ${message}

Mohon informasinya. Terima kasih.`;

    const whatsappUrl = `https://wa.me/6283119226089?text=${encodeURIComponent(waMessage)}`;

    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', email: '', phone: '', field: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fields = [
    'Teknik Informatika',
    'Sistem Informasi',
    'Agroteknologi',
    'Administrasi Publik',
    'PGSD',
    'Ilmu Hukum',
    'Ilmu Sosial',
    'Manajemen',
    'Akuntansi',
    'Ilmu Komunikasi',
    'Lainnya'
  ];

  return (
    <section id="kontak" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Konsultasi gratis untuk menentukan paket yang tepat untuk Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Telepon / WhatsApp</div>
                    <a href="https://wa.me/6283119226089" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white">+62 831-1922-6089</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:infojurnal@unisgu.ac.id" className="text-blue-100 hover:text-white">infojurnal@unisgu.ac.id</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Alamat</div>
                    <div className="text-blue-100">
                      Jl. Pendidikan No. 123<br />
                      Jakarta Selatan, DKI Jakarta 12345
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Jam Operasional</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-semibold">09:00 - 18:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-semibold">09:00 - 15:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span className="font-semibold">Tutup</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor Telepon / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="field" className="block text-sm font-semibold text-gray-700 mb-2">
                    Bidang Keilmuan
                  </label>
                  <select
                    id="field"
                    name="field"
                    value={formData.field}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Pilih bidang keilmuan</option>
                    {fields.map((field) => (
                      <option key={field} value={field}>
                        {field}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan / Pertanyaan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Ceritakan kebutuhan Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
