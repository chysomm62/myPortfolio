import ResumeButton from "./ui/Resumebutton";

export default function Hero() {
  return (
    <section className="min-h-[60vh] sm:min-h-[75vh] flex items-start lg:items-center container mx-auto p-5 lg:px-14 max-w-7xl flex-col lg:flex-row gap-10 mt-36 lg:mt-14">
      <div className="flex flex-col gap-7">
        <h1 className="text-5xl lg:text-7xl font-bold text-gradient ">
          Chisom Muorah
        </h1>
        <p className="text-lg text-accent max-w-xl">
          Building amazing web experiences
        </p>

        <div className="flex items-center gap-10">
          <ResumeButton />
        </div>
      </div>
    </section>
  );
}
