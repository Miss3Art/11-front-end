"use client";
import Link from "next/link";
import DataJson from "../../utils/data.json";
import { useState, useMemo, useEffect } from "react";

export default function List() {
  const [searchQuery, setSearchQuery] = useState("");

  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery.toLowerCase());
    }, 150);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredUsers = useMemo(() => {
    if (!debouncedQuery) return DataJson;
    return DataJson.filter((item) => {
      const searchText = `${item.first_name} ${item.last_name} ${item.email} ${item.country}`.toLowerCase();
      return searchText.includes(debouncedQuery);
    });
  }, [debouncedQuery]);

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#10b98120_0%,transparent_50%)]" />

      <Link
        href="/home"
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition z-50"
      >
        ← Back to Home
      </Link>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-400 mb-3">User List</h1>
          <p className="text-gray-400 text-lg">Browse through all users</p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email or country..."
              className="w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-3xl focus:outline-none focus:border-emerald-500 text-lg placeholder-gray-500"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500">🔍</div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-14 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <p className="text-gray-500 mb-6">Showing {filteredUsers.length} users</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredUsers.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col h-full bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-pointer"             
            >              
              <div className="p-5 pb-4 flex-1">
                <div className="flex gap-4">                  
                  <div className="relative flex-shrink-0">
                    <img
                      src={item.img}
                      alt="User"
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-emerald-500 rounded-full border-[3px] border-gray-900" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center gap-1">
                    <p className="text-sm text-gray-400 break-all">{item.email}</p>
                    <span className="text-xs px-3 py-1 w-fit bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full">
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-800 px-5 py-4 grid grid-cols-3 gap-4 text-center bg-gray-950/50">
                <div>
                  <p className="text-[10px] text-gray-500">AGE</p>
                  <p className="text-lg font-semibold">{item.age}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">COUNTRY</p>
                  <p className="text-lg font-semibold">{item.country}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">POINTS</p>
                  <p className="text-lg font-semibold text-emerald-400">{item.point}</p>
                </div>
              </div>
              
              <div className="px-5 pt-2 pb-3">
                <p className="text-xs text-gray-500 mb-3">ITEMS OWNED</p>
                <div className="flex gap-3">
                  {item.item.slice(0, 4).map((product) => (
                    <img
                      key={product.id}
                      src={product.img}
                      alt={product.name}
                      className="w-12 h-12 rounded-2xl object-cover border border-gray-700 hover:scale-105 transition-transform"
                    />
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-800 px-5 py-4 bg-gray-950/50 mt-auto">
                <h2 className="text-lg font-semibold text-center">
                  {item.first_name} {item.last_name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}