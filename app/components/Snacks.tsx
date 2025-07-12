
"use client";
import { motion } from "framer-motion";

const snacks = [
  { name: "Kachori", price: 10, icon: "/file.svg" },
  { name: "Samosa", price: 10, icon: "/globe.svg" },
];

export default function Snacks() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-red-700 mb-10 tracking-tight">Snacks</h2>
      <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-4xl mx-auto">
        {snacks.map((item, idx) => (
          <div key={idx} className="bg-white/90 shadow-xl rounded-2xl p-6 w-60 text-center border border-orange-100 hover:scale-105 transition-transform duration-200">
            <div className="h-16 w-16 mx-auto mb-4 rounded bg-orange-100 flex items-center justify-center text-orange-200 text-2xl group-hover:scale-110 transition-transform duration-200">
              {/* Image placeholder - paste your image here */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
            <p className="text-red-600 font-bold text-lg">₹{item.price} each</p>
          </div>
        ))}
      </div>
    </section>
  );
}
