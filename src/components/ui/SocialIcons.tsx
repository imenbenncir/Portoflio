import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const socialLinks = [
    {
        name: 'LinkedIn',
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/imen-ben-ncir-2b4120293/',
        target: '_blank',
        rel: 'noopener noreferrer'
    },
    {
        name: 'GitHub',
        icon: Github,
        href: 'https://github.com/imenbenncir',
        target: '_blank',
        rel: 'noopener noreferrer'
    },
    {
        name: 'Email',
        icon: Mail,
        href: 'mailto:imenbenncir.pro@gmail.com',
    },
    {
        name: 'Phone',
        icon: Phone,
        href: 'tel:+21652933944',
    }
];

const SocialIcons: React.FC = () => {
    return (
        <div className="flex items-center gap-4 mt-8">
            {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        target={link.target}
                        rel={link.rel}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-full border border-white/10 text-white/60 hover:text-electric-blue hover:border-electric-blue/30 transition-all duration-300 bg-white/5 backdrop-blur-sm group"
                        aria-label={link.name}
                    >
                        <Icon strokeWidth={1.5} className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    </motion.a>
                );
            })}
        </div>
    );
};

export default SocialIcons;
