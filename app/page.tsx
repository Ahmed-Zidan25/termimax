"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Products from "@/components/products"
import Experience from "@/components/experience"
import Features from "@/components/features"
import IOT from "@/components/iot"
import Clients from "@/components/clients"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Experience />
      <Features />
      <IOT />
      <Clients />
      <CTA />
      <Footer />
    </main>
  )
}
