import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

type MagneticButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className, onClick }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.03 }}
            className={cn(
                "relative group overflow-hidden rounded-full transition-all duration-300",
                className
            )}
            onClick={onClick}
        >
            {/* Inner Light Sweep Animation */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-700 ease-in-out pointer-events-none z-20" />

            {/* Glow Border Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-tech-purple to-electric-cyan blur-[10px] -z-10" />

            <span className="relative z-10 block font-bold">
                {children}
            </span>
        </motion.button>
    );
};

export default MagneticButton;
