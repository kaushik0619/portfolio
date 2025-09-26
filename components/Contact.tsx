'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kaushik@example.com',
      href: 'mailto:kaushikthakur390@gmail.com',
      color: 'blue',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/kaushikthakur',
      href: 'https://github.com/kaushik0619',
      color: 'purple',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/kaushikthakur',
      href: 'https://www.linkedin.com/in/kaushik-thakur-168524358/',
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

  const itemVariants = {
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
          glow: 'hover:glow-blue',
          bg: 'bg-blue-500/20',
        };
      case 'purple':
        return {
          text: 'text-purple-400',
          glow: 'hover:glow-purple',
          bg: 'bg-purple-500/20',
        };
      case 'cyan':
        return {
          text: 'text-cyan-400',
          glow: 'hover:glow-cyan',
          bg: 'bg-cyan-500/20',
        };
      default:
        return {
          text: 'text-blue-400',
          glow: 'hover:glow-blue',
          bg: 'bg-blue-500/20',
        };
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants as any} className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate and create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants as any}>
              <Card className="glass border-white/20 hover:glow-blue transition-all duration-500 group">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:gradient-text transition-all duration-300">
                    Send Message
                  </CardTitle>
                  <p className="text-gray-400">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="glass border-white/20 focus:border-blue-400 focus:glow-blue transition-all duration-300"
                          required
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        className="space-y-2"
                      >
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="glass border-white/20 focus:border-blue-400 focus:glow-blue transition-all duration-300"
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Discussion"
                        className="glass border-white/20 focus:border-blue-400 focus:glow-blue transition-all duration-300"
                        required
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or idea..."
                        className="glass border-white/20 focus:border-blue-400 focus:glow-blue transition-all duration-300 min-h-[120px]"
                        required
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full glass bg-blue-500/20 hover:bg-blue-500/30 text-white border-blue-500/50 hover:border-blue-400 glow-blue transition-all duration-300 group"
                      >
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants as any} className="space-y-8">
              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const colors = getColorClasses(method.color);

                  return (
                    <motion.a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : '_self'}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center space-x-4 p-6 glass border-white/20 rounded-xl transition-all duration-300 ${colors.glow} group`}
                    >
                      <div className={`p-3 rounded-lg ${colors.bg} ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:gradient-text transition-all duration-300">
                          {method.title}
                        </h3>
                        <p className={`${colors.text} text-sm`}>
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Additional Info */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-xl border-white/20 hover:glow-purple transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  Let's Create Something Amazing
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  I'm always open to discussing new opportunities, innovative projects, 
                  and collaborations. Whether you have a specific project in mind or just 
                  want to connect, I'd love to hear from you.
                </p>
                <div className="flex items-center space-x-2 text-purple-400">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Available for remote work worldwide</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}