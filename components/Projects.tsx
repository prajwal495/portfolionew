import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "HireFilter",
    category: "AI Recruitment Platform",
    image: "https://picsum.photos/800/600?random=10",
    year: "2024"
  },
  {
    title: "Animated Portfolio",
    category: "Creative Website",
    image: "https://picsum.photos/800/600?random=20",
    year: "2024"
  },
  {
    title: "College Utility App",
    category: "Productivity Web App",
    image: "https://picsum.photos/800/600?random=30",
    year: "2023"
  }
];

const Projects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll to horizontal movement
  // Using percentages to ensure it works on all screen widths
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-dark-accent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Title Overlay */}
        <div className="absolute top-10 left-10 md:top-20 md:left-20 z-10 pointer-events-none">
          <h2 className="text-6xl md:text-9xl font-display font-bold text-white/5 opacity-50 mix-blend-overlay">
            WORKS
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 md:gap-24 px-12 md:px-24">
          {/* Intro Card */}
          <div className="flex-shrink-0 w-[80vw] md:w-[30vw] flex flex-col justify-center">
             <h3 className="text-4xl font-display font-bold mb-6">Selected <br/> Projects</h3>
             <p className="text-gray-400">
               A curation of my work exploring AI, interactive design, and student utilities. Scroll to explore.
             </p>
          </div>

          {/* Project Cards */}
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => {
  return (
    <motion.div 
      className="group relative h-[60vh] w-[85vw] md:w-[45vw] flex-shrink-0 overflow-hidden rounded-3xl bg-gray-900 border border-white/10"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
        <div className="flex justify-between items-end border-b border-white/20 pb-6 mb-6">
          <div>
            <span className="text-neon text-sm font-mono mb-2 block">{project.category}</span>
            <h3 className="text-3xl md:text-5xl font-display font-bold">{project.title}</h3>
          </div>
          <span className="text-xl font-mono text-gray-500">{project.year}</span>
        </div>
        
        <div className="flex justify-between items-center opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="uppercase tracking-widest text-xs font-bold">View Project</span>
          <div className="bg-neon text-black p-3 rounded-full">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;