import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { Target, Zap, Globe } from 'lucide-react';

const StartupVision: React.FC = () => {
    return (
        <section id="startup-vision" className="relative w-full py-24 bg-primary-dark/50 border-y border-white/[0.03]">
            {/* Background decoration - Tech Purple tone */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tech-purple/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
                >
                    {/* Left Side: Section Label */}
                    <div className="lg:col-span-3">
                        <motion.div variants={fadeInUp} className="flex items-center gap-3">
                            <div className="w-10 h-[1px] bg-tech-purple/40" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tech-purple/80">
                                Vision Strategy
                            </span>
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-bold text-headings tracking-tight leading-tight">
                            Engineering <br /> The Global Future.
                        </motion.h2>
                    </div>

                    {/* Right Side: Structured Grid */}
                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <motion.div variants={fadeInUp} className="group p-8 rounded-2xl glass-card border-white/[0.05] hover:border-tech-purple/30 transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-tech-purple/10 flex items-center justify-center mb-6 border border-tech-purple/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <Target className="w-6 h-6 text-tech-purple" />
                            </div>
                            <h3 className="text-sm font-bold text-headings uppercase tracking-widest mb-3">The Mission</h3>
                            <p className="text-body text-sm leading-relaxed font-light">
                                Architecting the foundational intelligence layer for next-generation global startups.
                            </p>
                        </motion.div>

                        {/* Focus */}
                        <motion.div variants={fadeInUp} className="group p-8 rounded-2xl glass-card border-white/[0.05] hover:border-electric-cyan/30 transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 flex items-center justify-center mb-6 border border-electric-cyan/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <Zap className="w-6 h-6 text-electric-cyan" />
                            </div>
                            <h3 className="text-sm font-bold text-headings uppercase tracking-widest mb-3">Core Pillars</h3>
                            <div className="flex flex-col gap-2">
                                {['Autonomous Nodes', 'Neural Scaling', 'Secure Core'].map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-electric-cyan/40" />
                                        <span className="text-body text-xs font-light">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Vision */}
                        <motion.div variants={fadeInUp} className="group p-8 rounded-2xl glass-card border-white/[0.05] hover:border-soft-gold/30 transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-soft-gold/10 flex items-center justify-center mb-6 border border-soft-gold/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <Globe className="w-6 h-6 text-soft-gold" />
                            </div>
                            <h3 className="text-sm font-bold text-headings uppercase tracking-widest mb-3">Grand Vision</h3>
                            <p className="text-body text-sm leading-relaxed font-light">
                                Bridging the gap between frontier AI research and planet-scale production systems.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom subtle detail */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="mt-20 pt-12 border-t border-white/[0.03] flex justify-between items-center"
                >
                    <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.5em]">
                        AI Architect Brand // 2026 Edition
                    </div>
                    <div className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-tech-purple/20" />
                        <div className="w-2 h-2 rounded-full bg-electric-cyan/20" />
                        <div className="w-2 h-2 rounded-full bg-soft-gold/20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StartupVision;
