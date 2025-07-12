"use client";
import { motion } from "framer-motion";
import { image } from "framer-motion/m";
import Image from "next/image";

const namkeenItems = [
  { name: "Long Sev", price: 220, spice: "Spicy",image: "/images/long.jpg" },
  { name: "Papdi Mixture", price: 220, spice: "Medium Spicy", image: "/images/mixture.jpg" },
  { name: "Cornflakes Mixture", price: 220, spice: "Very Spicy" ,image: "/images/tej.jpeg",},
  { name: "Light Mixture", price: 220, spice: "Mild" },
  { name: "Indori Mixture", price: 220, spice: "Sweet & Tangy",image: "/images/km.jpg", },
  { name: "Hing Mixture", price: 240, spice: "Medium Spicy" },
  { name: "Papdi (Normal)", price: 220, spice: "no spicy" },
  { name: "Papdi (Spicy)", price: 220, spice: "Spicy" },
  { name: "Special Kadke Sev", price: 220, spice: "Medium Spicy" ,image: "/images/motesev.jpeg",},
  { name: "Barik Sev", price: 220, spice: "Less Spicy" ,image: "/images/Bariksev.jpeg"},
  { name: "Ratlami", price: 220, spice: "Medium Spicy",image: "/images/Ratlami.jpg" },
  { name: "Lassan Sev", price: 220, spice: "Spicy" },
];

const snacksItems = [
  { name: "Kachori", price: 10, spice: "Medium Spicy" , image: "/images/kachori.webp" },
  { name: "Samosa", price: 10, spice: "Spicy",image: "/images/samosa.jpg" },
];

export default function Namkeen() {
  return (
    <section
      id="namkeen"
      className="w-full min-h-[80vh] relative overflow-hidden py-20 px-4 flex items-center justify-center" style={{background: "linear-gradient(120deg, #fff7f0 0%, #ffe5b4 40%, #ffd6a5 70%, #ffb703 100%)"}}
    >
      <motion.div
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl max-w-7xl mx-auto p-8 sm:p-12 border border-yellow-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-4xl font-bold text-center text-red-700 mb-10 tracking-tight"
        >
          Namkeen
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {namkeenItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/90 shadow-xl rounded-2xl p-6 text-center border border-yellow-100 hover:scale-105 hover:shadow-yellow-300/40 transition-transform duration-200 cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(255, 193, 7, 0.18)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
            >
              {item.image ? (
 <Image
  src={item.image}
  alt={item.name}
  width={160}
  height={100}
  className="mx-auto mb-4 rounded-xl object-cover group-hover:scale-105 transition-transform duration-200"
/>

) : (
  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center text-orange-300 text-2xl group-hover:scale-110 transition-transform duration-200">
    🧆
  </div>
)}

              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-700 transition-colors duration-200 flex items-center justify-center gap-1">
                {item.name}
                {item.spice.includes("Spicy") && (
                  <span className="ml-1 text-red-500 text-lg">🔥</span>
                )}
              </h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span
                  className={
                    "inline-block px-3 py-1 rounded-full text-xs font-semibold " +
                    (item.spice.includes("Very Spicy")
                      ? "bg-red-200 text-red-700"
                      : item.spice.includes("Medium Spicy")
                      ? "bg-orange-100 text-orange-700"
                      : item.spice.includes("Spicy")
                      ? "bg-orange-200 text-orange-700"
                      : item.spice.includes("Sweet")
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700")
                  }
                >
                  {item.spice}
                </span>
              </div>
              <p className="text-red-600 font-bold text-lg">₹{item.price}/kg</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
          className="text-4xl font-bold text-center text-orange-700 mb-10 mt-10 tracking-tight"
        >
          Hot Snacks
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {snacksItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/90 shadow-xl rounded-2xl p-6 text-center border border-orange-100 hover:scale-105 hover:shadow-orange-300/40 transition-transform duration-200 cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(251, 146, 60, 0.18)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
            >
              {item.image ? (
  <Image
    src={item.image}
    alt={item.name}
    width={160}
    height={100}
    className="mx-auto mb-4 rounded-xl object-cover group-hover:scale-105 transition-transform duration-200"
  />
) : (
  <div className="h-16 w-28 mx-auto mb-4 rounded-xl bg-orange-100 flex items-center justify-center text-orange-300 text-2xl">
    🥟
  </div>
)}

              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-700 transition-colors duration-200 flex items-center justify-center gap-1">
                {item.name}
                {item.spice.includes("Spicy") && (
                  <span className="ml-1 text-orange-500 text-lg">🔥</span>
                )}
              </h3>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span
                  className={
                    "inline-block px-3 py-1 rounded-full text-xs font-semibold " +
                    (item.spice.includes("Very Spicy")
                      ? "bg-red-200 text-red-700"
                      : item.spice.includes("Medium Spicy")
                      ? "bg-orange-100 text-orange-700"
                      : item.spice.includes("Spicy")
                      ? "bg-orange-200 text-orange-700"
                      : item.spice.includes("Sweet")
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700")
                  }
                >
                  {item.spice}
                </span>
              </div>
              <p className="text-orange-600 font-bold text-lg">₹{item.price} each</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
