import React from 'react';
import type { StatMetric } from '../types/types';
import { Users, Home, TrendingUp } from 'lucide-react';

const stats: StatMetric[] = [
  {
    id: '1',
    label: 'Local Capital Invested',
    value: '$5.2M+',
    icon: 'dollar',
  },
  {
    id: '2',
    label: 'Families Housed',
    value: '142',
    icon: 'home',
  },
  {
    id: '3',
    label: 'Local Contractors Hired',
    value: '100%',
    icon: 'users',
  },
];

const ImpactDashboard: React.FC = () => (
  <section
    id="impact"
    className="py-16 bg-p4c-navy text-white relative overflow-hidden"
  >
    {/* Background Texture */}
    <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px]" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-beige mb-4">
          Measuring Market Impact
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          We drive economic growth in <strong>East Texas</strong> by injecting
          capital into distressed assets and prioritizing local labor for every
          renovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm group"
          >
            <div className="bg-p4c-gold p-4 rounded-full mb-6 text-p4c-navy shadow-lg shadow-p4c-gold/20 group-hover:scale-110 transition-transform duration-300">
              {stat.icon === 'home' && <Home className="w-8 h-8" />}
              {stat.icon === 'users' && <Users className="w-8 h-8" />}
              {stat.icon === 'dollar' && <TrendingUp className="w-8 h-8" />}
            </div>
            <div className="text-5xl font-bold font-serif text-white mb-2 tracking-tight">
              {stat.value}
            </div>
            <div className="text-p4c-gold uppercase tracking-widest text-sm font-bold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactDashboard;
