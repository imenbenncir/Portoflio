import type { Variants } from 'framer-motion';

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
};

export const textVariant = (delay: number = 0): Variants => ({
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 1.25, delay },
    },
});
