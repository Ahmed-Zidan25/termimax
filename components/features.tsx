"use client"

import { ScrollFadeIn } from "./scroll-animation"
import Link from "next/link";

export default function Features() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Feature 1 - IoT Connectivity at Scale */}
        <ScrollFadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-in-left delay-100 text-foreground">
                IoT Connectivity at <span className="text-primary">Scale</span>
              </h3>
              <p className="text-foreground/70 mb-4 animate-fade-in-up delay-200">
                Serving over 500,000 POS devices with dedicated IoT SIMs and private APN configurations. Our centralized
                monitoring ensures nationwide coverage with high-availability design.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 animate-fade-in-up delay-300">
                <Link href="/contact">Learn More</Link>
              </button>
            </div>

            <div className="card-futuristic relative overflow-hidden rounded-xl min-h-[450px] flex flex-col border border-primary/20">
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  src="https://player.vimeo.com/video/1091588855?background=1&autoplay=1&muted=1&loop=1&autopause=0"
                  className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.5]"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  title="IoT Scale Video"
                ></iframe>
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div className="relative mt-auto p-8 bg-gradient-to-t from-background via-background/60 to-transparent">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-glow">
                    500K+
                  </div>
                  <div className="text-foreground/90 font-medium">Connected Devices</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Feature 2 - Maintenance & Repair */}
        <ScrollFadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div className="order-2 lg:order-1 card-futuristic relative overflow-hidden rounded-xl min-h-[450px] flex flex-col border border-primary/20">
              <div className="absolute inset-0 w-full h-full">
                {/* Use appropriate background video for repair here if available */}
                <iframe
                  src="https://player.vimeo.com/video/1129017842?background=1&autoplay=1&muted=1&loop=1&autopause=0"
                  className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.5]"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  title="Repair Services Video"
                ></iframe>
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div className="relative mt-auto p-8 bg-gradient-to-t from-background via-background/60 to-transparent">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2 animate-glow">
                    150K+
                  </div>
                  <div className="text-foreground/90 font-medium">Repair & Refurbishment</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-in-right delay-100 text-foreground">
                Maintenance & <span className="text-accent">Repair Services</span>
              </h3>
              <p className="text-foreground/70 mb-4 animate-fade-in-up delay-200">
                Operating as an authorized maintenance center, we've successfully diagnosed and repaired over 150,000
                POS devices using only genuine spare parts and certified processes.
              </p>
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 animate-fade-in-up delay-300">
                <Link href="/contact">Request Service</Link> 
              </button>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Feature 3 - Field Service Excellence */}
        <ScrollFadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-in-left delay-100 text-foreground">
                Field Service <span className="text-primary">Excellence</span>
              </h3>
              <p className="text-foreground/70 mb-4 animate-fade-in-up delay-200">
                With over 800,000 merchant visits executed, our field service operations deliver nationwide deployment,
                onboarding, and technical support with SLA-driven accountability.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 animate-fade-in-up delay-300">
                <Link href="/quote">Request a Quote</Link>
              </button>
            </div>

            <div className="card-futuristic relative overflow-hidden rounded-xl min-h-[450px] flex flex-col border border-primary/20">
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  src="https://player.vimeo.com/video/1091588855?background=1&autoplay=1&muted=1&loop=1&autopause=0"
                  className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.5]"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  title="Field Service Video"
                ></iframe>
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <div className="relative mt-auto p-8 bg-gradient-to-t from-background via-background/60 to-transparent">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-glow">
                    800K+
                  </div>
                  <div className="text-foreground/90 font-medium">Merchant Visits</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}