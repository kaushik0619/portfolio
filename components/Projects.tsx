'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Shield, BarChart, Music2Icon, DollarSign } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    
    {
      title: 'Inventory Management System',
      description: 'A comprehensive inventory management solution with authentication, real-time updates, and intuitive dashboard for business operations.',
      icon: Shield,
      image: '/inventory.webp',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Express.js', 'JWT'],
      features: [
        'Product inventory tracking',
        'User role management',
        'Real-time stock updates',
        'Comprehensive reporting',
      ],
      github: 'https://github.com/kaushik0619/inventory_tracker',
      live: 'https://inventory-tracker-tau-liard.vercel.app/',
      color: 'purple',
    },
    {
      title: 'Portfolio Website',
      description: 'This futuristic portfolio showcasing modern web development with 3D animations, glassmorphism design, and smooth interactions.',
      icon: Zap,
      image: '/portfolio.webp',
      technologies: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      features: [
        '3D animations and interactions',
        'Responsive glassmorphism design',
        'Smooth scroll animations',
        'Modern UI/UX patterns',
      ],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'cyan',
    },
    {
      title: 'Defi bank',
      description: 'A full-stack expense splitting application that simplifies group expense management with real-time calculations and user-friendly interface.',
      icon: DollarSign,
      image: '/defi.webp',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      features: [
        'Real-time expense tracking',
        'liquidation risk calculation',
        'savings calculator',
        'loan borrowing system',
      ],
      github: 'https://github.com/kaushik0619/defi-application',
      live: 'https://defi-application-seven.vercel.app/',
      color: 'blue',
    },
    {
      title: 'Bias detecting chatbot',
      description: 'A chatbot that detects and mitigates bias in user interactions, promoting fair and unbiased communication.',
      icon: Shield,
      image: '/aibot.webp',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      features: [
        'Real-time bias detection',
        'Checks the bias percentage',
        'Interactive chat interface',
        'User-friendly design',
        'Bias mitigation strategies',
      ],
      github: 'https://github.com/kaushik0619/bias-free-chat',
      live: 'https://bias-free-chat.vercel.app/',
      color: 'blue',
    },
    {
      title: 'Splittor',
      description: 'A full-stack expense splitting application that simplifies group expense management with real-time calculations and user-friendly interface.',
      icon: BarChart,
      image: '/split.webp',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      features: [
        'Real-time expense tracking',
        'Group management system',
        'Automated expense splitting',
        'Secure user authentication',
      ],
      github: 'https://github.com/kaushik0619/splittor',
      live: 'https://example.com',
      color: 'blue',
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          text: 'text-blue-400',
          glow: 'hover:glow-blue',
          gradient: 'from-blue-500/20 to-blue-600/20',
        };
      case 'purple':
        return {
          text: 'text-purple-400',
          glow: 'hover:glow-purple',
          gradient: 'from-purple-500/20 to-purple-600/20',
        };
      case 'cyan':
        return {
          text: 'text-cyan-400',
          glow: 'hover:glow-cyan',
          gradient: 'from-cyan-500/20 to-cyan-600/20',
        };
      default:
        return {
          text: 'text-blue-400',
          glow: 'hover:glow-blue',
          gradient: 'from-blue-500/20 to-blue-600/20',
        };
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={projectVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and technical expertise
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const colors = getColorClasses(project.color);
              
              return (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  className={`group ${colors.glow} transition-all duration-500`}
                >
                  <Card className="glass border-white/20 overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Project Image */}
                      <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="aspect-video relative overflow-hidden rounded-lg"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-60`} />
                          
                          {/* Hover Overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Button
                                size="sm"
                                variant="secondary"
                                className="glass border-white/20"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                            </a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <Button
                                size="sm"
                                className={`glass ${colors.text} border-white/20`}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </Button>
                            </a>
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Project Info */}
                      <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                        <CardHeader className="p-0 pb-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`p-3 rounded-lg bg-white/10 ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-2xl group-hover:gradient-text transition-all duration-300">
                              {project.title}
                            </CardTitle>
                          </div>
                          <p className="text-gray-400 leading-relaxed">
                            {project.description}
                          </p>
                        </CardHeader>

                        <CardContent className="p-0 space-y-6">
                          {/* Technologies */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className={`glass border-white/20 ${colors.text} hover:scale-105 transition-transform duration-200`}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Features */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, featureIndex) => (
                                <motion.li
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                                  className="flex items-center space-x-3 text-gray-400"
                                >
                                  <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                                  <span className="text-sm">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-4 pt-4">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Button
                                variant="outline"
                                className="glass border-white/20 hover:border-white/40"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                View Code
                              </Button>
                            </a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <Button className={`glass ${colors.text} border-white/20`}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </div>
                    </div>
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