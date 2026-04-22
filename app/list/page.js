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
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition group z-50"
      >
        ← Back to Home
      </Link>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-emerald-400 mb-3 mt-5">
            User List
          </h1>
          <p className="text-gray-400 text-lg">
            Browse through all users
          </p>
        </div>
        <div className="mb-10 flex justify-center">
          <input
            onChange={handleSearch}
            placeholder="Search name or email..."
            className="w-full max-w-xl px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {DataJson.map((item) => {
            const searchText = `${item.first_name} ${item.last_name} ${item.email}`.toLowerCase();

            return (
              <div 
                key={item.id}
                data-search={searchText}
                className="user-card bg-gray-900 border border-gray-700 rounded-3xl p-7 flex flex-col h-full transition-all duration-300 hover:border-emerald-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-8">
                  <h2 className="text-xl font-semibold pr-3">
                    {item.first_name} {item.last_name}
                  </h2>
                  <div className= "flex flex-col items-center gap-2">
                    <img src={item.img} alt="User Image" className="w-10 h-10 rounded-full"/>
                    <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 flex-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Age</span>
                    <span>{item.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email</span>
                    <span className="text-emerald-400 break-all text-right">
                      {item.email}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Country</span>
                    <span>{item.country}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Points</span>
                    <span className="text-emerald-400">{item.point}</span>
                  </div>
                  <div className="flex gap-2 mt-1">
                    {item.item.map((product) => (
                      <div key={product.id} className="flex flex-col items-center gap-1">
                        <img
                          src={product.img}
                          alt={product.name}
                          className="w-10 h-10 rounded-lg object-cover border border-gray-700"/>
                          <span className="text-gray-400 text-xs">{product.name}</span>
                      </div>
                    ))}
                  </div>
                </div>  
                <button className="w-full bg-emerald-600 hover:bg-emerald-500 py-3 rounded-2xl mt-6">View Details</button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
