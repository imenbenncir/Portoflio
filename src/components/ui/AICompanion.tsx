import React from 'react';
import { motion } from 'framer-motion';

export const AICompanion: React.FC = () => {
    return (
        <motion.div
            className="relative group cursor-pointer select-none"
            animate={{
                y: [0, -20, 0],
                rotate: [-1, 1, -1],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            whileHover={{ scale: 1.1 }}
        >
            {/* Ambient halo - Purple/Cyan blend */}
            <div className="absolute inset-0 -m-6 bg-radial-gradient rounded-full pointer-events-none" style={{
                background: 'radial-gradient(circle, rgba(123,92,255,0.1) 0%, rgba(0,224,255,0.05) 60%, transparent 80%)',
                filter: 'blur(10px)',
            }} />

            {/* Glow ring pulses on hover - Cyan focus */}
            <div className="absolute inset-0 rounded-full bg-tech-purple/5 blur-2xl opacity-50 group-hover:opacity-100 group-hover:bg-electric-cyan/15 transition-all duration-700 pointer-events-none" />

            {/* SVG Cyber Owl - Re-skinned for 2026 AI Architect Brand */}
            <svg
                width="100"
                height="100"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 drop-shadow-[0_0_15px_rgba(123,92,255,0.4)]"
            >
                {/* Left wing - Tech Purple overlay */}
                <motion.path
                    d="M 60 52 L 8 28 L 32 62 L 48 65 Z"
                    fill="rgba(123,92,255,0.08)"
                    stroke="#7B5CFF"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                    animate={{ rotate: [-8, 6, -8], skewY: [-1, 1, -1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transformOrigin: '60px 52px' }}
                />

                {/* Right wing - Tech Purple overlay */}
                <motion.path
                    d="M 60 52 L 112 28 L 88 62 L 72 65 Z"
                    fill="rgba(123,92,255,0.08)"
                    stroke="#7B5CFF"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                    animate={{ rotate: [8, -6, 8], skewY: [1, -1, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transformOrigin: '60px 52px' }}
                />

                {/* Body - Deep Space */}
                <path
                    d="M 42 70 L 60 108 L 78 70 L 60 38 Z"
                    fill="rgba(11,15,26,0.98)"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    className="group-hover:stroke-electric-cyan transition-colors duration-500"
                />

                {/* Head unit */}
                <path
                    d="M 36 46 L 60 20 L 84 46 L 75 68 L 45 68 Z"
                    fill="rgba(11,15,26,1)"
                    stroke="#7B5CFF"
                    strokeWidth="1.5"
                />

                {/* Eyes - Electric Cyan core */}
                <circle cx="48" cy="46" r="8" fill="rgba(0,0,0,0.8)" stroke="#electric-cyan" strokeWidth="1" strokeOpacity="0.2" />
                <circle cx="72" cy="46" r="8" fill="rgba(0,0,0,0.8)" stroke="#electric-cyan" strokeWidth="1" strokeOpacity="0.2" />

                <motion.circle
                    cx="48" cy="46" r="4.5"
                    fill="#00E0FF"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.circle
                    cx="72" cy="46" r="4.5"
                    fill="#00E0FF"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                />

                {/* Central AI Core - Pulse */}
                <circle cx="60" cy="82" r="5" fill="#7B5CFF" />
                <motion.circle
                    cx="60" cy="82"
                    r="8"
                    fill="none"
                    stroke="#7B5CFF"
                    strokeWidth="0.5"
                    animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.circle
                    cx="60" cy="82"
                    r="5"
                    fill="#00E0FF"
                    style={{ mixBlendMode: 'screen' }}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Tail details - Cyan bits */}
                <path d="M 50 105 L 55 90 L 60 108 Z" fill="rgba(0,224,255,0.15)" stroke="#00E0FF" strokeWidth="0.5" />
                <path d="M 70 105 L 65 90 L 60 108 Z" fill="rgba(0,224,255,0.15)" stroke="#00E0FF" strokeWidth="0.5" />
            </svg>

            {/* Hover tooltip - Brand styled */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2 bg-[#0B0F1A]/95 border border-tech-purple/20 text-electric-cyan text-[10px] font-bold tracking-[0.3em] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-md shadow-lg shadow-tech-purple/10 pointer-events-none uppercase">
                AI.Companion // Online
            </div>
        </motion.div>
    );
};

export default AICompanion;
