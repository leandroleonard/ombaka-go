import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
interface DestinationCardProps {
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  link?: string;
  exploreText?: string;
}

export function DestinationCard({ 
  title, 
  location, 
  description, 
  imageUrl, 
  link, 
  exploreText = "Explorar" 
}: DestinationCardProps) {
  return (
    <Link href={link || "#"} className="group block">
      <div className="relative overflow-hidden border border-gray-200 h-96 transition-all duration-500 group-hover:border-[#D4A343] group-hover:shadow-xl">
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500">
          <div className="flex items-center space-x-2 mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
            <MapPin className="w-4 h-4 text-[#D4A343]" />
            <span className="text-sm text-[#D4A343]">{location}</span>
          </div>
          <h3 className="text-2xl mb-2 group-hover:text-[#D4A343] transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {title}
          </h3>
          <p className="text-sm text-white/90 line-clamp-2 mb-4">{description}</p>
          
          <div className="flex items-center gap-2 text-sm text-[#D4A343] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span>{exploreText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}