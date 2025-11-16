import Image from "next/image";
import Header from "@/components/landing-page/Header";
import Hero from "@/components/landing-page/Hero";
import Features from "@/components/landing-page/Features";
import CodeShowcase from "@/components/landing-page/CodeShowcase";
import Footer from "@/components/landing-page/Footer";
export default function Home() {
  return (
    <>
      <div className="min-h-screen container mx-auto py-5">
        <Header />
        <Hero />
        <Features />
        <CodeShowcase />
        <Footer />
      </div>
    </>
  );
}
