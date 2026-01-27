import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "content/projects");
const experienceDir = path.join(process.cwd(), "content/experience");

export function getAllProjects() {
  const files = fs.readdirSync(projectsDir);
  return files.map(filename => {
    const filePath = path.join(projectsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return { slug: filename.replace(".mdx", ""), ...data, content };
  });
}

export function getAllExperience() {
  const files = fs.readdirSync(experienceDir);
  return files.map(filename => {
    const filePath = path.join(experienceDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return { slug: filename.replace(".mdx", ""), ...data, content };
  });
}
