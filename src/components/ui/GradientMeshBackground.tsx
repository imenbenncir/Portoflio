import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const GradientMeshBackground: React.FC = () => {
    const [particles] = useState(() => Array.from({ length: 25 }, (_, i) => ({
        id: i,
        initialX: `${Math.random() * 100}%`,
        initialY: `${Math.random() * 100}%`,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 10,
        size: 2 + Math.random() * 4,
    })));

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-primary-dark pointer-events-none">
            {/* Animated low opacity grid */}
            {React.createElement(motion.div, {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: `
            linear-gradient(to right, #7B5CFF 1px, transparent 1px),
            linear-gradient(to bottom, #7B5CFF 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                },
                animate: {
                    opacity: [0.02, 0.04, 0.02]
                },
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            } as any)}

            {/* Radial Gradient Backgrounds */}
            <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] rounded-full bg-tech-purple/5 blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[50%] h-[50%] rounded-full bg-electric-cyan/5 blur-[120px] mix-blend-screen" />

            {/* Spotlight following mouse */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full opacity-[0.12] pointer-events-none blur-[100px]"
                style={{
                    background: 'radial-gradient(circle, #7B5CFF 0%, transparent 70%)',
                    left: springX,
                    top: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Soft floating AI particles */}
            <div className="absolute inset-0 opacity-40">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full bg-electric-cyan/30 blur-[2px]"
                        style={{
                            left: p.initialX,
                            top: p.initialY,
                            width: p.size,
                            height: p.size,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, 40, 0],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.012] mix-blend-overlay"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
                }}
            />
        </div>
    );
};

export default GradientMeshBackground;
