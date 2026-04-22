import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 md:px-20 py-24 md:py-20 relative">
      <Link
        href="/home"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7 7-7"
          />
        </svg>
        <span className="text-base sm:text-lg font-medium">Back to Home</span>
      </Link>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-12 w-full max-w-5xl">
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-emerald-400">
            About Me
          </h1>
          <p className="text-base sm:text-lg text-gray-400">
            <span className="font-semibold text-emerald-400">Role:</span> Student
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Nulla convallis vitae est hendrerit finibus. Etiam faucibus a ex eget mollis.
            Praesent mi ante, placerat in erat ut, aliquam vehicula quam. Maecenas eget enim
            et massa laoreet ultricies in eu dolor. Aliquam sit amet sollicitudin turpis.
            Duis sed lacus quis diam lobortis pulvinar non eget leo.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaf1w4QgCJd6JOBTxpUyvbU6iVz6_gP2p2Q&s"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full shadow-2xl object-cover border-4 border-emerald-500/30"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}