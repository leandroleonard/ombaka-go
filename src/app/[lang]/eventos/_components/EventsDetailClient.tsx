// app/[lang]/eventos/[slug]/EventoDetalheClient.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';

interface Evento {
    slug: string;
    nome: string;
    data: string;
    horario: string;
    local: string;
    municipio: string;
    tipo: string;
    descricao: string;
    descricaoCompleta: string;
    imagem: string;
    programa: string[][];
    informacoes: string[];
}

interface Props {
    evento: Evento;
    labels: {
        backToEvents: string;
        aboutEvent: string;
        schedule: string;
        importantInfo: string;
        interested: string;
        contactInfo: string;
        contactButton: string;
        eventNotFound: string;
        date: string;
        time: string;
        location: string;
    };
    locale: string;
}

export default function EventsDetailClient({ evento, labels, locale }: Props) {
    console.log(evento)
    if (!evento) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-3xl mb-4 text-[#0B3B5B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {labels.eventNotFound}
                    </h1>
                    <Link
                        href={`/${locale}/eventos`}
                        className="inline-flex items-center space-x-2 text-[#0B3B5B] hover:underline"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>{labels.backToEvents}</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <div className="relative h-[500px]">
                <div className="absolute inset-0">
                    <Image
                        src={evento.imagem}
                        alt={evento.nome}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link
                            href={`/${locale}/eventos`}
                            className="inline-flex items-center space-x-2 text-white/90 hover:text-white mb-4 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>{labels.backToEvents}</span>
                        </Link>
                        <br />
                        <span className="inline-block bg-[#D4A343] text-white px-4 py-1 text-sm mb-4">
                            {evento.tipo}
                        </span>
                        <h1 className="text-5xl text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {evento.nome}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Event Details */}
            <section className="py-12 bg-[#FFF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Quick Info Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white p-6 hover:shadow-md transition-shadow">
                                    <Calendar className="w-8 h-8 text-[#0B3B5B] mb-3" />
                                    <p className="text-sm text-gray-600 mb-1">{labels.date}</p>
                                    <p className="font-medium text-gray-900">{evento.data}</p>
                                </div>
                                <div className="bg-white p-6 hover:shadow-md transition-shadow">
                                    <Clock className="w-8 h-8 text-[#0B3B5B] mb-3" />
                                    <p className="text-sm text-gray-600 mb-1">{labels.time}</p>
                                    <p className="font-medium text-gray-900">{evento.horario}</p>
                                </div>
                                <div className="bg-white p-6 hover:shadow-md transition-shadow">
                                    <MapPin className="w-8 h-8 text-[#2E7D64] mb-3" />
                                    <p className="text-sm text-gray-600 mb-1">{labels.location}</p>
                                    <p className="font-medium text-gray-900">{evento.local}</p>
                                    <p className="text-sm text-gray-600">{evento.municipio}</p>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white p-8 hover:shadow-md">
                                <h2 className="text-3xl mb-4 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {labels.aboutEvent}
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    {evento.descricaoCompleta}
                                </p>
                            </div>

                            {/* Program */}
                            <div className="bg-white p-8 hover:shadow-md">
                                <h2 className="text-3xl mb-6 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {labels.schedule}
                                </h2>
                                <div className="space-y-4">
                                    {evento.programa.map(([time, activity], index) => (
                                        <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-200 last:border-0">
                                            <div className="bg-[#0B3B5B] text-white px-3 py-1 text-sm font-medium min-w-[70px] text-center">
                                                {time}
                                            </div>
                                            <p className="text-gray-700 flex-1 pt-1">{activity}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 hover:shadow-md sticky top-24">
                                <h3 className="text-xl mb-4 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {labels.importantInfo}
                                </h3>
                                <ul className="space-y-3 mb-6">
                                    {evento.informacoes.map((info, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <div className="w-1.5 h-1.5 bg-[#D4A343] mt-2 flex-shrink-0" />
                                            <span className="text-gray-700">{info}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="border-t border-gray-200 pt-6">
                                    <h4 className="font-medium text-gray-900 mb-3">{labels.interested}</h4>
                                    <p className="text-sm text-gray-600 mb-4">
                                        {labels.contactInfo}
                                    </p>
                                    <Link
                                        href={`/${locale}/contacto`}
                                        className="block w-full bg-[#0B3B5B] text-white text-center px-6 py-3 hover:bg-[#094158] transition-colors"
                                    >
                                        {labels.contactButton}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}