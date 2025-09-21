import Image from "next/image";

import Header from "./ui/components/header";
import Head from "next/head";
import Hero from "./ui/components/hero";
import Projects from "./ui/components/projects";
import Contact from "./ui/components/contact";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
