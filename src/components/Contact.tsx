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
                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-lg font-semibold text-foreground mb-6">
                                Kirim Pesan 💬
                            </h3>

                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                        <p className="text-lg font-medium text-foreground">Pesan Terkirim!</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Terima kasih, saya akan segera membalas.
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
                                            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">
                                                Nama
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-muted border border-card-border text-foreground
                                   placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50
                                   focus:border-primary/50 transition-all duration-300"
                                                placeholder="Nama lengkap Anda"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1.5">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-muted border border-card-border text-foreground
                                   placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50
                                   focus:border-primary/50 transition-all duration-300"
                                                placeholder="email@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">
                                                Pesan
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-muted border border-card-border text-foreground
                                   placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50
                                   focus:border-primary/50 transition-all duration-300 resize-none"
                                                placeholder="Tulis pesan Anda di sini..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent
                                 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary/25
                                 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                                        >
                                            <Send className="w-4 h-4" />
                                            Kirim Pesan
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </ScrollReveal>

                    {/* Contact Info & Social */}
                    <ScrollReveal direction="right">
                        <div className="space-y-6">
                            <div className="glass rounded-2xl p-8">
                                <h3 className="text-lg font-semibold text-foreground mb-4">
                                    Info Kontak 📬
                                </h3>
                                <div className="space-y-3 text-muted-foreground">
                                    <p className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-primary" />
                                        <span>fachrimufidan26@gmail.com</span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <Github className="w-5 h-5 text-primary" />
                                        <a
                                            href="https://github.com/fensacel"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors"
                                        >
                                            github.com/fensacel
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="glass rounded-2xl p-8">
                                <h3 className="text-lg font-semibold text-foreground mb-6">
                                    Social Media 🔗
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 rounded-xl glass flex items-center justify-center
                                  text-muted-foreground ${social.color}
                                  hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                                            aria-label={social.name}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="glass rounded-2xl p-8">
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    Lokasi 📍
                                </h3>
                                <p className="text-muted-foreground">
                                    Slawi, Kabupaten Tegal, Jawa Tengah, Indonesia
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
