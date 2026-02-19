import Hero from "../components/Hero";
import Nav from "../components/Nav";
import ProjectCard from "../components/ui/ProjectCard";
import { getAllProjects, getAllExperience } from "../lib/content";

export default function Home() {
  const projects = getAllProjects() as any[];
  const experience = getAllExperience() as any[];

  return (
    <div className="min-h-screen w-full font-sans flex items-center justify-center bg-background text-accent">
      <main className="w-full h-full mx-auto flex items-center justify-center flex-col">
        <Nav />
        <Hero />

        <section id="projects" className="scroll-mt-24">
          <h2 className="text-sm font-medium text-(--muted)">
            Selected projects
          </h2>
          <ul className="mt-6 space-y-6">
            {projects.slice(0, 6).map(p => (
              <ProjectCard
                key={p.slug}
                slug={p.slug}
                title={p.title || p.slug}
                description={p.description || p.excerpt}
              />
            ))}
          </ul>
        </section>

        <section id="experience" className="scroll-mt-24">
          <h2 className="text-sm font-medium text-(--muted)">Experience</h2>
          <ul className="mt-6 space-y-4 text-(--muted)">
            {experience.slice(0, 6).map(e => (
              <li key={e.slug}>
                <div className="text-foreground font-medium">
                  {e.title || e.slug}
                </div>
                <div className="text-xs">{e.company || e.role || e.date}</div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="mt-16">
          <h2 className="text-base font-semibold tracking-wide text-(--muted)">
            Contact
          </h2>
          <p className="mt-4 text-sm text-(--muted)">
            Want to work together? Email{" "}
            <a className="text-(--accent)" href="mailto:hi@chysomm.net">
              hi@chysomm.net
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
