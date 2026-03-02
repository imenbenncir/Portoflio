import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant, fadeInUp } from '../../utils/animations';
import { Rocket, Server, Globe, Cpu } from 'lucide-react';

const pillars = [
    {
        icon: Rocket,
        title: 'Mission',
        desc: 'Build AI systems that solve high-impact, global-scale problems — bridging research and production with zero compromise.',
        color: 'text-electric-blue',
        border: 'hover:border-electric-blue/40',
        glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    },
    {
        icon: Server,
        title: 'Scalability',
        desc: 'Architecture designed to scale from prototype to planetary operation — microservices, distributed compute, high-availability by design.',
        color: 'text-muted-violet',
        border: 'hover:border-muted-violet/40',
        glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
    },
    {
        icon: Globe,
        title: 'Global Ambition',
        desc: 'Engineering at the intersection of cultures, markets, and technologies. Every system is built to operate at international scale.',
        color: 'text-neon-blue',
        border: 'hover:border-neon-blue/40',
        glow: 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
    },
    {
        icon: Cpu,
        title: 'Precision Engineering',
        desc: 'Zero-compromise execution culture. Rigorous architecture reviews, clean abstractions, and elite-level engineering standards.',
        color: 'text-electric-blue',
        border: 'hover:border-electric-blue/40',
        glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    },
];

const Vision: React.FC = () => {
    return (
        <section id="startup-vision" className="w-full py-28 px-6 relative overflow-hidden border-y border-white/5">

            {/* Background gradient */}
            <div className="absolute inset-0 bg-primary-navy/60 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

            {/* Ambient orb */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[200px] rounded-full bg-electric-blue/4 blur-[120px] pointer-events-none" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="container mx-auto max-w-5xl relative z-10"
            >
                {/* Section header */}
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-blue/20 bg-electric-blue/5 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
                        <span className="text-[10px] uppercase tracking-[0.2em] text-electric-blue font-semibold">Deep Tech Startup Vision</span>
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                        Engineering Systems{' '}
                        <span className="text-gradient">Built for Impact</span>
                    </h2>
                    <p className="text-white/55 text-base lg:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        "The future doesn't belong to those who just write code. It belongs to those who understand the{' '}
                        <span className="text-white/80 font-normal">minds of the people</span>{' '}
                        using it."
                    </p>
                    <div className="w-20 h-px rounded-full bg-gradient-to-r from-electric-blue to-muted-violet mx-auto mt-8" />
                </motion.div>

                {/* 2×2 pillars grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.title}
                            variants={textVariant(i * 0.1)}
                            className={`
                                glass-panel rounded-2xl p-7 border border-white/5
                                ${p.border} ${p.glow}
                                transition-all duration-500 group relative overflow-hidden
                            `}
                        >
                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                                <div className={`absolute inset-0 bg-gradient-to-bl from-current/10 to-transparent ${p.color}`} />
                            </div>
                            <p.icon className={`w-7 h-7 ${p.color} mb-4 transition-transform duration-300 group-hover:scale-110`} />
                            <h3 className="text-lg font-bold text-white/90 mb-2 tracking-tight">{p.title}</h3>
                            <p className="text-sm text-white/55 leading-relaxed font-light">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom quote / ambition line */}
                <motion.p
                    variants={textVariant(0.5)}
                    className="text-center text-white/35 text-sm tracking-widest uppercase mt-12 font-medium"
                >
                    Tunis · Global Scale · Intelligent Systems
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Vision;
