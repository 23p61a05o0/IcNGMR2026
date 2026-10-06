import React, { useState } from 'react';
import {
    MapPin,
    Mail,
    Send,
    Trophy,
    GraduationCap,
    Calendar,
    UserCheck,
    ChevronDown,
    Award
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ContactAndAwards: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ fullName: '', email: '', message: '' });
    };

    const awardCategories = [
        {
            id: 'best-researcher',
            title: 'Best Researcher Award',
            description: 'Recognizing outstanding scholars for their exceptional contributions, innovative research, and significant impact in their respective fields.',
            icon: <Award className="h-7 w-7 sm:h-8 sm:w-8 text-sky-600" />,
            theme: 'from-sky-500/10 to-sky-600/5',
            accentColor: 'text-sky-600'
        },
        {
            id: 'best-women-researcher',
            title: 'Best Women Researcher Award',
            description: 'Honoring exceptional women researchers whose dedication and work have significantly advanced scientific knowledge and innovation.',
            icon: <UserCheck className="h-7 w-7 sm:h-8 sm:w-8 text-indigo-600" />,
            theme: 'from-indigo-500/10 to-indigo-600/5',
            accentColor: 'text-indigo-600'
        },
        {
            id: 'best-teacher',
            title: 'Best Teacher Award',
            description: 'Celebrating outstanding educators for their excellence in teaching, dedicated mentorship, and inspiring the next generation.',
            icon: <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-600" />,
            theme: 'from-emerald-500/10 to-emerald-600/5',
            accentColor: 'text-emerald-600'
        }
    ];

    const scrollToContact = () => {
        document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white">

            {/* 1. Awards Section */}
            <section className="relative overflow-hidden border-b border-slate-100 py-8 lg:py-12">
                {/* Background Orbs */}
                <div className="absolute top-[-10%] right-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-sky-100/50 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-100/50 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Header Section */}
                    <ScrollReveal variant="3d" direction="down" className="text-center mb-8 sm:mb-12">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-600 text-[10px] font-bold uppercase tracking-widest shadow-sm mb-3 sm:mb-4">
                            <Trophy className="h-3 w-3 text-amber-500" />
                            <span>ICNGMR 2026 Recognition</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight">
                            Call for <span className="text-sky-500">Awards</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                            Celebrate and honor the exceptional contributions of researchers driving innovation.
                        </p>
                    </ScrollReveal>

                    {/* Featured Image Section */}
                    <ScrollReveal variant="3d" direction="up" delay={100} className="mb-10 sm:mb-16 relative max-w-5xl mx-auto">
                        <div className="group relative aspect-[16/10] sm:aspect-[16/7] overflow-hidden rounded-2xl sm:rounded-[2rem] shadow-xl bg-slate-200 md:hover:shadow-2xl md:hover:shadow-sky-500/20 transition-all duration-700">
                            <img
                                src="/01.JPG"
                                alt="Awards Ceremony"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 text-white right-4">
                                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-sky-400 mb-1">Excellence in Research</p>
                                <h3 className="text-lg sm:text-2xl font-black leading-snug">Annual Recognition Ceremony</h3>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Categories Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
                        {awardCategories.map((category, index) => (
                            <ScrollReveal
                                key={category.id}
                                variant="3d"
                                direction="up"
                                delay={index * 120}
                                className="h-full"
                            >
                                <div
                                    className="group relative bg-white rounded-2xl sm:rounded-[2rem] border border-slate-100 p-6 sm:p-8 shadow-md sm:shadow-lg shadow-slate-200/30 md:hover:-translate-y-2.5 md:hover:shadow-2xl md:hover:shadow-sky-500/25 md:hover:border-sky-300 md:hover:scale-[1.01] transition-all duration-500 h-full flex flex-col justify-start cursor-default"
                                >
                                    <div className={`p-3.5 sm:p-4 rounded-xl bg-gradient-to-br ${category.theme} w-fit mb-4 sm:mb-6 shadow-sm group-hover:scale-115 group-hover:rotate-6 transition-all duration-500`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-sky-600 transition-colors duration-300">
                                        {category.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Application Guide */}
                    <ScrollReveal variant="3d" direction="up" delay={200} className="max-w-5xl mx-auto">
                        <div className="bg-slate-900 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 text-white relative overflow-hidden md:hover:shadow-2xl md:hover:shadow-sky-500/20 transition-all duration-500">
                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
                                <div className="max-w-md text-center lg:text-left">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4">How to Apply?</h2>
                                    <p className="text-slate-400 text-xs sm:text-sm mb-6 sm:mb-8 font-medium leading-relaxed">
                                        Submit your application form before the deadline .
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
                                            <div className="p-2 bg-white/10 rounded-lg"><Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-sky-400" /></div>
                                            <div className="text-left">
                                                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Deadline</p>
                                                <p className="text-sm sm:text-base font-bold">15th November, 2026</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
                                            <div className="p-2 bg-white/10 rounded-lg"><Mail className="h-4 w-4 sm:h-5 sm:w-5 text-sky-400" /></div>
                                            <div className="text-left">
                                                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Email To</p>
                                                <p className="text-sm sm:text-base font-bold text-sky-100 break-all">icngmr2026@vbithyd.ac.in</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full sm:w-72 flex-shrink-0">
                                    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-center space-y-3 sm:space-y-4 shadow-xl md:hover:scale-[1.02] md:hover:shadow-2xl transition-all duration-300">
                                        <Trophy className="h-8 w-8 sm:h-10 sm:w-10 text-sky-500 mx-auto" />
                                        <h4 className="text-slate-900 font-black text-base sm:text-lg">Nomination Form</h4>
                                        <button className="w-full bg-sky-500 text-white py-2.5 sm:py-3 rounded-xl font-bold hover:bg-sky-600 transition-colors shadow-md text-xs sm:text-sm">
                                            Download Form
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Scroll Indicator */}
                    <div className="mt-8 sm:mt-12 flex flex-col items-center">
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Contact Details</p>
                        <button onClick={scrollToContact} className="p-2 bg-slate-100 rounded-full text-slate-400 hover:text-sky-500 animate-bounce transition-colors">
                            <ChevronDown size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Contact Section */}
            <section id="contact-section" className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <ScrollReveal variant="3d" direction="down" className="text-center mb-8 sm:mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-2">Contact Us</h2>
                        <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full"></div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                        {/* Form */}
                        <ScrollReveal variant="3d" direction="left" delay={100}>
                            <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-lg sm:shadow-xl shadow-slate-200/40 p-6 sm:p-8 border border-slate-100 md:hover:shadow-2xl md:hover:border-sky-200 transition-all duration-500">
                                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4 sm:mb-6">Send a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium text-xs sm:text-sm"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 ml-1">E-mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium text-xs sm:text-sm"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1.5 ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={4}
                                            className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium text-xs sm:text-sm resize-none"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-slate-900 text-white py-3 sm:py-3.5 rounded-xl font-bold md:hover:bg-sky-600 md:hover:-translate-y-0.5 md:hover:shadow-lg transition-all flex items-center justify-center text-xs sm:text-sm"
                                    >
                                        <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </ScrollReveal>

                        {/* Details */}
                        <ScrollReveal variant="3d" direction="right" delay={150} className="space-y-6">
                            <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-lg sm:shadow-xl shadow-slate-200/40 p-6 sm:p-8 border border-slate-100 md:hover:shadow-2xl md:hover:border-sky-200 transition-all duration-500">
                                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4 sm:mb-6">Get in Touch</h3>
                                <div className="space-y-5 sm:space-y-6">
                                    {[
                                        { icon: MapPin, color: 'text-sky-500', bg: 'bg-sky-50', title: 'Location', detail: 'VBIT, Aushapur, Ghatkesar, Telangana - 501301' },
                                        { icon: Mail, color: 'text-purple-500', bg: 'bg-purple-50', title: 'Email', detail: 'icngmr2026@vbithyd.ac.in' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start">
                                            <div className={`p-2.5 sm:p-3 rounded-xl ${item.bg} ${item.color} mr-3 sm:mr-4 flex-shrink-0`}>
                                                <item.icon size={18} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 text-[10px] uppercase tracking-widest">{item.title}</h4>
                                                <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed">{item.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl sm:rounded-[2rem] shadow-md p-2 sm:p-3 border border-slate-100 overflow-hidden h-48 sm:h-52 md:hover:shadow-xl transition-shadow">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.840742512683!2d78.71886857591636!3d17.470509699818817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76ea23dfa8d5%3A0x72d3ea7f454e19ea!2sVignana%20Bharathi%20Institute%20of%20Technology%20(VBIT)%20%7C%20Top%20Engineering%20Colleges%20In%20Telangana!5e0!3m2!1sen!2sin!4v1743510360000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: '1rem' }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="VBIT Map"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactAndAwards;