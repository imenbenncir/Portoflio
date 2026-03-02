import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import AnimatedCard from '../ui/AnimatedCard';
import { ExternalLink, Database, Network, Server } from 'lucide-react';

const projectsData = [
    {
        title: 'Distributed Inference Engine',
        description: 'Architected a low-latency, high-throughput inference service reducing model response times by 40% for real-time enterprise applications.',
        tags: ['React', 'Node.js', 'TensorRT', 'Kubernetes'],
        color: 'tech-purple' as const,
        icon: Server
    },
    {
        title: 'Federated Learning Network',
        description: 'Designed a privacy-preserving distributed learning framework enabling multiple institutions to train models without sharing raw data.',
        tags: ['Python', 'PyTorch', 'gRPC', 'PostgreSQL'],
        color: 'electric-cyan' as const,
        icon: Network
    },
    {
        title: 'Autonomous Data Pipeline',
        description: 'Built a self-healing, automated data ingestion and preprocessing pipeline capable of handling terabytes of multimodal data daily.',
        tags: ['Apache Kafka', 'Python', 'AWS', 'Docker'],
        color: 'soft-gold' as const,
        icon: Database
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="relative w-full py-32 px-6 border-t border-white/5 bg-secondary-dark">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="container mx-auto max-w-6xl"
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div variants={fadeInUp} className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center px-4 py-1.5 rounded-full border border-tech-purple/20 bg-tech-purple/5">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-tech-purple uppercase">Architecture Portfolio</span>
                        </div>
                        <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-headings heading-shimmer">
                            Engineering <span className="text-gradient">Case Studies</span>
                        </h2>
                        <p className="text-body text-lg font-light max-w-lg">
                            A selection of production-grade systems resulting from rigorous architecture and optimization.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, idx) => {
                        const Icon = project.icon;
                        const accentColor =
                            project.color === 'tech-purple' ? 'text-tech-purple' :
                                project.color === 'electric-cyan' ? 'text-electric-cyan' :
                                    'text-soft-gold';

                        const accentBg =
                            project.color === 'tech-purple' ? 'bg-tech-purple/10' :
                                project.color === 'electric-cyan' ? 'bg-electric-cyan/10' :
                                    'bg-soft-gold/10';

                        const accentBorder =
                            project.color === 'tech-purple' ? 'border-tech-purple/20' :
                                project.color === 'electric-cyan' ? 'border-electric-cyan/20' :
                                    'border-soft-gold/20';

                        return (
                            <motion.div key={project.title} variants={fadeInUp} custom={idx} className="group">
                                <AnimatedCard glowColor={project.color} className="h-full flex flex-col p-8 bg-primary-dark border border-white/5 relative">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={`w-12 h-12 rounded-xl ${accentBg} border ${accentBorder} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                                            <Icon className={`w-6 h-6 ${accentColor}`} />
                                        </div>
                                        <a href="#" className="p-2 text-white/40 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-headings">{project.title}</h3>
                                    <p className="text-body text-sm mb-8 flex-grow leading-relaxed font-light">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] px-3 py-1 font-medium bg-white/[0.03] border border-white/10 rounded-md text-white/50 tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </AnimatedCard>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
