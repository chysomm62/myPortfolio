"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ProjectsProps } from "@/types/projects";

export default function ProjectCard({
  project,
  index,
  projects,
}: {
  project: ProjectsProps;
  index: number;
  projects: ProjectsProps[];
}) {
  return (
    <motion.div
      key={project.slug}
      className="rounded-3xl overflow-hidden bg-background shadow-[5px_5px_10px_rgba(20,250,150,0.25),-5px_-5px_10px_rgba(50,150,250,0.25)]"
      style={{
        zIndex: projects.length - index,
      }}
      initial={{ y: index * 40 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      {project.image && (
        <div className="relative w-full aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100%"
            className="object-cover opacity-40"
          />
        </div>
      )}

      <div className="p-5 flex flex-col justify-end">
        <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>

        <p className="opacity-70 mb-6 max-w-lg">{project.description}</p>

        <div className="flex gap-x-8 gap-y-2 mb-5 flex-wrap">
          {project.tags &&
            project.tags.map(tag => <p className="text-xs ">{tag}</p>)}
        </div>

        <div className="flex gap-6">
          {project.website && (
            <Link href={project.website} target="_blank" className="underline">
              Live Link
            </Link>
          )}

          {project.repo && (
            <Link href={project.repo} target="_blank" className="underline">
              Code
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
