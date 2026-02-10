import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    { Icon: Github, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "https://www.instagram.com/prajwal__14_" }
  ];

  return (
    <section className="py-40 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-neon-purple/20 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="z-10"
      >
        <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight">
          Let's create <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">something unreal.</span>
        </h2>
        
        <p className="text-gray-400 mb-12 text-lg max-w-xl mx-auto">
          Currently open for new opportunities and collaborations. Have a project in mind? Let's talk.
        </p>

        <MagneticButton>
          <a href="mailto:contact@prajwalchaple.com" className="inline-flex items-center gap-3 bg-neon text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-colors duration-300">
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </MagneticButton>
      </motion.div>

      <div className="mt-24 flex gap-8 z-10">
        {socialLinks.map(({ Icon, href }, i) => (
          <motion.a 
            key={i}
            href={href}
            target={href !== "#" ? "_blank" : undefined}
            rel={href !== "#" ? "noopener noreferrer" : undefined}
            whileHover={{ y: -5, color: '#00f0ff' }}
            className="text-gray-400 transition-colors"
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>

      <footer className="mt-24 text-gray-600 text-sm font-mono z-10">
        © 2024 Prajwal Chaple. Built with React & Motion.
      </footer>
    </section>
  );
};

const MagneticButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default Contact;