import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, textVariant } from '../../utils/animations';
import { Network, Database, Lock } from 'lucide-react';

const focusAreas = [
    {
        title: 'Distributed Machine Learning',
        description: 'Architecting training pipelines across distributed nodes to reduce latency and improve model convergence times for large-scale enterprise data.',
        icon: Network
    },
    {
        title: 'High-Throughput Inference',
        description: 'Optimizing deployed models (tensorRT, ONNX) to handle thousands of requests per second with sub-100ms latency bounds.',
        icon: Database
    },
    {
        title: 'AI System Security & Trust',
        description: 'Implementing robust safeguards against adversarial attacks and ensuring data privacy compliance within intelligent architectures.',
        icon: Lock
    }
];

const Focus: React.FC = () => {
    return (
        <section id="focus" className="relative w-full py-24 bg-primary-dark">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start"
                >
                    {/* Left Column - Heading */}
                    <div className="w-full md:w-1/3 sticky top-32">
                        <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center px-4 py-1.5 rounded-full border border-muted-violet/30 bg-muted-violet/5">
                            <span className="text-xs font-semibold tracking-widest text-muted-violet uppercase">Current Priorities</span>
                        </motion.div>

                        <motion.h2 variants={textVariant(0.1)} className="font-heading text-4xl lg:text-5xl font-bold mb-6">
                            Active <br /><span className="text-gradient">Focus Areas</span>
                        </motion.h2>

                        <motion.p variants={textVariant(0.2)} className="text-white/60 text-base font-light leading-relaxed">
                            My current engineering efforts are directed towards solving complex scalability challenges in modern AI systems, ensuring they remain robust under heavy production loads.
                        </motion.p>
                    </div>

                    {/* Right Column - Focus List */}
                    <div className="w-full md:w-2/3 flex flex-col gap-6">
                        {focusAreas.map((area) => {
                            const Icon = area.icon;
                            return (
                                <motion.div
                                    key={area.title}
                                    variants={fadeInUp}
                                    className="p-8 rounded-2xl glass-panel group border hover:border-muted-violet/30 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary-navy border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-5 h-5 text-muted-violet opacity-80" />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white/90 mb-3">{area.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed font-light">
                                            {area.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Focus;
