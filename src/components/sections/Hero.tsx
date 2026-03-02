import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import SocialIcons from '../ui/SocialIcons';
import { ArrowRight, Cpu, Clock, MapPin, Battery, BatteryCharging, Globe } from 'lucide-react';
import AICompanion from '../ui/AICompanion';
import OrbitalDataNode from '../ui/OrbitalDataNode';
import profileImg from '../../assets/profile.png';



const useWindowWidth = () => {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
};

const CinematicCore = () => {
    const [time, setTime] = useState<Date>(new Date());
    const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
    const [isCharging, setIsCharging] = useState<boolean>(false);
    const [userLocation, setUserLocation] = useState<string>('Detecting...');
    const windowWidth = useWindowWidth();

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        if ('getBattery' in navigator) {
            (navigator as any).getBattery().then((battery: any) => {
                setBatteryLevel(battery.level * 100);
                setIsCharging(battery.charging);
            });
        }
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (p) => {
                    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${p.coords.latitude}&lon=${p.coords.longitude}`);
                    const data = await res.json();
                    setUserLocation(`${data.address.city || 'Online'}, ${data.address.country_code?.toUpperCase() || ''}`);
                }
            );
        }
        return () => clearInterval(timer);
    }, []);

    const formatTime = (d: Date, tz?: string) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: tz, hour12: false });
    const innerRadius = windowWidth < 768 ? 140 : 185;

    const energyNodes = [
        { icon: <Clock className="w-4 h-4" />, label: "Your Time", value: formatTime(time), angle: 0, isActive: true },
        { icon: <MapPin className="w-4 h-4" />, label: "Location", value: userLocation, angle: 90, isActive: false },
        { icon: <Globe className="w-4 h-4 text-tech-purple" />, label: "Tunis (HQ)", value: formatTime(time, 'Africa/Tunis'), angle: 180, isActive: true },
        {
            icon: isCharging ? <BatteryCharging className="w-4 h-4 text-green-400" /> : <Battery className="w-4 h-4 text-tech-purple" />,
            label: "Battery", value: batteryLevel !== null ? `${Math.round(batteryLevel)}%` : '---', angle: 270, isActive: batteryLevel !== null
        },
    ];

    return (
        <div className="relative w-full max-w-[860px] aspect-square mx-auto flex items-center justify-center my-8 group/core">
            {/* AMBIENT AURA */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-[10%] rounded-full blur-[100px] bg-tech-purple/5 opacity-20" />
                <div className="absolute inset-[25%] rounded-full blur-[50px] bg-electric-cyan/5 opacity-30 animate-breath" />
            </div>

            {/* ORBIT RING */}
            <div className="absolute top-1/2 left-1/2 rounded-full border border-tech-purple/10 pointer-events-none" style={{ width: innerRadius * 2, height: innerRadius * 2, marginTop: -innerRadius, marginLeft: -innerRadius }} />

            {/* ROTATING ENERGY NODES */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: innerRadius * 2, height: innerRadius * 2, animation: 'spin 25s linear infinite' }}>
                {energyNodes.map((n) => (
                    <div key={n.label} className="absolute top-1/2 left-1/2 w-0 h-0">
                        <div style={{ transform: `rotate(${n.angle}deg) translateX(${innerRadius}px)` }}>
                            <div style={{ animation: 'spin 25s linear infinite reverse' }}>
                                <OrbitalDataNode {...n} angle={0} radius={0} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* AI COMPANION */}
            <div className="absolute -top-12 -right-6 z-40 hidden md:block">
                <AICompanion />
            </div>

            {/* PROFILE IMAGE WITH SLOW GRADIENT RING */}
            <div className="relative z-10 flex items-center justify-center">
                {/* 15s slow rotation ring */}
                <div
                    className="absolute rounded-full p-[3px] animate-spin-slow"
                    style={{
                        width: 'calc(100% + 12px)',
                        height: 'calc(100% + 12px)',
                        background: 'conic-gradient(from 0deg, #7B5CFF, #00E0FF, #F59E0B, #7B5CFF)',
                    }}
                >
                    <div className="w-full h-full rounded-full bg-primary-dark" />
                </div>

                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-[2] w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-white/5"
                    style={{
                        boxShadow: '0 0 60px rgba(123, 92, 255, 0.15)',
                    }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                        style={{ backgroundImage: `url(${profileImg})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-tech-purple/20 via-transparent to-electric-cyan/20" />
                </motion.div>
            </div>
        </div>
    );
};

const Hero: React.FC = () => {
    const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                    {/* LEFT PART: CINEMATIC CORE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="flex-shrink-0"
                    >
                        <CinematicCore />
                    </motion.div>

                    {/* RIGHT PART: TEXT CONTENT */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
                        {/* BADGE */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-8 px-5 py-2 rounded-full glass-card border-tech-purple/20 inline-flex items-center gap-2"
                        >
                            <Cpu className="w-4 h-4 text-tech-purple" />
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/70">
                                AI Systems Architect | Global Scale
                            </span>
                        </motion.div>

                        {/* MAIN HEADING - ANIMATED GRADIENT */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-8"
                        >
                            <span className="text-gradient">Architecting</span> <br />
                            <span className="heading-shimmer">Future Intelligence.</span>
                        </motion.h1>

                        {/* SUBTEXT - FADE UP ON LOAD */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                            className="text-lg text-body mb-12 max-w-lg font-light leading-relaxed"
                        >
                            Building high-performance <span className="text-white">AI-driven platforms</span> for global scaling startups, combining research discipline with precision architecture.
                        </motion.p>

                        {/* CTAS */}
                        <div className="flex flex-wrap items-center lg:justify-start justify-center gap-6">
                            <MagneticButton
                                onClick={() => scrollToSection('projects')}
                                className="btn-gradient px-8 py-4 transition-all !rounded-full shadow-lg shadow-tech-purple/20"
                            >
                                <span className="flex items-center gap-2">
                                    Browse Solutions <ArrowRight className="w-4 h-4" />
                                </span>
                            </MagneticButton>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => scrollToSection('contact')}
                                className="px-8 py-4 rounded-full border border-white/10 hover:border-electric-cyan/50 hover:bg-electric-cyan/5 text-sm font-semibold transition-all duration-300 relative group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-electric-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative z-10 text-white/80 group-hover:text-white">Contact Founder</span>
                            </motion.button>
                        </div>

                        {/* SOCIALS */}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-12">
                            <SocialIcons />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
