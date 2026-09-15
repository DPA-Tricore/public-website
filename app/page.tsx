import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/features/Features";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
