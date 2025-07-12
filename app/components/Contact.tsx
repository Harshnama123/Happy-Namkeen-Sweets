import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-[80vh] relative overflow-hidden py-20 px-4 flex items-center justify-center" style={{background: "linear-gradient(120deg, #fff7f0 0%, #ffe5b4 40%, #ffd6a5 70%, #ffb703 100%)"}}>
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl px-6 sm:px-12 py-12 border border-[#ffd6a5] ring-2 ring-[#ffb703]/20">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-2 tracking-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-[#E63946] via-[#FFB703] to-[#FB8500] animate-gradient-move">
            <svg className="w-8 h-8 text-[#FFB703] drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 2l7.997 3.884v6.232L10 18l-7.997-5.884V5.884z" />
            </svg>
            Contact Us
          </h2>

          <motion.p initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.7, delay: 0.1}} viewport={{once: true}} className="text-[#4B4B4B] text-lg md:text-xl flex items-center justify-center gap-2 font-medium text-shadow-sm">
            📍 Mahaveer Nagar Ext., Near Shree Ram Circle, Kota
          </motion.p>

          <motion.p initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.7, delay: 0.2}} viewport={{once: true}} className="text-[#4B4B4B] mt-2 text-lg md:text-xl flex items-center justify-center gap-2 font-medium text-shadow-sm">
            📞 <a href="tel:8824646810" className="underline decoration-[#FFB703] underline-offset-4 hover:text-[#FB8500] transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#FFB703] after:to-[#E63946] hover:after:w-full after:transition-all after:duration-300">+91 8824646810</a>
          </motion.p>

          <div className="flex justify-center">
            <a href="tel:8824646810" className="mt-6 bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#E63946] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-105 focus:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2 animate-glow relative">
              <span className="relative z-10">Call Now</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#E63946] opacity-30 blur-lg animate-pulse"></span>
            </a>
          </div>

          {/* Google Maps Embed for Happy Namkeen and Sweets */}
          <div className="mt-10 rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#ffb703]/30">
            <iframe
              title="Google Maps - Happy Namkeen and Sweets"
              className="w-full h-96 border-none"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Happy+Namkeen+and+Sweets,+Mahaveer+Nagar+Ext.,+Near+Shree+Ram+Circle,+Kota&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
