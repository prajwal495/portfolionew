import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const tagline = "Prajwal Chaple";
  const letters = Array.from(tagline);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Shapes */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/10 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Main Content */}
      <div className="z-10 text-center px-4 max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="text-neon tracking-[0.2em] text-sm md:text-base mb-6 font-mono uppercase"
        >
          Frontend Developer
        </motion.p>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-9xl font-display font-bold leading-tight mb-8 text-white mix-blend-overlay"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span variants={child} key={index} className="inline-block">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center mt-12"
        >
          <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent mb-4" />
          <p className="text-gray-400 font-light max-w-xl mx-auto text-base md:text-lg">
            Frontend developer with basic backend knowledge, skilled in using AI tools for modern web development.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-neon" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;