import Image from "next/image";

import Header from "./components/header";
import Head from "next/head";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";


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
