import Footer from "@/components/landing/Footer";
import Grid from "@/components/landing/Grid";
import Hero from "@/components/landing/Hero";
import { FloatingNav } from "@/components/common/NavBar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Home() {
  return (
    <main className="dark relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Footer />
      </div>
    </main>
  );
}
