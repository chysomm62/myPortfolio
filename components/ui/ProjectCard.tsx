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
      className="absolute inset-0 rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl"
      style={{
        zIndex: projects.length - index,
      }}
      initial={{ y: index * 40 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}>
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-40"
        />
      )}

      <div className="absolute inset-0 p-12 flex flex-col justify-end bg-linear-to-t from-black/80 to-transparent">
        <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>

        <p className="opacity-70 mb-6 max-w-lg">{project.description}</p>

        <div className="flex gap-6">
          {project.website && (
            <Link href={project.website} target="_blank" className="underline">
              Live
            </Link>
          )}

          {project.repo && (
            <Link href={project.repo} target="_blank" className="underline">
              Code
            </Link>
          )}

          <Link href={`/projects/${project.slug}`} className="underline">
            Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
