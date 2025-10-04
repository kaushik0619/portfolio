'use client';

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Background3D from './Background3D';

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Background3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
            >
              <span className="gradient-text">Kaushik</span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
            >
              <span className="text-white">Thakur</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Aspiring Software Engineer
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Frontend & Full Stack Developer passionate about creating innovative digital experiences
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="glass bg-blue-500/20 hover:bg-blue-500/30 text-white border-blue-500/50 hover:border-blue-400 glow-blue transition-all duration-300 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            <a href="https://drive.google.com/file/d/1qcpKwl2OpoO4fHRpSEEldwXj1pyvmJh_/view?usp=sharing" download className="absolute inset-0" aria-hidden="true"></a>
            </Button>

            <div className="flex items-center space-x-4">
              <motion.a
                href="https://github.com/kaushik0619"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:glow-purple transition-all duration-300"
              >
                <Github className="h-6 w-6 text-purple-400" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/kaushik-thakur-168524358/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:glow-cyan transition-all duration-300"
              >
                <Linkedin className="h-6 w-6 text-cyan-400" />
              </motion.a>

              <motion.a
                href="mailto:kaushikthakur390@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:glow-blue transition-all duration-300"
              >
                <Mail className="h-6 w-6 text-blue-400" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 glass rounded-full hover:glow-blue transition-all duration-300"
          >
            <ChevronDown className="h-6 w-6 text-blue-400" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}