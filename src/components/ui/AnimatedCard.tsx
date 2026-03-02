import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    glowColor?: "tech-purple" | "electric-cyan" | "soft-gold" | "muted-violet";
}

const colorMap = {
    "tech-purple": "from-[#7B5CFF] to-[#00E0FF]",
    "electric-cyan": "from-[#00E0FF] to-[#7B5CFF]",
    "soft-gold": "from-[#F59E0B] to-[#FBBF24]",
    "muted-violet": "from-[#8B5CF6] to-[#7B5CFF]",
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className, glowColor = "tech-purple", ...props }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative rounded-2xl glass-card overflow-hidden group transition-all duration-300",
                "hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
                className
            )}
            whileHover={{ y: -5 }}
            {...props}
        >
            {/* Animated Border Glow */}
            <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 p-[1px] rounded-2xl bg-gradient-to-r",
                colorMap[glowColor]
            )}>
                <div className="w-full h-full rounded-2xl bg-primary-dark opacity-100" />
            </div>

            {/* Inner Content with Tilt */}
            <div className="relative h-full w-full z-10 p-1">
                <div className="h-full w-full rounded-2xl bg-transparent transition-transform duration-500">
                    {children}
                </div>
            </div>

            {/* Subtle light shimmer sweep on hover */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none" />
        </motion.div>
    );
};

export default AnimatedCard;
