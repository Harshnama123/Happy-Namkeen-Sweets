"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-[80vh] relative overflow-hidden py-20 px-4 flex items-center justify-center"
      style={{
        background: "linear-gradient(120deg, #fffbe6 0%, #fff7c2 60%, #ffe59e 100%)"
      }}
    >
      <motion.div
        className="max-w-3xl mx-auto bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl px-6 sm:px-12 py-12 text-center border border-[#ffe59e] ring-2 ring-[#ffe066]/20 hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 relative group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
      >
        {/* Decorative sparkles/particles */}
        <motion.div initial={{opacity:0, scale:0.8}} whileInView={{opacity:0.5, scale:1}} transition={{duration:1, delay:0.2}} className="absolute left-4 top-4 w-8 h-8 pointer-events-none select-none">
          <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" fill="#FFB703" opacity="0.2"/><circle cx="16" cy="16" r="6" fill="#E63946" opacity="0.15"/></svg>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.8}} whileInView={{opacity:0.5, scale:1}} transition={{duration:1, delay:0.3}} className="absolute right-8 bottom-8 w-6 h-6 pointer-events-none select-none">
          <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#FB8500" opacity="0.15"/></svg>
        </motion.div>
        <motion.h2
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7, type: "spring" }}
          className="font-display text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3 tracking-tight drop-shadow bg-clip-text text-transparent bg-gradient-to-r from-[#ffd600] via-[#ffb703] to-[#ff8500] animate-gradient-move"
        >
          <span className="text-[#ffd600] text-3xl"><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='inline w-8 h-8 align-middle'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10m-7 4h4m-7 4h10' /></svg></span> About Us
        </motion.h2>
        <motion.p
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          className="text-[#b45309] text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium flex flex-col items-center gap-2"
        >
          <span className="flex items-center gap-2 justify-center"><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='inline w-6 h-6 text-[#ffd600] align-middle'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10m-7 4h4m-7 4h10' /></svg> Since <span className="text-[#ffb703] font-semibold">1998</span></span>,
          <span className="flex items-center gap-2 justify-center"><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='inline w-6 h-6 text-[#ff8500] align-middle'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z' /></svg> <span className="font-semibold">Mahaveer Nagar Ext., Near Shree Ram Circle, Kota</span></span>
          <br />
          We’re known for our <span className="text-[#ffb703] font-semibold bg-[#fffbe6] px-2 py-1 rounded shadow">authentic taste</span>, fresh ingredients, and premium-quality products made with love.
        </motion.p>
        <motion.div
          className="mt-10 flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="h-40 w-40 rounded-xl border-2 border-[#ffd600] bg-[#fffbe6] shadow-inner flex items-center justify-center group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
            {/* Optional image or logo */}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
