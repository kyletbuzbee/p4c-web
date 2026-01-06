import React from 'react';
import type { StatMetric } from '../types';
import { Users, Home, Hammer } from 'lucide-react';

const stats: StatMetric[] = [
  { id: '1', label: 'Families Housed', value: '142', icon: 'home' },
  { id: '2', label: 'Veterans Served', value: '85', icon: 'users' },
  { id: '3', label: 'Properties Revitalized', value: '56', icon: 'hammer' },
];

const ImpactDashboard: React.FC = () => (
  <section id="impact" className="py-16 bg-p4c-navy text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-beige mb-4">
          Our Community Impact
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We measure success not by profit margins, but by the number of keys we
          hand to families and veterans in East Texas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300"
          >
            <div className="bg-p4c-gold p-4 rounded-full mb-6 text-p4c-navy">
              {stat.icon === "home" && <Home className="w-8 h-8" />}
              {stat.icon === "users" && <Users className="w-8 h-8" />}
              {stat.icon === "hammer" && <Hammer className="w-8 h-8" />}
            </div>
            <div className="text-5xl font-bold font-serif text-white mb-2">
              {stat.value}
            </div>
            <div className="text-p4c-gold uppercase tracking-widest text-sm font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactDashboard;
