import React from "react";
import ProjectCard from "./ui/ProjectCard";
import { getAllProjects } from "@/lib/content";

const Projects = () => {
  const projects = getAllProjects() as any[];
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-sm font-medium text-(--muted)">Selected projects</h2>
      <ul className="mt-6 space-y-6">
        {projects.slice(0, 6).map(p => (
          <ProjectCard
            key={p.slug}
            slug={p.slug}
            title={p.title || p.slug}
            description={p.description || p.excerpt}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
