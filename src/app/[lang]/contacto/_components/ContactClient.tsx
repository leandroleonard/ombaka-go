'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

type ContactInfoType = 'address' | 'phone' | 'email' | 'clock';

const iconMap: Record<ContactInfoType, React.ElementType> = {
    address: MapPin,
    phone: Phone,
    email: Mail,
    clock: Clock,
};

type ContactInfo = {
    type: ContactInfoType;
    title: string;
    details: string[];
};

type Department = {
    name: string;
    email: string;
    description: string;
};

type Faq = {
    question: string;
    answer: string;
};

type SubjectOption = {
    value: string;
    label: string;
};

type Labels = {
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    heroTitle: string;
    heroSubtitle: string;
    formTitle: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formSubject: string;
    formSubjectDefault: string;
    formSubjectOptions: SubjectOption[];
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSuccessAlert: string;
    departmentsTitle: string;
    departmentsSubtitle: string;
    mapTitle: string;
    mapPlaceholder: string;
    mapAddress: string;
    faqTitle: string;
    faqPartnerLinkLabel: string;
    locale: string;
};

type Props = {
    contactInfo: ContactInfo[];
    departments: Department[];
    faqs: Faq[];
    labels: Labels;
};

export default function ContactoClient({ contactInfo, departments, faqs, labels }: Props) {
    const [formData, setFormData] = useState({
        name: '', email: '', subject: '', message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(labels.formSuccessAlert);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen pt-20">

            {/* Breadcrumbs */}
            {/* <div className="bg-[#F5F5F5] py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link href={`/${labels.locale}`} className="hover:text-[#0B3B5B]">
                            {labels.breadcrumbHome}
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-[#0B3B5B]">{labels.breadcrumbCurrent}</span>
                    </div>
                </div>
            </div> */}

            {/* Hero */}
            <section className="relative h-80 overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1763994684310-eea7df866f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwY3VzdG9tZXIlMjBzZXJ2aWNlJTIwZGVza3xlbnwxfHx8fDE3NzYyNDM2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt={labels.heroTitle}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center max-w-4xl px-4">
                        <h1 className="text-5xl md:text-6xl text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {labels.heroTitle}
                        </h1>
                        <p className="text-xl text-white/90" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {labels.heroSubtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => {
                            const Icon = iconMap[info.type];
                            return (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                    <Icon className="w-10 h-10 text-[#0B3B5B] mx-auto mb-4" />
                                    <h3 className="text-lg mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {info.title}
                                    </h3>
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Form + Departments */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                {labels.formTitle}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                                        {labels.formName} *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder={labels.formNamePlaceholder}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3B5B]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                                        {labels.formEmail} *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder={labels.formEmailPlaceholder}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3B5B]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm mb-2 text-gray-700">
                                        {labels.formSubject} *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3B5B]"
                                    >
                                        <option value="">{labels.formSubjectDefault}</option>
                                        {labels.formSubjectOptions.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                                        {labels.formMessage} *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder={labels.formMessagePlaceholder}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3B5B] resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#0B3B5B] text-white py-4 rounded-full hover:bg-[#2E7D64] transition-colors flex items-center justify-center space-x-2"
                                >
                                    <span>{labels.formSubmit}</span>
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>

                        {/* Departments */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-3xl mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {labels.departmentsTitle}
                                </h2>
                                <p className="text-gray-600 mb-6">{labels.departmentsSubtitle}</p>
                            </div>
                            <div className="space-y-4">
                                {departments.map((dept, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                        <h3 className="text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            {dept.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3">{dept.description}</p>
                                        <a
                                            href={`mailto:${dept.email}`}
                                            className="text-[#0B3B5B] hover:text-[#2E7D64] text-sm flex items-center space-x-2 transition-colors"
                                        >
                                            <Mail className="w-4 h-4" />
                                            <span>{dept.email}</span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="py-16 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-3xl mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {labels.mapTitle}
                        </h2>
                        <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-500">{labels.mapPlaceholder}</p>
                                <p className="text-sm text-gray-400 mt-2">{labels.mapAddress}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl mb-8 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {labels.faqTitle}
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600">
                                    {faq.answer}
                                    {index === 1 && (
                                        <>
                                            {' '}
                                            <Link
                                                href={`/${labels.locale}/investir`}
                                                className="text-[#0B3B5B] hover:underline"
                                            >
                                                {labels.faqPartnerLinkLabel}
                                            </Link>
                                            .
                                        </>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}