import React from 'react';
import { motion } from 'framer-motion';

const SystemStatus: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full max-w-sm glass-panel p-6 rounded-2xl relative overflow-hidden group"
        >
            {/* Scanning line animation */}
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-neon-blue/0 via-neon-blue/20 to-neon-blue/0 animate-scan-line pointer-events-none" />

            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <span className="text-sm font-semibold tracking-wider text-white/80 uppercase">AI System Link</span>
                <span className="flex items-center gap-2 text-xs font-mono text-emerald-glow">
                    <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse glow-emerald" style={{ boxShadow: '0 0 10px #00ff9d' }}></span>
                    ACTIVE
                </span>
            </div>

            <div className="space-y-5">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Core Intelligence</span>
                    <span className="text-sm font-light text-neon-blue">Online & Learning</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Current Project</span>
                    <span className="text-sm font-light text-white">MindMirror AI</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Mission</span>
                    <span className="text-sm font-light text-white">Building Fair Digital Systems</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Region Focus</span>
                    <span className="text-sm font-light text-white">Emerging Economies</span>
                </div>
            </div>

            {/* Subtle corner elements for futuristic minimal aesthetic */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30 rounded-tl-xl m-2" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30 rounded-br-xl m-2" />
        </motion.div>
    );
};

export default SystemStatus;
