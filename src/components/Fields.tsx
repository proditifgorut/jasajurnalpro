import React from 'react';
import { Code, Database, Leaf, Users, GraduationCap, Scale, Globe, Briefcase, Calculator, MessageSquare } from 'lucide-react';

const Fields: React.FC = () => {
  const fields = [
    { icon: Code, name: 'Teknik Informatika', color: 'bg-blue-500' },
    { icon: Database, name: 'Sistem Informasi', color: 'bg-purple-500' },
    { icon: Leaf, name: 'Agroteknologi', color: 'bg-green-500' },
    { icon: Users, name: 'Administrasi Publik', color: 'bg-orange-500' },
    { icon: GraduationCap, name: 'PGSD', color: 'bg-pink-500' },
    { icon: Scale, name: 'Ilmu Hukum', color: 'bg-red-500' },
    { icon: Globe, name: 'Ilmu Sosial', color: 'bg-indigo-500' },
    { icon: Briefcase, name: 'Manajemen', color: 'bg-cyan-500' },
    { icon: Calculator, name: 'Akuntansi', color: 'bg-teal-500' },
    { icon: MessageSquare, name: 'Ilmu Komunikasi', color: 'bg-yellow-500' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bidang Keilmuan yang Kami Layani
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tim ahli kami siap membantu Anda di berbagai disiplin ilmu
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {fields.map((field, index) => {
            const Icon = field.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`${field.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                  {field.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fields;
