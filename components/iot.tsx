"use client"

import { ScrollFadeIn } from "./scroll-animation"
import Link from "next/link";

export default function Features() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Feature 1 - Intelligent Network Connectivity */}
       {/*  <ScrollFadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-in-left delay-100 text-foreground">
                Optimize POS Operations with <span className="text-primary">Intelligent Network Connectivity</span>
              </h3>
              <p className="text-foreground/70 mb-4 animate-fade-in-up delay-200">
                Ensure seamless, uninterrupted payment transactions with our always-on connectivity solutions for POS terminals. Powered by secure IoT SIMs and a resilient global network, our platform delivers 24/7 reliability.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 animate-fade-in-up delay-300">
                <Link href="/quote">Request a Quote</Link>
              </button>
            </div>

            <div className="card-futuristic relative overflow-hidden rounded-xl min-h-[450px] flex flex-col border border-primary/20">
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  src="https://player.vimeo.com/video/1129017842?background=1&autoplay=1&muted=1&loop=1&autopause=0"
                  className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.5]"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  title="IoT Connectivity Video"
                ></iframe>
                <div className="absolute inset-0 bg-black/30" />
              </div>
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
        </ScrollFadeIn> */}

<ScrollFadeIn>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
    <div>
      <h3 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-in-left delay-100 text-foreground">
        Optimize POS Operations with <span className="text-primary">Intelligent Network Connectivity</span>
      </h3>
      <p className="text-foreground/70 mb-4 animate-fade-in-up delay-200">
        Ensure seamless, uninterrupted payment transactions with our always-on connectivity solutions for POS terminals. Powered by secure IoT SIMs and a resilient global network, our platform delivers 24/7 reliability.
      </p>
      <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 animate-fade-in-up delay-300">
        <Link href="/quote">Request a Quote</Link>
      </button>
    </div>

    {/* Video Container */}
    <div className="card-futuristic relative overflow-hidden rounded-xl min-h-[450px] flex flex-col border border-primary/20">
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/1129017842?background=1&autoplay=1&muted=1&loop=1&autopause=0"
          className="absolute top-0 left-0 w-full h-full object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="IoT Connectivity Video"
        ></iframe>
        {/* Gray overlay removed from here */}
      </div>
      
      {/* Content Overlay - Keeping the bottom gradient for text readability */}
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

        {/* Feature 2 - IoT Connectivity at Scale */}
        <ScrollFadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div className="order-2 lg:order-1 card-futuristic relative overflow-hidden rounded-xl min-h-[450px] flex flex-col border border-primary/20">
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

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-in-left delay-100 text-foreground">
                IoT Connectivity at <span className="text-primary">Scale</span>
              </h3>
              <p className="text-foreground/70 mb-4 animate-fade-in-up delay-200">
                Serving over 500,000 POS devices with dedicated IoT SIMs and private APN configurations. Our centralized monitoring ensures nationwide coverage with high-availability design.
              </p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 animate-fade-in-up delay-300">
                <Link href="/contact">Learn More</Link>
              </button>
            </div>
          </div>
        </ScrollFadeIn>

      </div>
    </section>
  )
}