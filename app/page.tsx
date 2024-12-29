'use client'
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import ContactSection from "@/components/contact/Contact"
import About from "@/components/about/About"
import { useRef } from "react";

export default function Page(){
  const contactRef = useRef<{ scrollToContact: () => void }>(null);
  return(
    <div>
      <HeroSection contactRef = {contactRef}/>
      <About/>
      <Experience/>
      <Skills/>
      <Education/>
      <ContactSection ref = {contactRef}/>
    </div>
  )
}