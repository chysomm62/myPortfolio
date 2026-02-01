export default function Hero() {
  return (
    <section className="min-h-[60vh] sm:min-h-[75vh] flex items-center container mx-auto px-5 max-w-7xl">
      <div className="max-w-2xl">
        <h1 className="text-2xl lg:text-7xl  font-extrabold text-gradient ">
          Chisom Muorah
        </h1>
        <p className="mt-6 text-lg text-(--muted) max-w-xl">
          I build minimal, dark interfaces and front-end experiences focused on
          clarity and performance.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="text-sm text-(--accent) link-underline">
            Selected projects →
          </a>
        </div>
      </div>
    </section>
  );
}
