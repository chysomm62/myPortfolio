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
        className="text-[var(--foreground)] font-semibold text-lg link-underline hover:text-[var(--accent)]">
        {title}
      </Link>
      {description ? (
        <div className="text-xs text-[color:var(--muted)] mt-1">
          {description}
        </div>
      ) : null}
    </li>
  );
}
