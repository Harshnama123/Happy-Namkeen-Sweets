"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function scrollToSection(id: string) {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen relative overflow-hidden py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-br from-[#fffbe6] via-[#f1f5f9] to-[#ffe59e]"
      style={{
        backgroundSize: "200% 200%",
        animation: "gradientShift 18s ease-in-out infinite",
      }}
    >
      {/* Subtle geometric background */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div
          className="w-[90vw] max-w-6xl h-[80vh] border-2 border-[#ffe066]/30 rounded-[2.5rem] mx-auto my-8 backdrop-blur-sm shadow-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,224,102,0.06) 60%, rgba(241,245,249,0.06) 100%)",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#ffe066]/15 rounded-full animate-spin-slow" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-[#fbbf24]/15 rounded-full animate-spin-slower" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text mb-2"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #fbbf24 0%, #ff8500 40%, #334155 80%)",
              filter: "drop-shadow(0 2px 16px rgba(251, 191, 36, 0.18))",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Happy Namkeen
            {/* Emoji wrapped so it doesn’t inherit text-transparent */}
            <span
              className="ml-2 align-middle text-4xl md:text-5xl drop-shadow"
              style={{ color: "#fbbf24" }} // or any Tailwind class like text-yellow-400
            >
              😊
            </span>
            <br />
            <span className="block">& Sweets</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-lg md:text-2xl text-[#7c4700] font-medium mb-10 px-4 md:px-12"
        >
          Fresh, authentic Namkeen and sweets made daily with the finest ingredients. Taste happiness in every
          bite!
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center"
        >
          <motion.button
            className="relative group bg-gradient-to-r from-[#fbbf24] to-[#ff8500] text-white px-10 py-4 rounded-full font-display font-bold text-lg shadow-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#ffe066]/60"
            onClick={() => scrollToSection("namkeen")}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Explore Products</span>
              <span className="text-2xl">🛍️</span>
            </span>
          </motion.button>

          <motion.button
            className="relative group bg-gradient-to-r from-[#ffe066] to-[#fbbf24] text-[#7c4700] px-10 py-4 rounded-full font-display font-bold text-lg shadow-lg overflow-hidden border border-[#ffe066]/40 focus:outline-none focus:ring-2 focus:ring-[#ffe066]/60"
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Order Now</span>
              <span className="text-2xl">🚚</span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ duration: 0.35, type: "spring", stiffness: 250, damping: 22 }}
              className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 border border-[#ffe066]/40"
              onClick={(e) => e.stopPropagation()}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(255,250,200,0.97) 60%, rgba(255,224,102,0.97) 100%)",
              }}
            >
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 180 }}
                  className="text-5xl mb-3"
                >
                  🏪
                </motion.div>
                <motion.h3
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.22 }}
                  className="font-display text-xl text-[#b45309] font-bold mb-2"
                >
                  Visit Our Shop
                </motion.h3>
                <motion.p
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.28 }}
                  className="text-[#7c4700] mb-5 text-base"
                >
                  Experience the authentic flavors of traditional Indian namkeen and sweets. Freshly made daily with love
                  and the finest ingredients!
                </motion.p>
                <motion.button
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="bg-gradient-to-r from-[#fbbf24] to-[#ff8500] text-white px-7 py-2.5 rounded-full font-display font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                  onClick={() => setShowModal(false)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Sounds Delicious! 🤤
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-spin-slow {
          animation: spin 18s linear infinite;
        }
        .animate-spin-slower {
          animation: spin 28s linear infinite;
        }
        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.section>
  );
}
