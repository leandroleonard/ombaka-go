import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin} from 'lucide-react';
import { Event } from '@/types/event';

export function EventCard({ name, date, location, type, imageUrl, link }: Event) {
  return (
    <Link href={link || "#"} className="group block">
      <div className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 right-4 bg-[#D4A343] text-white px-3 py-1 text-xs font-medium z-10">
            {type}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <Calendar className="w-4 h-4 text-[#0B3B5B]" />
            <span>{date}</span>
          </div>
          
          <h3 className="text-xl mb-2 group-hover:text-[#0B3B5B] transition-colors text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {name}
          </h3>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-[#2E7D64]" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}