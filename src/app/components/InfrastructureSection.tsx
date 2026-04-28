
'use client';

import { 
  GraduationCap, 
  Hospital, 
  Building2, 
  Bus, 
  Zap, 
  Droplets,
  Hotel,
  ShoppingBag
} from 'lucide-react';

interface InfrastructureItem {
  icon: string;
  title: string;
  items: string[];
}

interface InfrastructureSectionProps {
  data: InfrastructureItem[];
}

const iconMap = {
  GraduationCap: GraduationCap,
  Hospital: Hospital,
  Building2: Building2,
  Bus: Bus,
  Zap: Zap,
  Droplets: Droplets,
  Hotel: Hotel,
  ShoppingBag: ShoppingBag,
};

export function InfrastructureSection({ data }: InfrastructureSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap];
        if (!Icon) return null;
        
        return (
          <div
            key={index}
            className="bg-white p-6 hover:border-[#D4A343] transition-all group hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 text-[#0B3B5B] flex items-center justify-center transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#0B3B5B]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {item.title}
              </h3>
            </div>
            <ul className="space-y-2">
              {item.items.map((facility, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-[#2E7D64] mt-1">•</span>
                  <span className="flex-1">{facility}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

// Dados padrão de infraestrutura para usar nos municípios (em português)
export const getDefaultInfrastructureData = (t: any) => [
  {
    icon: 'GraduationCap',
    title: t('infrastructure.education.title'),
    items: [
      t('infrastructure.education.items.0'),
      t('infrastructure.education.items.1'),
      t('infrastructure.education.items.2'),
      t('infrastructure.education.items.3'),
    ],
  },
  {
    icon: 'Hospital',
    title: t('infrastructure.health.title'),
    items: [
      t('infrastructure.health.items.0'),
      t('infrastructure.health.items.1'),
      t('infrastructure.health.items.2'),
      t('infrastructure.health.items.3'),
    ],
  },
  {
    icon: 'Bus',
    title: t('infrastructure.transport.title'),
    items: [
      t('infrastructure.transport.items.0'),
      t('infrastructure.transport.items.1'),
      t('infrastructure.transport.items.2'),
      t('infrastructure.transport.items.3'),
    ],
  },
  {
    icon: 'Hotel',
    title: t('infrastructure.hospitality.title'),
    items: [
      t('infrastructure.hospitality.items.0'),
      t('infrastructure.hospitality.items.1'),
      t('infrastructure.hospitality.items.2'),
      t('infrastructure.hospitality.items.3'),
    ],
  },
  {
    icon: 'Zap',
    title: t('infrastructure.energy.title'),
    items: [
      t('infrastructure.energy.items.0'),
      t('infrastructure.energy.items.1'),
      t('infrastructure.energy.items.2'),
      t('infrastructure.energy.items.3'),
    ],
  },
  {
    icon: 'Droplets',
    title: t('infrastructure.water.title'),
    items: [
      t('infrastructure.water.items.0'),
      t('infrastructure.water.items.1'),
      t('infrastructure.water.items.2'),
      t('infrastructure.water.items.3'),
    ],
  },
  {
    icon: 'Building2',
    title: t('infrastructure.institutions.title'),
    items: [
      t('infrastructure.institutions.items.0'),
      t('infrastructure.institutions.items.1'),
      t('infrastructure.institutions.items.2'),
      t('infrastructure.institutions.items.3'),
    ],
  },
  {
    icon: 'ShoppingBag',
    title: t('infrastructure.commerce.title'),
    items: [
      t('infrastructure.commerce.items.0'),
      t('infrastructure.commerce.items.1'),
      t('infrastructure.commerce.items.2'),
      t('infrastructure.commerce.items.3'),
    ],
  },
];