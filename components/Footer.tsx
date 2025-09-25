'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 bg-gradient-to-t from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={scrollToTop}
              size="lg"
              className="glass bg-blue-500/20 hover:bg-blue-500/30 text-white border-blue-500/50 hover:border-blue-400 glow-blue transition-all duration-300 group rounded-full p-4"
            >
              <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-2"
          >
            <h3 className="text-3xl font-bold gradient-text">
              Kaushik Thakur
            </h3>
            <p className="text-gray-400">
              Aspiring Software Engineer & Frontend Developer
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center space-y-2"
          >
            <div className="text-gray-400 text-sm flex items-center justify-center space-x-2">
              <span>© {currentYear} Kaushik Thakur. Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block"
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.span>
              <span>using Next.js & Tailwind CSS</span>
            </div>
            <p className="text-xs text-gray-500">
              Designed with futuristic aesthetics and modern web technologies
            </p>
          </motion.div>

          {/* Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-purple-900/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </footer>
  );
}