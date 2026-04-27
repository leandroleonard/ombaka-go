'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    TrendingUp, DollarSign, Building, MapPin,
    CheckCircle, Mail, Phone,
} from 'lucide-react';

type Project = {
    name: string;
    location: string;
    progress: number;
    investment: string;
    sector: string;
};

type Incentive = {
    title: string;
    description: string;
};

type Zone = {
    name: string;
    area: string;
    description: string;
};

type Labels = {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    whyTitle: string;
    whySubtitle: string;
    whyLocationTitle: string;
    whyLocationDesc: string;
    whyGrowthTitle: string;
    whyGrowthDesc: string;
    whyFiscalTitle: string;
    whyFiscalDesc: string;
    projectsTitle: string;
    projectsSubtitle: string;
    progressLabel: string;
    investmentLabel: string;
    detailsButton: string;
    incentivesTitle: string;
    incentivesSubtitle: string;
    zonesTitle: string;
    zonesSubtitle: string;
    zonesMapPlaceholder: string;
    formTitle: string;
    formSubtitle: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formCompany: string;
    formCompanyPlaceholder: string;
    formPhone: string;
    formPhonePlaceholder: string;
    formSector: string;
    formSectorOptions: string[];
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    contactEmailLabel: string;
    contactPhoneLabel: string;
};

type Props = {
    projects: Project[];
    incentives: Incentive[];
    zones: Zone[];
    labels: Labels;
};

export default function InvestirClient({ projects, incentives, zones, labels }: Props) {
    const [formData, setFormData] = useState({
        name: '', email: '', company: '', phone: '', sector: '', message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // handle submission
    };

    return (
        <div className="min-h-screen pt-20">

            {/* Hero Section */}
            <section className="relative h-96 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1758518727820-28491c194bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludmVzdG1lbnQlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzc2MjQzMDE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt={labels.heroTitle}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B3B5B]/90 to-[#0B3B5B]/70" />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                        <h1 className="text-5xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {labels.heroTitle}
                        </h1>
                        <p className="text-2xl mb-6 text-[#D4A343]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {labels.heroSubtitle}
                        </p>
                        <p className="text-lg max-w-2xl">
                            {labels.heroDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Invest */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl text-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {labels.whyTitle}
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">{labels.whySubtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <MapPin className="w-8 h-8 text-white" />, title: labels.whyLocationTitle, desc: labels.whyLocationDesc },
                            { icon: <TrendingUp className="w-8 h-8 text-white" />, title: labels.whyGrowthTitle, desc: labels.whyGrowthDesc },
                            { icon: <DollarSign className="w-8 h-8 text-white" />, title: labels.whyFiscalTitle, desc: labels.whyFiscalDesc },
                        ].map((item, i) => (
                            <div key={i} className="text-center p-8 bg-[#F5F5F5] ">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0B3B5B]  mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl mb-4 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Priority Projects */}
            <section className="py-20 bg-[#fff]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl text-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {labels.projectsTitle}
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">{labels.projectsSubtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white border p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl mb-2 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            {project.name}
                                        </h3>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                            <MapPin className="w-4 h-4" />
                                            <span>{project.location}</span>
                                        </div>
                                    </div>
                                    <span className="bg-[#2E7D64] text-white px-3 py-1  text-xs whitespace-nowrap ml-2">
                                        {project.sector}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-600">{labels.progressLabel}</span>
                                        <span className="text-[#0B3B5B]">{project.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200  h-2">
                                        <div
                                            className="bg-[#D4A343] h-2  transition-all"
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-600">{labels.investmentLabel}</p>
                                        <p className="text-lg text-[#0B3B5B]">{project.investment}</p>
                                    </div>
                                    <button className="bg-[#0B3B5B] text-white px-6 py-2  hover:bg-[#094158] transition-colors">
                                        {labels.detailsButton}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Incentives */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4 text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {labels.incentivesTitle}
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">{labels.incentivesSubtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {incentives.map((incentive, index) => (
                            <div
                                key={index}
                                className="p-6 border border-gray-200  hover:border-[#D4A343] transition-colors"
                            >
                                <CheckCircle className="w-8 h-8 text-[#2E7D64] mb-4" />
                                <h4 className="text-lg mb-2 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {incentive.title}
                                </h4>
                                <p className="text-sm text-gray-600">{incentive.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Economic Zones */}
            <section className="py-20 bg-[#FFF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl text-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {labels.zonesTitle}
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">{labels.zonesSubtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {zones.map((zone, index) => (
                            <div key={index} className="bg-white border p-8 ">
                                <Building className="w-12 h-12 text-[#0B3B5B] mb-4" />
                                <h3 className="text-2xl mb-2 text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {zone.name}
                                </h3>
                                <p className="text-sm text-[#D4A343] mb-4">{zone.area}</p>
                                <p className="text-gray-600">{zone.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white  h-96 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                            <p className="text-gray-500">{labels.zonesMapPlaceholder}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4 text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {labels.formTitle}
                        </h2>
                        <p className="text-gray-600">{labels.formSubtitle}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm mb-2 text-black">{labels.formName}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={labels.formNamePlaceholder}
                                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#D4A343]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-black">{labels.formEmail}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={labels.formEmailPlaceholder}
                                    className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:border-[#D4A343]"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm mb-2 text-black">{labels.formCompany}</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder={labels.formCompanyPlaceholder}
                                    className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:border-[#D4A343]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-2 text-black">{labels.formPhone}</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={labels.formPhonePlaceholder}
                                    className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:border-[#D4A343]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm mb-2 text-black">{labels.formSector}</label>
                            <select
                                name="sector"
                                value={formData.sector}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:border-[#D4A343]"
                            >
                                {labels.formSectorOptions.map((option, i) => (
                                    <option key={i}>{option}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm mb-2 text-black">{labels.formMessage}</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={labels.formMessagePlaceholder}
                                className="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:border-[#D4A343]"
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#D4A343] text-white px-12 py-4  hover:bg-[#c89338] transition-colors text-lg"
                            >
                                {labels.formSubmit}
                            </button>
                        </div>
                    </form>

                    <div className="mt-12 pt-12 border-t border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                            <div>
                                <Mail className="w-8 h-8 mx-auto mb-3 text-[#0B3B5B]" />
                                <p className="text-sm text-gray-600">{labels.contactEmailLabel}</p>
                                <p className="text-lg text-black">investimentos@ombakago.ao</p>
                            </div>
                            <div>
                                <Phone className="w-8 h-8 mx-auto mb-3 text-[#0B3B5B]" />
                                <p className="text-sm text-gray-600">{labels.contactPhoneLabel}</p>
                                <p className="text-lg text-black">+244 123 456 789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}