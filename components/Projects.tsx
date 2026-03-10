import ProjectCard from "./ui/ProjectCard";
import { getAllProjects } from "@/lib/content";

import { ProjectsProps } from "@/types/projects";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const projects = getAllProjects() as ProjectsProps[];
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative container mx-auto px-5 lg:px-14 max-w-6xl ">
      <p
        // initial={{ opacity: 0, y: 30 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-widest mb-3 text-gradient text-gradient-animated">
        Projects
      </p>

      <h2
        // initial={{ opacity: 0, y: 40 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-accent">
        Building Digital Products That Perform
      </h2>
      <div className="flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full p-5 ">
          {projects.slice(0, 6).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              projects={projects}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
