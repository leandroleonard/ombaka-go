'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Search } from 'lucide-react';
import { Event } from '@/types/event';

type Labels = {
    heroTitle: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    filtersTitle: string;
    filterByMunicipalities: string;
    filterByType: string;
    clearFilters: string;
    viewMore: string;
    emptyState: string;
};

type Props = {
    events: Event[];
    municipalities: string[];
    eventTypes: string[];
    labels: Labels;
};

export default function EventsClient({ events, municipalities, eventTypes, labels }: Props) {
    const [selectedMunicipalities, setSelectedMunicipalities] = useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleFilter = (value: string, list: string[], setList: (l: string[]) => void) => {
        setList(list.includes(value) ? list.filter(i => i !== value) : [...list, value]);
    };

    const filteredEvents = events.filter(event => {
        const matchSearch =
            event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchMunicipality = selectedMunicipalities.length === 0 || selectedMunicipalities.includes(event.municipality);
        const matchType = selectedTypes.length === 0 || selectedTypes.includes(event.type);
        return matchSearch && matchMunicipality && matchType;
    });

    return (
        <div className="min-h-screen pt-20">
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#0B3B5B] to-[#2E7D64] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {labels.heroTitle}
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {labels.heroSubtitle}
                    </p>
                </div>
            </section>

            {/* Search Bar */}
            <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder={labels.searchPlaceholder}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border text-black border-gray-300 focus:outline-none focus:border-[#D4A343]"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 bg-[#fff]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                        {/* Filters Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 border sticky top-32">
                                <h3 className="text-xl mb-6 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {labels.filtersTitle}
                                </h3>

                                {/* Município Filter */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                                        {labels.filterByMunicipalities}
                                    </h4>
                                    <div className="space-y-2">
                                        {municipalities.map((municipality) => (
                                            <label key={municipality} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedMunicipalities.includes(municipality)}
                                                    onChange={() => toggleFilter(municipality, selectedMunicipalities, setSelectedMunicipalities)}
                                                    className="w-4 h-4 text-[#0B3B5B] border-gray-300 focus:ring-[#D4A343]"
                                                />
                                                <span className="text-sm text-gray-700">{municipality}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Tipo Filter */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                                        {labels.filterByType}
                                    </h4>
                                    <div className="space-y-2">
                                        {eventTypes.map((type) => (
                                            <label key={type} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedTypes.includes(type)}
                                                    onChange={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                                                    className="w-4 h-4 text-[#0B3B5B] border-gray-300 focus:ring-[#D4A343]"
                                                />
                                                <span className="text-sm text-gray-700">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {(selectedMunicipalities.length > 0 || selectedTypes.length > 0) && (
                                    <button
                                        onClick={() => { setSelectedMunicipalities([]); setSelectedTypes([]); }}
                                        className="w-full text-sm text-[#0B3B5B] hover:underline"
                                    >
                                        {labels.clearFilters}
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Events List */}
                        <div className="lg:col-span-3 space-y-6">
                            {filteredEvents.map((event, index) => (
                                <div
                                    key={index}
                                    className="bg-white border overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                                >
                                    <div className="md:flex">
                                        <div className="relative md:w-1/3 h-56 md:h-auto">
                                            <Image
                                                src={event.imageUrl}
                                                alt={event.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                        <div className="md:w-2/3 p-6">
                                            <div className="mb-2">
                                                <span className="bg-[#D4A343] text-white px-3 py-1 text-xs">
                                                    {event.type}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl mb-3 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                {event.name}
                                            </h3>

                                            <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                                                <div className="flex items-center space-x-2">
                                                    <Calendar className="w-4 h-4 text-[#0B3B5B]" />
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="w-4 h-4 text-[#2E7D64]" />
                                                    <span>{event.location}, {event.municipality}</span>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 mb-4">{event.description}</p>

                                            <button className="bg-[#0B3B5B] text-white px-6 py-2 hover:bg-[#094158] transition-colors">
                                                {labels.viewMore}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {filteredEvents.length === 0 && (
                                <div className="text-center py-20">
                                    <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                                    <p className="text-gray-500 text-lg">{labels.emptyState}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}