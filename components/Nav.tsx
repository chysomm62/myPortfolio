export default function Nav() {
  return (
    <header className="w-full py-6 flex items-center justify-between">
      <div className="text-sm font-medium text-[var(--foreground)]">chysomm</div>
      <nav className="space-x-6 text-sm text-[color:var(--muted)]">
        <a href="#projects" className="hover:text-[var(--accent)]">Projects</a>
        <a href="#experience" className="hover:text-[var(--accent)]">Experience</a>
        <a href="#contact" className="hover:text-[var(--accent)]">Contact</a>
      </nav>
    </header>
  );
}
