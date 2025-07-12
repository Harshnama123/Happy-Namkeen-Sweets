
"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Namkeen from "./components/Namkeen";
import Sweets from "./components/Sweets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Namkeen />
      <Sweets />
      <Contact />
      <Footer />
    </main>
  );
}
