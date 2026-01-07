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
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"
          style={{
            animation: "pulse-glow 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <ScrollFadeIn delay={0}>
            <div className="text-left">
              {/* Badge */}
              <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full animate-fade-in-up">
                <span className="text-primary text-sm font-semibold">UAE's Leading POS Ecosystem Partner</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
                Enterprise POS
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
                  Enablement Across the UAE
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
                End-to-end POS ecosystem services for banks, fintechs, and payment service providers. Serving 500,000+
                devices with authorized partnerships and proven reliability.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
                <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 flex items-center gap-2">
                  Request a Quote
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-primary/50 text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300 ease-out hover:border-accent">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 animate-fade-in-up delay-400">
                <div className="card-futuristic p-3 rounded-lg backdrop-blur">
                  <div className="text-xl font-bold text-primary">500K+</div>
                  <div className="text-foreground/60 text-[10px] uppercase tracking-wider">Devices</div>
                </div>
                <div className="card-futuristic p-3 rounded-lg backdrop-blur">
                  <div className="text-xl font-bold text-primary">150K+</div>
                  <div className="text-foreground/60 text-[10px] uppercase tracking-wider">Repaired</div>
                </div>
                <div className="card-futuristic p-3 rounded-lg backdrop-blur">
                  <div className="text-xl font-bold text-primary">800K+</div>
                  <div className="text-foreground/60 text-[10px] uppercase tracking-wider">Visits</div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Right Column: Custom Video Container (The "Shape") */}
          <ScrollFadeIn delay={200}>
            <div className="relative flex justify-center items-center">
              {/* This is the main Oval Container */}
              <div className="relative w-full max-w-[450px] aspect-[4/5] overflow-hidden rounded-[200px] border-8 border-white/10 shadow-2xl animate-float">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover scale-110"
                >
                  <source src="https://gghpnxauu0tgy0i9.public.blob.vercel-storage.com/WhatsApp%20Video%202026-01-07%20at%2011.19.41%20AM.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay Gradient to match the UI style */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating UI Elements (Matching your screenshot) */}
              <div className="absolute -left-10 top-1/4 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl animate-bounce-slow hidden sm:block">
                <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
  <img 
    src="/pos-terminal_10918932.png" 
    alt="icon" 
    className="w-full h-full object-cover" 
  />
</div>
                   <span className="text-sm font-bold text-slate-800">A one-stop HUB</span>
                </div>
                <div className="w-32 h-12 bg-primary/20 rounded-md overflow-hidden">
                   <div className="w-2/3 h-full bg-primary" />
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/3 p-4 bg-indigo-600 rounded-2xl shadow-xl animate-float hidden sm:block" style={{ animationDelay: '1.5s' }}>
                <span className="text-xs text-white/80">End-to-End</span>
                <div className="w-24 h-12 mt-2 border-b-2 border-l-2 border-white/30 relative">
                   {/* Simplified SVG Path for the graph look */}
                   <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full stroke-white fill-none">
                      <path d="M0 40 Q 25 10 50 30 T 100 10" strokeWidth="3" />
                   </svg>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

        </div>
      </div>
    </section>
  )
}