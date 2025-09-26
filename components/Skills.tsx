'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  Settings, 
  Cpu,
  Palette,
  Layers
} from 'lucide-react';

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'text-blue-400',
      glow: 'hover:glow-blue',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML & CSS', level: 92 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Shadcn/ui', level: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'text-purple-400',
      glow: 'hover:glow-purple',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 82 },
        { name: 'REST APIs', level: 85 },
        { name: 'JWT', level: 78 },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'text-cyan-400',
      glow: 'hover:glow-cyan',
      skills: [
        { name: 'MongoDB', level: 82 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Settings,
      color: 'text-green-400',
      glow: 'hover:shadow-green-500/20',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Convex', level: 70 },
        { name: 'Zod', level: 80 },
        { name: 'React Hook Form', level: 85 },
      ],
    },
    {
      title: 'Programming',
      icon: Code,
      color: 'text-orange-400',
      glow: 'hover:shadow-orange-500/20',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={cardVariants as any} className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div key={categoryIndex} variants={cardVariants as any}>
                  <Card className={`glass border-white/20 h-full transition-all duration-500 group ${category.glow}`}>
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center space-x-3 text-xl">
                        <div className={`p-2 rounded-lg bg-white/10 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="group-hover:gradient-text transition-all duration-300">
                          {category.title}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-300">
                              {skill.name}
                            </span>
                            <span className={`text-xs font-semibold ${category.color}`}>
                              {skill.level}%
                            </span>
                          </div>
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                              ease: [0.25, 0.25, 0, 1]
                            }}
                            className="origin-left"
                          >
                            <Progress 
                              value={skill.level} 
                              className="h-2 bg-white/10"
                            />
                          </motion.div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}