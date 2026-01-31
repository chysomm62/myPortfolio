export default function ProjectCard({ title, description }: { title: string; description?: string }) {
  return (
    <article className="p-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] rounded-lg">
      <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm text-[color:var(--muted)]">{description}</p>
      ) : null}
    </article>
  );
}
