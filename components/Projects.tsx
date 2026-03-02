import React from "react";
import ProjectCard from "./ui/ProjectCard";
import { getAllProjects } from "@/lib/content";

interface ProjectsProps {
  content: string;
  description: string;
  image: string;
  repo?: string;
  slug: string;
  tags: string[];
  title: string;
  website?: string;
}

const Projects = () => {
  const projects = getAllProjects() as ProjectsProps[];
  console.log(projects);
  return (
    <section
      id="projects"
      className="scroll-mt-24 p-5 lg:px-14 max-w-7xl mx-auto">
      <h2 className="text-sm font-medium text-(--muted)">Selected projects</h2>
      <ul className="mt-6 space-y-6">
        {projects.slice(0, 6).map(p => (
          <ProjectCard
            key={p.slug}
            slug={p.slug}
            title={p.title || p.slug}
            description={p.description || p.content}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
