import { useState } from "react";
import type { DemoId } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";

export default function App() {
  const [demo, setDemo] = useState<DemoId | null>(null);
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Portfolio onOpen={setDemo} />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
      {demo && (
        <DemoModal key={demo} demoId={demo} onClose={() => setDemo(null)} />
      )}
    </>
  );
}
