import Link from "next/link";

export default function ProjectCard({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description?: string;
}) {
  return (
    <li>
      <Link
        href={`/projects/${slug}`}
        className="text-foreground font-semibold text-lg link-underline hover:text-(--accent)">
        {title}
      </Link>
      {description ? (
        <div className="text-xs text-(--muted) mt-1">{description}</div>
      ) : null}
    </li>
  );
}
