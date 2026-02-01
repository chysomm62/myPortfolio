import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

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

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(projectsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) throw new Error(`Project not found: ${slug}`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
  });

  return { slug, mdxSource, ...data };
}
