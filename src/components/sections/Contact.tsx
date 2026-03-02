import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import MagneticButton from '../ui/MagneticButton';
import SocialIcons from '../ui/SocialIcons';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="relative w-full py-32 px-6 border-t border-white/5 bg-primary-navy/30">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="container mx-auto max-w-4xl text-center"
            >
                <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
                    <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">Get in Touch</span>
                </div>

                <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">
                    Let's Architect <br className="md:hidden" /><span className="text-gradient">The Future.</span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-lg text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Whether you are building a new intelligent platform or scaling existing AI infrastructure, I am open to discussing engineering challenges and collaborations.
                </motion.p>

                <motion.div variants={fadeInUp} className="mb-16 flex justify-center">
                    <a href="mailto:imenbenncir.pro@gmail.com">
                        <MagneticButton className="!px-10 !py-4 text-base font-semibold tracking-wide border border-white/10 hover:border-electric-blue/50 transition-colors bg-white/5">
                            Start a Conversation
                        </MagneticButton>
                    </a>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex justify-center flex-col items-center border-t border-white/5 pt-12">
                    <p className="text-white/40 text-sm mb-4">Connect on Professional Networks</p>
                    <SocialIcons />
                </motion.div>
            </motion.div>

            {/* Footer minimal info */}
            <div className="absolute bottom-6 w-full left-0 text-center">
                <p className="text-white/30 text-[10px] font-medium tracking-[0.2em] uppercase">
                    &copy; 2026 Imen Ben Ncir. Senior AI Engineer.
                </p>
            </div>
        </section>
    );
}

export default Contact;
