import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const items = [
    {
      icon: <Code2 className="w-6 h-6 text-neon" />,
      title: "Frontend Development",
      desc: "Specializing in React.js and Tailwind CSS to build responsive, modern interfaces."
    },
    {
      icon: <Palette className="w-6 h-6 text-neon-purple" />,
      title: "Design Tools",
      desc: "Creating intuitive user experiences using Figma and translation into pixel-perfect code."
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: "AI Integration",
      desc: "Leveraging ChatGPT and Gemini API to enhance development speed and UX capabilities."
    },
    {
      icon: <Globe className="w-6 h-6 text-pink-400" />,
      title: "Backend Basics",
      desc: "Understanding of Node.js, Express, and Firebase for full-stack integration."
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Beyond the <span className="text-neon">Code</span>.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a 2nd year Information Technology engineering student at YCCE, Nagpur. My passion lies in crafting efficient digital solutions that solve real-world problems.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            I focus mainly on frontend development, have basic backend knowledge, and use AI tools effectively to improve UI/UX and development speed.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300"
            >
              <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;