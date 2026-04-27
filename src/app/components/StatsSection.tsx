import { AfricanPattern } from './AfricanPattern';
interface StatsSectionProps {
  stats: Array<{
    number: string;
    label: string;
    icon: any;
  }>;
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B3B5B] to-[#094158] relative overflow-hidden">
      <div className="absolute inset-0 text-white opacity-20 pointer-events-none">
        <AfricanPattern />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-white/20 mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl mb-2 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}