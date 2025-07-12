export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-700 via-yellow-500 to-red-700 text-white py-8 px-4 text-center shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-4">
        <div className="flex items-center gap-2 justify-center md:justify-start w-full md:w-auto">
          <img src="/globe.svg" alt="Happy Namkeen Logo" className="h-8 w-8" />
          <span className="font-bold text-lg tracking-wide">Happy Namkeen & Sweets</span>
        </div>
        <nav className="flex gap-6 text-sm justify-center w-full md:w-auto">
          <a href="#about" className="hover:text-yellow-200 transition-colors">About</a>
          <a href="#namkeen" className="hover:text-yellow-200 transition-colors">Namkeen</a>
          <a href="#sweets" className="hover:text-yellow-200 transition-colors">Sweets</a>
          <a href="#snacks" className="hover:text-yellow-200 transition-colors">Snacks</a>
          <a href="#contact" className="hover:text-yellow-200 transition-colors">Contact</a>
        </nav>
      </div>
      <div className="border-t border-white/20 mt-6 pt-4 text-xs text-white/80">
        <p>© 2025 Happy Namkeen and Sweets. All rights reserved.</p>
        <p className="mt-1">Made with <span className="text-yellow-300">♥</span> in India</p>
      </div>
    </footer>
  );
}
