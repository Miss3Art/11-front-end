export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl w-full mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
          Building <span className="text-emerald-400">Modern</span>
          <br />
          Web Experiences
        </h1>
        <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto">
          Developer focused on performance, clean UI, and scalable systems.
          Turning ideas into polished digital products.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <a href="/content" className="px-8 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition text-sm sm:text-base">
            View Work
          </a>
          <a href="/about" className="px-8 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition text-sm sm:text-base">
            About Me
          </a>
          <a href="/contact" className="px-8 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition text-sm sm:text-base">
            Contact
          </a>
          <a href="/list" className="px-8 py-3 bg-emerald-500 text-black font-semibold rounded-xl hover:bg-emerald-400 transition text-sm sm:text-base">
            Users
          </a>
        </div>
      </div>
    </div>
  );
}