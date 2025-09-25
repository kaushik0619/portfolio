'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Thakur College of Engineering and Technology',
      period: '2022 - 2026',
      status: 'Current',
      cgpa: '8.4 CGPA',
      description: 'Pursuing Artificial Intelligence and Data Science with focus on software development and modern web technologies.',
      icon: GraduationCap,
      color: 'blue',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Bhavans college',
      period: '2020 - 2022',
      status: 'Completed',
      cgpa: '64%',
      description: 'Completed with Science stream, focusing on Mathematics, Physics, and Computer Science.',
      icon: BookOpen,
      color: 'purple',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'St Xaviers High School',
      period: '2020',
      status: 'Completed',
      cgpa: '93%',
      description: 'Completed secondary education with excellent performance in Mathematics and Science.',
      icon: Award,
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

  const timelineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
          glow: 'glow-blue',
        };
      case 'purple':
        return {
          text: 'text-purple-400',
          bg: 'bg-purple-500/20',
          border: 'border-purple-500/50',
          glow: 'glow-purple',
        };
      case 'cyan':
        return {
          text: 'text-cyan-400',
          bg: 'bg-cyan-500/20',
          border: 'border-cyan-500/50',
          glow: 'glow-cyan',
        };
      default:
        return {
          text: 'text-blue-400',
          bg: 'bg-blue-500/20',
          border: 'border-blue-500/50',
          glow: 'glow-blue',
        };
    }
  };

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={timelineVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Education Timeline</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My academic journey and educational milestones
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 0.25, 0, 1] }}
              className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 origin-top"
            />

            <div className="space-y-12">
              {education.map((edu, index) => {
                const Icon = edu.icon;
                const colors = getColorClasses(edu.color);

                return (
                  <motion.div
                    key={index}
                    variants={timelineVariants}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Timeline Node */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`relative z-10 p-4 rounded-full glass border-2 ${colors.border} ${colors.bg} ${colors.glow} group cursor-pointer`}
                    >
                      <Icon className={`h-6 w-6 ${colors.text} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex-1"
                    >
                      <Card className={`glass border-white/20 transition-all duration-500 hover:${colors.glow} group`}>
                        <CardContent className="p-6 space-y-4">
                          {/* Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div className="space-y-1">
                              <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                                {edu.degree}
                              </h3>
                              <p className="text-gray-400 font-medium">
                                {edu.institution}
                              </p>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
                                {edu.status}
                              </span>
                              <span className={`text-lg font-bold ${colors.text}`}>
                                {edu.cgpa}
                              </span>
                            </div>
                          </div>

                          {/* Period */}
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                            <span className="text-sm text-gray-400 font-medium">
                              {edu.period}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 leading-relaxed">
                            {edu.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}