import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const history = [
  {
    role: "IT Engineering Student",
    company: "YCCE, Nagpur",
    period: "2022 - Present",
    desc: "Currently in 2nd year. Learning core computer science concepts and applying them in modern web technologies."
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    period: "2023 - Present",
    desc: "Building responsive web applications using React, Tailwind CSS, and exploring backend integration with Firebase."
  },
  {
    role: "AI Enthusiast",
    company: "Self-Learning",
    period: "2023 - Present",
    desc: "Exploring Large Language Models (LLMs) like ChatGPT and Gemini to enhance developer productivity and build smart apps."
  }
];

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={ref} className="py-32 px-6 max-w-4xl mx-auto relative">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-display font-bold mb-20 text-center"
      >
        The Journey
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />
        
        {/* Animated Progress Line */}
        <motion.div 
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-neon md:-translate-x-1/2 origin-top" 
        />

        <div className="space-y-24">
          {history.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ item: typeof history[0], index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Dot */}
      <div className="absolute left-[20px] md:left-1/2 w-3 h-3 bg-dark border-2 border-neon rounded-full translate-y-2 md:translate-y-8 -translate-x-1.5 md:-translate-x-1.5 z-10" />

      <div className={`flex-1 pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
        <span className="text-neon font-mono text-sm mb-2 block">{item.period}</span>
        <h3 className="text-2xl font-bold font-display">{item.role}</h3>
        <h4 className="text-gray-400 font-medium mb-4">{item.company}</h4>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
      </div>
      
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

export default Experience;