export default function Home() {
  return (
    <div className="h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="w-4xl mx-auto text-center">
        <h1 className="text-5xl text-7xl font-extrabold mb-6">
          Building <span className="text-emerald-400">Modern</span><br />
          Web Experiences
        </h1>
        <p className="text-gray-400 text-lg text-xl mb-10 w-2xl mx-auto">
          Developer focused on performance, clean UI, and scalable systems.
          Turning ideas into polished digital products.
        </p>
        <div className="flex flex-row justify-center gap-4">
          <a
            href="/content"
            className="px-8 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition"
          >View Work</a>
          <a
            href="/about"
            className="px-8 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition"
          >About Me</a>
          <a
            href="/contact"
            className="px-8 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition"
          >Contact</a>
        </div>
      </div>
    </div>
  );
}
