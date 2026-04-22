import Link from "next/link";

export default function Content() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 relative">
      <Link 
        href="/home" 
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group z-50"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-6 h-6 group-hover:-translate-x-1 transition-transform" 
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
        <span className="text-lg font-medium">Back to Home</span>
      </Link>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
            Content
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut vehicula pulvinar tellus a commodo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 transition duration-300 hover:border-emerald-500 hover:-translate-y-2">
            <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
              Lorem ipsum
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Vestibulum et tellus placerat velit elementum consectetur sed eget sem.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 transition duration-300 hover:border-emerald-500 hover:-translate-y-2">
            <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
              Lorem ipsum
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Praesent vestibulum odio sed tellus rutrum tristique.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 transition duration-300 hover:border-emerald-500 hover:-translate-y-2">
            <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
              Lorem ipsum
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Mauris suscipit metus sed egestas auctor.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 transition duration-300 hover:border-emerald-500 hover:-translate-y-2">
            <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
              Lorem ipsum
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Pellentesque malesuada felis non molestie ultrices.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 transition duration-300 hover:border-emerald-500 hover:-translate-y-2">
            <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
              Lorem ipsum
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 transition duration-300 hover:border-emerald-500 hover:-translate-y-2">
            <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
              Lorem ipsum
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Donec lorem leo, scelerisque sed auctor eget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}