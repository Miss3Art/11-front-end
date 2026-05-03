"use client";

import Link from "next/link";
import DataJson from "../../utils/data.json";
import Image from "next/image";

export default function List() {

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".user-card");

    cards.forEach((card) => {
      const text = card.dataset.search;
      card.style.display = text.includes(query) ? "flex" : "none";
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 relative">
      
      <Link 
        href="/home" 
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition z-50"
      >
        ← Back to Home
      </Link>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-emerald-400 mb-3 mt-5">
            User List
          </h1>
          <p className="text-gray-400 text-lg">
            Browse through all users
          </p>
        </div>

        {/* SEARCH */}
        <div className="mb-10 flex justify-center">
          <input
            onChange={handleSearch}
            placeholder="Search name or email..."
            className="w-full max-w-xl px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {DataJson.map((item) => {
            const searchText = `${item.first_name} ${item.last_name} ${item.email}`.toLowerCase();

            return (
              <div 
                key={item.id}
                data-search={searchText}
                className="group user-card relative bg-gray-900 border border-gray-700 rounded-3xl p-6 flex flex-col h-full 
                transition-all duration-300 
                hover:border-emerald-500 
                hover:shadow-[0_10px_40px_rgba(16,185,129,0.2)] 
                hover:-translate-y-2"
              >

                {/* gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>

                {/* TOP SECTION */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <Image 
                    src={item.img} 
                    alt="User Image" 
                    width={56}
                    height={56}
                    className="rounded-2xl object-cover border border-gray-700"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold leading-tight">
                      {item.first_name} {item.last_name}
                    </h2>
                    <p className="text-xs text-gray-400 break-all">
                      {item.email}
                    </p>
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {item.type}
                  </span>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 gap-y-3 text-sm mb-4 relative z-10">
                  <div>
                    <p className="text-gray-500 text-xs">Age</p>
                    <p>{item.age}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Country</p>
                    <p>{item.country}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Points</p>
                    <p className="text-emerald-400 font-medium">{item.point}</p>
                  </div>
                </div>

                {/* PRODUCTS */}
                <div className="flex gap-2 mt-3 relative z-10">
                  {item.item.slice(0, 4).map((product) => (
                    <Image
                      key={product.id}
                      src={product.img}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="rounded-xl object-cover border border-gray-700 hover:scale-110 transition"
                    />
                  ))}
                </div>

                {/* HOVER TEXT */}
                <div className="opacity-0 group-hover:opacity-100 transition text-xs text-gray-400 mt-2 relative z-10">
                  Click to view full profile →
                </div>

                {/* BUTTON */}
                <button className="w-full mt-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 
                hover:from-emerald-400 hover:to-emerald-500 
                transition font-medium tracking-wide relative z-10">
                  View Details
                </button>

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
