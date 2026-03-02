"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-widest mb-3 text-gradient text-gradient-animated">
        About Me
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-accent">
        Building Digital Products That Perform
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg leading-relaxed text-(--muted) mb-6">
        I’m a frontend-focused software developer who builds modern web
        applications that are fast, scalable, and engineered for real-world
        impact. I specialize in transforming ideas into production-ready digital
        products that combine clean architecture, refined design, and
        performance-first development.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-lg leading-relaxed text-(--muted) mb-10">
        My work goes beyond writing code. I focus on solving business problems
        through thoughtful user experience, optimized performance, and long-term
        maintainability. Every solution I build is structured with clarity,
        scalability, and growth in mind.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-6 text-(--muted) leading-relaxed mb-12">
        <p>• Clean, maintainable architecture</p>
        <p>• Responsive across all devices</p>
        <p>• Performance and SEO optimized</p>
        <p>• Accessible and user-focused</p>
        <p>• Built with modern, industry-standard technologies</p>
        <p>• Designed for long-term scalability</p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-lg leading-relaxed text-(--muted)">
        Whether working with startups, agencies, or established organizations, I
        bring structure, accountability, and a results-driven mindset to every
        engagement. If you’re looking for a developer who understands both
        technical depth and business impact, I’m ready to help you build
        something exceptional.
      </motion.p>
    </section>
  );
};

export default About;
