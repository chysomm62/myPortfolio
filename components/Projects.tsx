import ProjectCard from "./ui/ProjectCard";
import { getAllProjects } from "@/lib/content";

import { ProjectsProps } from "@/types/projects";

const Projects = () => {
  const projects = getAllProjects() as ProjectsProps[];

  return (
    <section
      id="projects"
      className="relative container mx-auto px-5 lg:px-14 max-w-6xl ">
      <p className="text-sm uppercase tracking-widest mb-3 text-gradient text-gradient-animated">
        Projects
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-accent">
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
