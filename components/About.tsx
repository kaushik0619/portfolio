'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Code, Heart, Users } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Container animation for staggering children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Card animation with 3D rotate effect
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 } as any, // cast to any to satisfy TS
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    } as any,
  };

  const highlights = [
    {
      icon: Code,
      title: 'Frontend Passion',
      description:
        'Deeply passionate about creating beautiful, intuitive user interfaces with modern technologies',
      color: 'text-blue-400',
      glow: 'hover:glow-blue',
    },
    {
      icon: Sparkles,
      title: 'Innovation Driven',
      description: 'Always eager to learn new technologies and implement cutting-edge solutions',
      color: 'text-purple-400',
      glow: 'hover:glow-purple',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Strong believer in collaborative development and knowledge sharing',
      color: 'text-cyan-400',
      glow: 'hover:glow-cyan',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Focused on creating exceptional user experiences that make a difference',
      color: 'text-pink-400',
      glow: 'hover:shadow-pink-500/20',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about technology and driven by innovation
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Card */}
            <motion.div variants={cardVariants}>
              <Card className="glass border-white/20 p-8 hover:glow-blue transition-all duration-500 group">
                <CardContent className="space-y-6 p-0">
                  <motion.div whileHover={{ scale: 1.02 }} className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                      Hello, I'm Kaushik
                    </h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        I'm an aspiring software engineer with a deep passion for frontend development
                        and full-stack technologies. Currently pursuing my B.Tech, I'm dedicated to
                        creating innovative digital solutions that make a meaningful impact.
                      </p>
                      <p>
                        My journey in software development has been driven by curiosity and a constant
                        desire to learn. I believe in the power of clean code, beautiful design, and
                        seamless user experiences.
                      </p>
                      <p>
                        When I'm not coding, you'll find me exploring new technologies, contributing
                        to open-source projects, or collaborating with fellow developers to build
                        something amazing.
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={cardVariants} className="space-y-6">
              <div className="grid gap-6">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className={`glass p-6 rounded-xl border-white/20 transition-all duration-300 ${highlight.glow} group cursor-pointer`}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 rounded-lg bg-white/10 ${highlight.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
