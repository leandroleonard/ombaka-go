import { MapPin, Users, Waves, Clock } from 'lucide-react';

export function StatsSection() {
  const stats = [
    { number: '23', label: 'Municípios', icon: MapPin },
    { number: '50+', label: 'Parceiros', icon: Users },
    { number: '15+', label: 'Praias', icon: Waves },
    { number: '300+', label: 'Anos de História', icon: Clock },
  ];

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                  <Icon className="w-8 h-8 text-[#0B3B5B]" />
                </div>
                <div className="text-4xl mb-2 text-[#0B3B5B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
