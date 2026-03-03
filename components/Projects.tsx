import ProjectCard from "./ui/ProjectCard";
import { getAllProjects } from "@/lib/content";

import { ProjectsProps } from "@/types/projects";

const Projects = () => {
  const projects = getAllProjects() as ProjectsProps[];

  return (
    <section id="projects" className="relative h-[500vh] bg-black text-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-[90%] max-w-5xl h-150">
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
