import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import AnimatedCard from '../ui/AnimatedCard';
import { MonitorSmartphone, Shield, Fingerprint } from 'lucide-react';

const services = [
    { icon: MonitorSmartphone, title: 'AI-Powered Full Stack Apps', desc: 'End-to-end development of scalable, intelligent web applications that adapt to user behaviors globally.', color: 'electric-cyan' as const },
    { icon: Shield, title: 'Digital Trust Systems', desc: 'Secure, verifiable infrastructures prioritizing user privacy and establishing unwavering digital integrity.', color: 'tech-purple' as const },
    { icon: Fingerprint, title: 'Psychological UI/UX', desc: 'Interfaces designed around deep cognitive analysis for maximum engagement, retention, and accessibility.', color: 'muted-violet' as const }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="relative w-full py-32 px-6">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="container mx-auto max-w-6xl"
            >
                <motion.div variants={fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Architectural <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
                        Comprehensive solutions engineered at the intersection of psychology and technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div key={index} variants={fadeInUp}>
                            <AnimatedCard glowColor={service.color} className="text-center p-8 h-full">
                                <div className="mx-auto w-16 h-16 rounded-full glassmorphism flex items-center justify-center mb-6">
                                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
                            </AnimatedCard>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Services;
