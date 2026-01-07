"use client"

import { ArrowRight } from "lucide-react"
import { ScrollFadeIn } from "./scroll-animation"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-primary/10 to-transparent rounded-full filter blur-3xl animate-float" />
        <div
          className="absolute bottom-0 -right-1/2 w-full h-full bg-gradient-to-l from-accent/10 to-transparent rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        {/* Extra gradient for depth */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
          style={{
            animation: "pulse-glow 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollFadeIn delay={0}>
          {/* Badge with animation */}
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full animate-fade-in-up">
            <span className="text-primary text-sm font-semibold">UAE's Leading POS Ecosystem Partner</span>
          </div>

          {/* Title with gradient glow */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
            Enterprise POS
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
              Enablement Across the UAE
            </span>
          </h1>

          {/* Subtitle with fade */}
          <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            End-to-end POS ecosystem services for banks, fintechs, and payment service providers. Serving 500,000+
            devices with authorized partnerships and proven reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-300">
            <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 flex items-center gap-2">
              Request a Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-primary/50 text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300 ease-out hover:border-accent">
              Learn More
            </button>
          </div>

          {/* Stats with staggered animation */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 animate-fade-in-up delay-400">
            <div className="group card-futuristic p-4 rounded-lg backdrop-blur hover:-translate-y-1 animate-scale-in delay-100">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                500K+
              </div>
              <div className="text-foreground/60 text-sm">POS Devices Supported</div>
            </div>
            <div className="group card-futuristic p-4 rounded-lg backdrop-blur hover:-translate-y-1 animate-scale-in delay-200">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                150K+
              </div>
              <div className="text-foreground/60 text-sm">Devices Repaired</div>
            </div>
            <div className="group card-futuristic p-4 rounded-lg backdrop-blur hover:-translate-y-1 animate-scale-in delay-300">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                800K+
              </div>
              <div className="text-foreground/60 text-sm">Merchant Visits</div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
