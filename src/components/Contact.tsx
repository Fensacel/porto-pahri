"use client";

import { useState } from "react";
import { Send, Github, Linkedin, Instagram, Mail, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/fensacel", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/fachrimufidan", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/mfchmufid", color: "hover:text-pink-500" },
    { name: "Email", icon: Mail, url: "mailto:fachrimufidan26@gmail.com", color: "hover:text-green-500" },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Ganti dengan nomor WhatsApp Anda (gunakan format 62...)
        const phoneNumber = "6285293467109"; // Ini contoh, ganti dengan nomor aslinya
        const whatsappMessage = `Halo Fachri! 👋\n\n*Nama:* ${formData.name}\n*Email:* ${formData.email}\n\n*Pesan:*\n${formData.message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Membuka tab baru ke WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Contact"
                    subtitle="Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi saya"
                />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Form */}
                    <ScrollReveal direction="left">
                        <div className="glass rounded-3xl p-8 border border-card-border">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                <h3 className="text-base font-bold text-foreground tracking-tight">
                                    Kirim Pesan Langsung
                                </h3>
                            </div>

                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <CheckCircle className="w-14 h-14 text-emerald-500 mb-4" />
                                        <p className="text-base font-bold text-foreground">Pesan Terkirim!</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Terima kasih, obrolan WhatsApp telah dibuka.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase">
                                                Nama Lengkap
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-2xl bg-muted/60 border border-card-border text-foreground text-sm
                                   placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40
                                   focus:border-primary/50 transition-all duration-200"
                                                placeholder="Nama lengkap Anda"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase">
                                                Alamat Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-2xl bg-muted/60 border border-card-border text-foreground text-sm
                                   placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40
                                   focus:border-primary/50 transition-all duration-200"
                                                placeholder="email@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-xs font-mono text-muted-foreground mb-1.5 uppercase">
                                                Isi Pesan
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-3 rounded-2xl bg-muted/60 border border-card-border text-foreground text-sm
                                   placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40
                                   focus:border-primary/50 transition-all duration-200 resize-none"
                                                placeholder="Tulis pesan atau tawaran kolaborasi..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary
                                 text-white rounded-2xl font-medium text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20
                                 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                                        >
                                            <Send className="w-4 h-4" />
                                            Kirim via WhatsApp
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollReveal>

                    {/* Contact Info & Social */}
                    <ScrollReveal direction="right">
                        <div className="space-y-4">
                            <div className="glass rounded-3xl p-7 border border-card-border">
                                <h3 className="text-xs font-mono uppercase text-muted-foreground mb-4">
                                    Saluran Komunikasi
                                </h3>
                                <div className="space-y-3.5 text-sm">
                                    <p className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-primary" />
                                        <span className="text-foreground font-mono">fachrimufidan26@gmail.com</span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <Github className="w-4 h-4 text-primary" />
                                        <a
                                            href="https://github.com/fensacel"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground hover:text-primary transition-colors font-mono"
                                        >
                                            github.com/fensacel
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="glass rounded-3xl p-7 border border-card-border">
                                <h3 className="text-xs font-mono uppercase text-muted-foreground mb-4">
                                    Jaringan Sosial & Profil
                                </h3>
                                <div className="flex flex-wrap gap-2.5">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-2xl glass-subtle flex items-center gap-2
                                  text-xs font-mono text-foreground border border-card-border
                                  hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
                                            aria-label={social.name}
                                        >
                                            <social.icon className="w-3.5 h-3.5 text-primary" />
                                            <span>{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="glass rounded-3xl p-7 border border-card-border">
                                <h3 className="text-xs font-mono uppercase text-muted-foreground mb-2">
                                    Domisili
                                </h3>
                                <p className="text-sm text-foreground">
                                    Kab. Tegal, Jawa Tengah, Indonesia (UTC+7)
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
