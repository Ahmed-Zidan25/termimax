"use client"

import { ScrollFadeIn } from "./scroll-animation"
import Link from "next/link";

export default function Features() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Feature 1 - Full Card Video */}
        <ScrollFadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-in-left delay-100 text-foreground">
                Optimize POS Operations with <span className="text-primary">Intelligent Network Connectivity</span>
              </h3>
              <p className="text-foreground/70 mb-4 animate-fade-in-up delay-200">
                Ensure seamless, uninterrupted payment transactions with our always-on connectivity solutions for POS terminals. Powered by secure IoT SIMs and a resilient global network, our platform delivers 24/7 reliability while reducing device-related operational costs and enhancing overall efficiency.
              </p>
              <p className="text-foreground/70 mb-6">
                With real-time network intelligence and centralized configuration tools, your teams gain full visibility and control over the entire POS fleet. Proactively minimize downtime, accelerate remote software updates, and ensure every terminal remains transaction-ready—whether deployed in high-volume urban retail environments or remote countryside locations.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 animate-fade-in-up delay-300">
                <Link href="/quote">Request a Quote</Link>
              </button>
            </div>

            <div className="card-futuristic relative overflow-hidden rounded-xl min-h-[450px] flex flex-col border border-primary/20">
              {/* Full-bleed Video Container */}
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  src="https://player.vimeo.com/video/1129017842?background=1&autoplay=1&muted=1&loop=1&autopause=0"
                  className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.5]"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  title="IoT Connectivity Video"
                ></iframe>
                {/* Darker overlay to ensure text contrast */}
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Overlay Content */}
              <div className="relative mt-auto p-8 bg-gradient-to-t from-background via-background/60 to-transparent">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-glow">
                    24/7
                  </div>
                  <div className="text-foreground/90 font-medium">Intelligent Network Connectivity</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/*