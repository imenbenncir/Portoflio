import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { cn } from '../../utils/cn';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Basic active link detection
            const sections = navLinks.map(l => l.href.substring(1));
            const scrollPos = window.scrollY + 100;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
                    setActiveLink(`#${section}`);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300",
                isScrolled ? "glass-card !rounded-none !bg-primary-dark/80 backdrop-blur-xl border-white/5 py-4" : "bg-transparent"
            )}
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-tech-purple to-electric-cyan flex items-center justify-center font-bold text-white shadow-lg shadow-tech-purple/20">
                    I
                </div>
                <div className="flex flex-col">
                    <span className="font-heading font-bold text-lg tracking-tight text-headings leading-none">
                        Imen Ben Ncir
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-tech-purple font-bold">
                        AI Architect
                    </span>
                </div>
            </div>

            <nav className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => {
                    const isActive = activeLink === link.href;
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-all duration-300 relative group py-2",
                                isActive ? "text-white" : "text-white/50 hover:text-white"
                            )}
                            onClick={() => setActiveLink(link.href)}
                        >
                            <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(123,92,255,0.8)] transition-all">
                                {link.name}
                            </span>
                            <motion.span
                                className={cn(
                                    "absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-tech-purple to-electric-cyan",
                                    isActive ? "w-full" : "w-0 group-hover:w-full"
                                )}
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                animate={{ width: isActive ? "100%" : (activeLink === link.href ? "100%" : "0%") }}
                            />
                        </a>
                    );
                })}
            </nav>

            <div className="flex items-center gap-4">
                <MagneticButton
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-gradient !px-6 !py-2.5 !text-xs !font-bold uppercase tracking-widest hover:shadow-tech-purple/40"
                >
                    Let's Build
                </MagneticButton>
            </div>
        </motion.header>
    );
};

export default Navbar;
