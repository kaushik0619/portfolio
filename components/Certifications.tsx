'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Brain, Briefcase, Zap } from 'lucide-react';

export default function Certifications() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: 'Full Stack Development',
      issuer: 'Certification Authority',
      date: '2024',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      description: 'Comprehensive full-stack development certification covering modern web technologies and best practices.',
      icon: Zap,
      color: 'blue',
    },
    {
      title: 'AI & Large Language Models',
      issuer: 'Tech Institute',
      date: '2024',
      skills: ['AI/ML', 'LLM', 'Python', 'Deep Learning'],
      description: 'Advanced certification in artificial intelligence and large language models with practical applications.',
      icon: Brain,
      color: 'purple',
    },
    {
      title: 'AI for Business & ChatGPT',
      issuer: 'Business Academy',
      date: '2023',
      skills: ['ChatGPT', 'Business AI', 'Automation', 'Strategy'],
      description: 'Business-focused AI certification emphasizing practical applications and strategic implementation.',
      icon: Briefcase,
      color: 'cyan',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const certVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          text: 'text-blue-400',
          bg: 'bg-blue-500/20',
          border: 'border-blue-500/50',
          glow: 'hover:glow-blue',
        };
      case 'purple':
        return {
          text: 'text-purple-400',
          bg: 'bg-purple-500/20',
          border: 'border-purple-500/50',
          glow: 'hover:glow-purple',
        };
      case 'cyan':
        return {
          text: 'text-cyan-400',
          bg: 'bg-cyan-500/20',
          border: 'border-cyan-500/50',
          glow: 'hover:glow-cyan',
        };
      default:
        return {
          text: 'text-blue-400',
          bg: 'bg-blue-500/20',
          border: 'border-blue-500/50',
          glow: 'hover:glow-blue',
        };
    }
  };

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={certVariants as any} className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              const colors = getColorClasses(cert.color);

              return (
                <motion.div key={index} variants={certVariants as any}>
                  <Card className={`glass border-white/20 h-full transition-all duration-500 group ${colors.glow}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`p-3 rounded-lg ${colors.bg} ${colors.text} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="h-8 w-8" />
                        </motion.div>
                        <Badge
                          variant="secondary"
                          className={`glass ${colors.border} ${colors.text} border`}
                        >
                          {cert.date}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                        {cert.title}
                      </CardTitle>
                      
                      <p className={`text-sm font-medium ${colors.text}`}>
                        {cert.issuer}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {cert.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                          Key Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge
                                variant="outline"
                                className={`glass border-white/20 text-xs ${colors.text} hover:${colors.bg} transition-all duration-200`}
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Achievement Badge */}
          <motion.div
            variants={certVariants as any}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-3 glass p-6 rounded-2xl border-white/20 hover:glow-blue transition-all duration-500 group"
            >
              <Award className="h-8 w-8 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
              <div className="text-left">
                <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all duration-300">
                  Continuous Learner
                </h3>
                <p className="text-sm text-gray-400">
                  Always expanding knowledge and staying updated with latest technologies
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}