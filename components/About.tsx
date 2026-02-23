import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
        About
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
        Building Digital Products That Perform
      </h2>

      <p className="text-lg leading-relaxed text-neutral-700 mb-6">
        I’m a frontend-focused software developer who builds modern web
        applications that are fast, scalable, and engineered for real-world
        impact. I specialize in transforming ideas into production-ready digital
        products that combine clean architecture, refined design, and
        performance-first development.
      </p>

      <p className="text-lg leading-relaxed text-neutral-700 mb-10">
        My work goes beyond writing code. I focus on solving business problems
        through thoughtful user experience, optimized performance, and long-term
        maintainability. Every solution I build is structured with clarity,
        scalability, and growth in mind.
      </p>

      <div className="grid md:grid-cols-2 gap-6 text-neutral-700 leading-relaxed mb-12">
        <p>• Clean, maintainable architecture</p>
        <p>• Responsive across all devices</p>
        <p>• Performance and SEO optimized</p>
        <p>• Accessible and user-focused</p>
        <p>• Built with modern, industry-standard technologies</p>
        <p>• Designed for long-term scalability</p>
      </div>

      <p className="text-lg leading-relaxed text-neutral-700">
        Whether working with startups, agencies, or established organizations, I
        bring structure, accountability, and a results-driven mindset to every
        engagement. If you’re looking for a developer who understands both
        technical depth and business impact, I’m ready to help you build
        something exceptional.
      </p>
    </section>
  );
};

export default About;
