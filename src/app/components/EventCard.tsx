import { Calendar, MapPin, Tag } from 'lucide-react';
import Link from 'next/link';


interface EventCardProps {
  name: string;
  date: string;
  location: string;
  category: string;
  imageUrl: string;
  link: string;
}

export function EventCard({ name, date, location, category, imageUrl, link }: EventCardProps) {
  return (
    <Link href={link} className="group block">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-[#D4A343] text-white px-3 py-1 rounded-full text-xs">
            {category}
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <Calendar className="w-4 h-4 text-[#0B3B5B]" />
            <span>{date}</span>
          </div>
          
          <h3 className="text-xl mb-2 group-hover:text-[#0B3B5B] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
