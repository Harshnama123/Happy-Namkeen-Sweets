"use client";
import { motion } from "framer-motion";

const sweets = [
  { name: "Standard Barfi", price: 340 },
  { name: "Coconut Barfi", price: 300 },
  { name: "Milkcake", price: 340 },
  { name: "Mava Roll (Small)", price: 380 },
  { name: "Mava Roll (Big)", price: 380 },
  { name: "Brown Peda", price: 340 },
  { name: "White Peda", price: 300 },
  { name: "Gulab Jamun", price: 200 },
];

export default function Sweets() {
  return (
    <section
      id="sweets"
      className="w-full min-h-[80vh] relative overflow-hidden py-20 px-4 flex items-center justify-center" style={{background: "linear-gradient(120deg, #fff7f0 0%, #ffe5b4 40%, #ffd6a5 70%, #ffb703 100%)"}}
    >
      <motion.div
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl max-w-7xl mx-auto p-8 sm:p-12 border border-pink-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h2 className="text-4xl font-bold text-center text-red-700 mb-10 tracking-tight">
          Sweets
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {sweets.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/90 shadow-md rounded-xl p-5 text-center border border-pink-100 hover:scale-105 hover:border-orange-300 transition-transform duration-200 cursor-pointer group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.06, borderColor: "#fb923c" }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
            >
              <div className="h-20 w-20 mx-auto mb-4 rounded-lg bg-pink-50 border border-dashed border-pink-300 flex items-center justify-center text-pink-300 text-lg group-hover:scale-105 transition-transform duration-200">
                {/* Image placeholder */}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-700 transition-colors duration-200">
                {item.name}
              </h3>
              <p className="text-red-600 font-bold text-base mt-1">
                ₹{item.price}/kg
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
