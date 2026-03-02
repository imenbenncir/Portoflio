import React, { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorGlow: React.FC = () => {
    const mouseX = useRef(-200);
    const mouseY = useRef(-200);

    // Primary large glow — slow, dreamy
    const primaryX = useSpring(-200, { damping: 35, stiffness: 150 });
    const primaryY = useSpring(-200, { damping: 35, stiffness: 150 });

    // Secondary smaller glow — faster, sharper trail
    const secondaryX = useSpring(-200, { damping: 18, stiffness: 280 });
    const secondaryY = useSpring(-200, { damping: 18, stiffness: 280 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;
            primaryX.set(e.clientX - 200);
            primaryY.set(e.clientY - 200);
            secondaryX.set(e.clientX - 50);
            secondaryY.set(e.clientY - 50);
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, [primaryX, primaryY, secondaryX, secondaryY]);

    return (
        <>
            {/* Primary diffuse glow — large, slow, electric blue */}
            <motion.div
                className="fixed top-0 left-0 w-[400px] h-[400px] bg-electric-blue/[0.07] rounded-full blur-[90px] pointer-events-none z-50 mix-blend-screen"
                style={{ x: primaryX, y: primaryY }}
            />
            {/* Secondary sharp glow — smaller, faster, violet accent */}
            <motion.div
                className="fixed top-0 left-0 w-[100px] h-[100px] bg-muted-violet/[0.12] rounded-full blur-[30px] pointer-events-none z-50 mix-blend-screen"
                style={{ x: secondaryX, y: secondaryY }}
            />
        </>
    );
};

export default CursorGlow;
