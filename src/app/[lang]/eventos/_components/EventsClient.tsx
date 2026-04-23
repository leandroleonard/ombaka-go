'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Search } from 'lucide-react';

type Evento = {
    nome: string;
    data: string;
    local: string;
    municipio: string;
    tipo: string;
    descricao: string;
    imagem: string;
};

type Labels = {
    heroTitle: string;
    heroSubtitle: string;
    searchPlaceholder: string;
    filtersTitle: string;
    filterByMunicipio: string;
    filterByTipo: string;
    clearFilters: string;
    saberMais: string;
    emptyState: string;
};

type Props = {
    eventos: Evento[];
    municipios: string[];
    tiposEvento: string[];
    labels: Labels;
};

export default function EventosClient({ eventos, municipios, tiposEvento, labels }: Props) {
    const [selectedMunicipios, setSelectedMunicipios] = useState<string[]>([]);
    const [selectedTipos, setSelectedTipos] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleFilter = (value: string, list: string[], setList: (l: string[]) => void) => {
        setList(list.includes(value) ? list.filter(i => i !== value) : [...list, value]);
    };

    const filteredEventos = eventos.filter(evento => {
        const matchSearch =
            evento.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            evento.descricao.toLowerCase().includes(searchTerm.toLowerCase());
        const matchMunicipio = selectedMunicipios.length === 0 || selectedMunicipios.includes(evento.municipio);
        const matchTipo = selectedTipos.length === 0 || selectedTipos.includes(evento.tipo);
        return matchSearch && matchMunicipio && matchTipo;
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
                            className="w-full pl-12 pr-4 py-3 border text-black border-gray-300 rounded-full focus:outline-none focus:border-[#D4A343]"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                        {/* Filters Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-2xl shadow-md sticky top-32">
                                <h3 className="text-xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {labels.filtersTitle}
                                </h3>

                                {/* Município Filter */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                                        {labels.filterByMunicipio}
                                    </h4>
                                    <div className="space-y-2">
                                        {municipios.map((municipio) => (
                                            <label key={municipio} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedMunicipios.includes(municipio)}
                                                    onChange={() => toggleFilter(municipio, selectedMunicipios, setSelectedMunicipios)}
                                                    className="w-4 h-4 text-[#0B3B5B] border-gray-300 rounded focus:ring-[#D4A343]"
                                                />
                                                <span className="text-sm text-gray-700">{municipio}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Tipo Filter */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                                        {labels.filterByTipo}
                                    </h4>
                                    <div className="space-y-2">
                                        {tiposEvento.map((tipo) => (
                                            <label key={tipo} className="flex items-center space-x-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedTipos.includes(tipo)}
                                                    onChange={() => toggleFilter(tipo, selectedTipos, setSelectedTipos)}
                                                    className="w-4 h-4 text-[#0B3B5B] border-gray-300 rounded focus:ring-[#D4A343]"
                                                />
                                                <span className="text-sm text-gray-700">{tipo}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {(selectedMunicipios.length > 0 || selectedTipos.length > 0) && (
                                    <button
                                        onClick={() => { setSelectedMunicipios([]); setSelectedTipos([]); }}
                                        className="w-full text-sm text-[#0B3B5B] hover:underline"
                                    >
                                        {labels.clearFilters}
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Events List */}
                        <div className="lg:col-span-3 space-y-6">
                            {filteredEventos.map((evento, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                                >
                                    <div className="md:flex">
                                        <div className="relative md:w-1/3 h-56 md:h-auto">
                                            <Image
                                                src={evento.imagem}
                                                alt={evento.nome}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                        <div className="md:w-2/3 p-6">
                                            <div className="mb-2">
                                                <span className="bg-[#D4A343] text-white px-3 py-1 rounded-full text-xs">
                                                    {evento.tipo}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                {evento.nome}
                                            </h3>

                                            <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                                                <div className="flex items-center space-x-2">
                                                    <Calendar className="w-4 h-4 text-[#0B3B5B]" />
                                                    <span>{evento.data}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <MapPin className="w-4 h-4 text-[#2E7D64]" />
                                                    <span>{evento.local}, {evento.municipio}</span>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 mb-4">{evento.descricao}</p>

                                            <button className="bg-[#0B3B5B] text-white px-6 py-2 rounded-full hover:bg-[#094158] transition-colors">
                                                {labels.saberMais}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {filteredEventos.length === 0 && (
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