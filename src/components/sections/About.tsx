import React from 'react';
const IMEN_UNIQUE_MARKER = "IMEN_BUREAU_FIX_VERIFIED";
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { BrainCircuit, Server, Shield } from 'lucide-react';

const About: React.FC = () => {
    console.log(IMEN_UNIQUE_MARKER);
    return (
        <section id="about" className="relative w-full py-32 px-6 overflow-hidden bg-primary-dark">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="container mx-auto max-w-6xl"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Professional Summary */}
                    <motion.div variants={fadeInUp} className="flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-tech-purple/20 w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-tech-purple animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-tech-purple">Systems Thinking</span>
                        </div>
                        <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-headings">
                            Engineering at the <br />
                            <span className="text-gradient">Intersection of Scale & Intelligence</span>
                        </h2>
                        <div className="space-y-6">
                            <p className="text-body text-lg leading-relaxed font-light">
                                I am an AI Architect dedicated to building robust, high-performance platforms that transform research-level intelligence into production-grade enterprise solutions.
                            </p>
                            <p className="text-body text-lg leading-relaxed font-light">
                                My focus lies in architecting scalable data ecosystems, optimizing distributed computing clusters, and implementing privacy-preserving frameworks for global-scale AI applications.
                            </p>
                        </div>

                        <div className="flex gap-10 mt-6 items-center">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-tech-purple">5+</span>
                                <span className="text-[10px] text-micro uppercase tracking-[0.2em] mt-2 font-bold">Years Architecture</span>
                            </div>
                            <div className="w-px h-12 bg-white/10 mx-2"></div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-electric-cyan">30+</span>
                                <span className="text-[10px] text-micro uppercase tracking-[0.2em] mt-2 font-bold">Nodes Orchestrated</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Core Competencies */}
                    <div className="relative h-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
                        <div className="absolute inset-x-0 -bottom-20 h-96 bg-tech-purple/5 blur-[120px] rounded-full pointer-events-none" />
                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full"
                        >
                            {[
                                { icon: BrainCircuit, title: 'AI Architecture', desc: 'Predictive modeling, LLM orchestration, and deep learning infrastructure.', color: 'text-tech-purple', bg: 'bg-tech-purple/10' },
                                { icon: Server, title: 'Scalable Ops', desc: 'Global distribution, low-latency clusters, and auto-scaling node clusters.', color: 'text-electric-cyan', bg: 'bg-electric-cyan/10' },
                                { icon: Shield, title: 'Secure Intelligence', desc: 'Enterprise-grade privacy protocols and federated security layers.', color: 'text-soft-gold', bg: 'bg-soft-gold/10' },
                                { icon: Shield, title: 'Core Protocol', desc: 'Building the fundamental AI logic for next-gen consumer hardware.', color: 'text-tech-purple', bg: 'bg-tech-purple/5' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="glass-card p-8 border border-white/5 hover:border-tech-purple/30 transition-all duration-500 group flex flex-col items-center text-center"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${item.bg} border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                                        <item.icon className={`w-7 h-7 ${item.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-headings">{item.title}</h3>
                                    <p className="text-sm text-body font-light leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
