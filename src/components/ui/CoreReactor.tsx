import { useState } from 'react';
import { motion } from 'framer-motion';
import { TechIcons } from './TechIcons';
import { cn } from '../../utils/cn';

const techLogos = [
    { name: 'React', icon: TechIcons.React, color: 'text-[#61dafb]' },
    { name: 'JavaScript', icon: TechIcons.JavaScript, color: 'text-[#F7DF1E]' },
    { name: 'Python', icon: TechIcons.Python, color: 'text-[#387EB8]' },
    { name: 'MongoDB', icon: TechIcons.MongoDB, color: 'text-[#47A248]' },
    { name: 'Node.js', icon: TechIcons.Nodejs, color: 'text-[#339933]' },
    { name: 'Express', icon: TechIcons.Express, color: 'text-[#ffffff]' },
    { name: 'Git', icon: TechIcons.Git, color: 'text-[#F1502F]' },
    { name: 'Tailwind', icon: TechIcons.TailwindCSS, color: 'text-[#06B6D4]' },
];

const generateParticles = () => Array.from({ length: 30 }).map(() => ({
    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
    scale: Math.random() * 0.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 5,
    endY: Math.random() * -100 - 50,
}));

type ParticleData = ReturnType<typeof generateParticles>[0];

const Particles = () => {
    const [particles] = useState<ParticleData[]>(() => generateParticles());

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p: ParticleData, i: number) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full bg-opacity-40 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    initial={{ x: p.x, y: p.y, scale: p.scale, opacity: p.opacity }}
                    animate={{
                        y: [null, p.endY],
                        opacity: [null, 0.8, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                />
            ))}
        </div>
    );
};

const OrbitingLogos = () => {
    const radius = 280; // Distance from center
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none" style={{ perspective: '1000px' }}>
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 animate-[spin_40s_linear_infinite]"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateX(70deg) rotateZ(0deg)' }}
            >
                {/* Sub-rings for visual depth */}
                <div className="absolute inset-4 rounded-full border border-neon-blue/20" />
                <div className="absolute inset-12 rounded-full border border-electric-purple/20 border-dashed" />

                {techLogos.map((tech, i) => {
                    const angle = (i * (360 / techLogos.length));
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;

                    return (
                        <div
                            key={tech.name}
                            className="absolute top-1/2 left-1/2 -ml-6 -mt-6 w-12 h-12 pointer-events-auto group"
                            style={{
                                transform: `translate(${x}px, ${y}px)`,
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <div
                                className="w-full h-full flex items-center justify-center rounded-full glassmorphism border-white/10 relative transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-4 animate-[spin_40s_linear_infinite_reverse]"
                                style={{ transform: `rotateX(-70deg)` }}
                            >
                                <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
                                <div className="absolute -inset-1 rounded-full border border-current opacity-0 group-hover:opacity-50 group-hover:animate-ping" />
                                <div className={cn("w-6 h-6 z-10 animate-[spin_10s_linear_infinite]", tech.color)}>
                                    <tech.icon />
                                </div>
                                {/* Tooltip */}
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase text-white whitespace-nowrap border border-white/10 backdrop-blur-md">
                                    {tech.name}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const CoreReactor = () => {
    return (
        <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
            <Particles />

            {/* Background soft light beam */}
            <div className="absolute inset-x-0 w-[1px] h-[150%] bg-gradient-to-t from-transparent via-neon-blue/20 to-transparent mx-auto transform -rotate-45 animate-pulse-slow" />
            <div className="absolute inset-x-0 w-[1px] h-[150%] bg-gradient-to-t from-transparent via-electric-purple/20 to-transparent mx-auto transform rotate-45 animate-[pulse_5s_cubic-bezier(0.4,0,0.6,1)_infinite]" />

            {/* Outer Glow & Energy Pulse */}
            <div className="absolute w-64 h-64 bg-neon-blue rounded-full blur-[100px] opacity-20 animate-pulse-glow" />
            <div className="absolute w-[350px] h-[350px] border-[1px] border-electric-purple/30 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20" />

            <OrbitingLogos />

            {/* Rotating Energy Ring */}
            <div className="absolute w-64 h-64 rounded-full border border-glass-border animate-spin-slow shadow-[inset_0_0_20px_rgba(0,240,255,0.05)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full shadow-[0_0_15px_#00f0ff]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-electric-purple rounded-full shadow-[0_0_15px_#8A2BE2]" />
            </div>

            {/* Circular Rotating Text (Outside the core but inside the orbit) */}
            <div className="absolute w-[300px] h-[300px] animate-[spin_25s_linear_infinite]">
                <svg viewBox="0 0 300 300" className="w-full h-full text-white/60">
                    <defs>
                        <path id="textCircle" d="M 150, 150 m -110, 0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0" />
                    </defs>
                    <text className="text-[12px] uppercase tracking-[4px] font-heading font-light" fill="currentColor">
                        <textPath href="#textCircle" startOffset="0%">
                            AI • Digital Trust • System Architecture • Emotional Intelligence •
                        </textPath>
                    </text>
                </svg>
            </div>

            {/* Central Core Surface (Profile Image Placeholder / Avatar) */}
            <div className="relative z-10 w-44 h-44 rounded-full glass-panel border-[2px] border-white/20 p-2 core-glow group overflow-hidden flex items-center justify-center shadow-[0_0_60px_rgba(0,240,255,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 to-electric-purple/30 animate-pulse-glow" />
                <div className="relative w-full h-full rounded-full overflow-hidden bg-primary-navy border border-white/10 flex items-center justify-center">
                    {/* Visionary Female Architect Placeholder */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center mix-blend-luminosity opacity-80 transition-transform duration-700 group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent opacity-60"></div>
                </div>
            </div>
        </div>
    );
};

export default CoreReactor;
