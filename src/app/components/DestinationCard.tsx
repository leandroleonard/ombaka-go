import { MapPin } from 'lucide-react';
import Link from 'next/link';

interface DestinationCardProps {
    title: string;
    location: string;
    description: string;
    imageUrl: string;
    link: string;
}

export function DestinationCard({ title, location, description, imageUrl, link }: DestinationCardProps) {
    return (
        <Link href={link || "#"} className="group block">
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-96 transition-transform duration-300 group-hover:scale-105">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                    <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-4 h-4 text-[#D4A343]" />
                        <span className="text-sm text-[#D4A343]">{location}</span>
                    </div>
                    <h3 className="text-2xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {title}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2">{description}</p>

                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-block bg-[#D4A343] text-white px-6 py-2 rounded-full text-sm">
                            Ver mais
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
