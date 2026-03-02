import React from 'react';
import { motion } from 'framer-motion';

interface OrbitalDataNodeProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    angle: number;
    radius: number;
    isActive?: boolean;
}

export const OrbitalDataNode: React.FC<OrbitalDataNodeProps> = ({ icon, label, value, isActive }) => {
    return (
        <div className="absolute top-1/2 left-1/2 -ml-6 -mt-6 w-12 h-12 group/node pointer-events-auto">
            <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.25 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
                {/* Active pulse effect - Tech Purple */}
                {isActive && (
                    <motion.div
                        className="absolute inset-0 rounded-full border border-tech-purple/50"
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
                    />
                )}

                {/* Node circle */}
                <div className="
                    w-full h-full rounded-full
                    bg-[#0B0F1A]/95 backdrop-blur-xl
                    border border-white/10
                    flex items-center justify-center
                    cursor-default
                    transition-all duration-400
                    group-hover/node:border-tech-purple/60
                    group-hover/node:shadow-[0_0_20px_rgba(123,92,255,0.4)]
                    group-hover/node:bg-[#0B0F1A]/100
                    relative overflow-hidden
                ">
                    <div className="absolute inset-0 bg-tech-purple/0 group-hover/node:bg-tech-purple/5 transition-colors duration-400" />
                    <div className="text-white/60 group-hover/node:text-tech-purple transition-all duration-400 z-10">
                        {icon}
                    </div>
                </div>

                {/* Brand-styled Tooltip */}
                <div className="
                    absolute left-14 top-1/2 -translate-y-1/2
                    flex flex-col px-4 py-2.5
                    bg-[#0B0F1A]/98 border border-tech-purple/20
                    rounded-2xl
                    opacity-0 -translate-x-3
                    group-hover/node:opacity-100 group-hover/node:translate-x-0
                    transition-all duration-400
                    backdrop-blur-2xl whitespace-nowrap
                    shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_15px_rgba(123,92,255,0.1)]
                    pointer-events-none z-50
                    min-w-[120px]
                ">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-tech-purple font-bold mb-1">{label}</span>
                    <span className="text-xs font-mono font-bold text-headings tracking-tight">{value}</span>
                </div>
            </motion.div>
        </div>
    );
};

export default OrbitalDataNode;
