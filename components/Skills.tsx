import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "HTML5 / CSS3 / Tailwind", level: 95 },
  { name: "React.js / JavaScript (ES6+)", level: 90 },
  { name: "AI Tools (Gemini / ChatGPT)", level: 95 },
  { name: "C / Python", level: 80 },
  { name: "Node.js / Express / Firebase", level: 70 }
];

const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-display font-bold mb-6">Technical <br /> Proficiency</h2>
          <p className="text-gray-400">
            A toolbelt focused on modern web development, AI integration, and core programming concepts.
          </p>
        </div>

        <div className="md:w-2/3 space-y-8">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="font-bold">{skill.name}</span>
                <span className="text-neon font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "circOut", delay: 0.1 }}
                  className="h-full bg-neon rounded-full"
                  style={{ boxShadow: '0 0 10px #00f0ff' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;