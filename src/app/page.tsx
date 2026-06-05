import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Works />
      </main>
      <Footer />
    </>
  );
}
