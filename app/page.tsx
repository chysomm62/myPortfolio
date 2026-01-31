import Hero from "../components/Hero";
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import { getAllProjects, getAllExperience } from "../lib/content";

export default function Home() {
  const projects = getAllProjects();
  const experience = getAllExperience();

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(0,229,255,0.04),transparent),var(--background)] font-sans">
      <main className="container max-w-3xl mx-auto py-24 px-6">
        <Nav />
        <Hero />

        <section id="projects" className="mt-12">
          <h2 className="text-base font-semibold tracking-wide text-[color:var(--muted)]">Projects</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.slice(0, 6).map((p) => (
              <ProjectCard key={p.slug} title={p.title || p.slug} description={p.description || p.excerpt} />
            ))}
          </div>
        </section>

        <section id="experience" className="mt-16">
          <h2 className="text-base font-semibold tracking-wide text-[color:var(--muted)]">Experience</h2>
          <ul className="mt-6 space-y-4 text-[color:var(--muted)]">
            {experience.slice(0, 6).map((e) => (
              <li key={e.slug} className="text-sm">
                <div className="font-medium text-[var(--foreground)]">{e.title || e.slug}</div>
                <div className="text-xs">{e.company || e.role || e.date}</div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-base font-semibold tracking-wide text-[color:var(--muted)]">Contact</h2>
          <p className="mt-4 text-sm text-[color:var(--muted)]">Want to work together? Email <a className="text-[var(--accent)]" href="mailto:hi@chysomm.net">hi@chysomm.net</a></p>
        </section>

      </main>
    </div>
  );
}
