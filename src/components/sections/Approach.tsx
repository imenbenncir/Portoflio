import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, textVariant } from '../../utils/animations';
import { Search, Compass, Rocket } from 'lucide-react';

const steps = [
    {
        title: 'Analyze',
        description: 'Deep dive into data architecture, identifying bottlenecks, and formulating research-backed models for optimal solutions.',
        icon: Search
    },
    {
        title: 'Architect',
        description: 'Designing scalable, robust intelligent systems using state-of-the-art frameworks tailored for production environments.',
        icon: Compass
    },
    {
        title: 'Deploy',
        description: 'Implementing seamless integration pipelines, ensuring high availability, performance, and continuous learning capabilities.',
        icon: Rocket
    }
];

const Approach: React.FC = () => {
    return (
        <section id="approach" className="relative w-full py-24 bg-primary-navy/50 border-y border-white/5 overflow-hidden">

            {/* SVG Animated Graph Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
                <motion.svg
                    className="w-full h-full"
                    viewBox="0 0 1000 400"
                    preserveAspectRatio="xMidYMid slice"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <motion.path
                        d="M 0 200 Q 250 50 500 200 T 1000 200"
                        fill="transparent"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    />
                    <motion.path
                        d="M 0 250 Q 300 400 600 250 T 1000 250"
                        fill="transparent"
                        stroke="#8b5cf6"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                        viewport={{ once: true }}
                    />
                    {/* Animated Nodes */}
                    <motion.circle cx="250" cy="125" r="4" fill="#3b82f6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1 }} viewport={{ once: true }} />
                    <motion.circle cx="500" cy="200" r="4" fill="#8b5cf6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} viewport={{ once: true }} />
                    <motion.circle cx="750" cy="200" r="4" fill="#3b82f6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2 }} viewport={{ once: true }} />
                </motion.svg>
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center px-4 py-1.5 rounded-full border border-electric-blue/30 bg-electric-blue/5">
                        <span className="text-xs font-semibold tracking-widest text-electric-blue uppercase">Methodology</span>
                    </motion.div>

                    <motion.h2 variants={textVariant(0.1)} className="font-heading text-3xl md:text-5xl font-bold mb-6">
                        Research & Engineering <span className="text-gradient">Approach</span>
                    </motion.h2>
                    <motion.p variants={textVariant(0.2)} className="text-white/60 max-w-2xl text-lg font-light">
                        Bridging the gap between academic research and production-grade engineering. Every system is built on a foundation of rigorous analysis and scalable architecture.
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.title}
                                variants={fadeInUp}
                                className="glass-panel p-8 rounded-2xl relative group overflow-hidden border border-white/5 hover:border-electric-blue/20 transition-all duration-500 bg-primary-dark/50 backdrop-blur-xl"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />

                                <div className="w-14 h-14 rounded-xl bg-primary-dark border border-white/10 flex items-center justify-center mb-6 group-hover:border-electric-blue/30 transition-colors">
                                    <Icon className="w-6 h-6 text-electric-blue opacity-80" />
                                </div>

                                <div className="flex items-baseline gap-4 mb-4">
                                    <span className="text-4xl font-heading font-bold text-white/5">0{index + 1}</span>
                                    <h3 className="text-xl font-bold tracking-tight text-white/90">{step.title}</h3>
                                </div>

                                <p className="text-white/60 leading-relaxed font-light text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Approach;
