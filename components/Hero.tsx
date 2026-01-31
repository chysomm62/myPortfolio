export default function Hero() {
  return (
    <section className="w-full py-24">
      <div className="max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-[var(--foreground)]">
          Hi, I’m <span className="text-[var(--accent)]">Chy</span>. I build sleek, dark UIs.
        </h1>
        <p className="mt-6 text-lg text-[color:var(--muted)] max-w-2xl">
          I design and build minimal web experiences focused on clarity and motion. Currently building things with Next.js and modern CSS.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-4 py-2 rounded bg-[rgba(0,229,255,0.06)] border border-[rgba(0,229,255,0.12)] text-[var(--accent)]"
          >
            See projects
          </a>
        </div>
      </div>
    </section>
  );
}
