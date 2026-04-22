import Link from "next/link";

export default function Contact() {
  return (
    <div className="h-screen flex flex-col md:flex-row relative overflow-hidden">
      <Link
        href="/home"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white hover:text-emerald-200 transition-colors group"
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

      {/* Left panel */}
      <div className="flex-1 md:flex-none md:w-1/2 bg-emerald-600 text-white flex items-center justify-center px-8 pt-20 pb-8 md:p-12">
        <div className="max-w-md w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Contact me
          </h1>
          <p className="text-base sm:text-lg opacity-90 leading-relaxed">
            Have a project in mind? Questions? Opportunities?
            Reach out and lets build something great.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 md:flex-none md:w-1/2 bg-gray-100 flex items-center justify-center px-4 py-8 sm:p-8">
        <div className="bg-white w-full max-w-md p-8 sm:p-10 rounded-3xl shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">
            Contact Info
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="text-lg sm:text-xl font-semibold text-emerald-600">
                contact@example.com
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Phone</p>
              <p className="text-lg sm:text-xl font-semibold text-emerald-600">
                +976 9999 9999
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}