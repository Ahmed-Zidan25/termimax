"use client"

import { ScrollFadeIn } from "./scroll-animation"
import Link from "next/link";


export default function Features() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Feature 1 */}
        <ScrollFadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-in-left delay-100 text-foreground">
              Optimize POS Operations with <span className="text-primary">Intelligent Network Connectivity</span>
              </h3>
              <p className="text-foreground/70 mb-4 animate-fade-in-up delay-200">
              Ensure seamless, uninterrupted payment transactions with our always-on connectivity solutions for POS terminals. Powered by secure IoT SIMs and a resilient global network, our platform delivers 24/7 reliability while reducing device-related operational costs and enhancing overall efficiency.
              </p>
              <p>With real-time network intelligence and centralized configuration tools, your teams gain full visibility and control over the entire POS fleet. Proactively minimize downtime, accelerate remote software updates, and ensure every terminal remains transaction-ready—whether deployed in high-volume urban retail environments or remote countryside locations.</p>
             <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 animate-fade-in-up delay-300">
              <Link href="/quote">Request a Quote</Link>
              </button>
            </div>

            <div className="card-futuristic p-6 rounded-xl">
              <div className="card-image mb-4">
                <img src="/owner-getting-ready-reopening.jpg" alt="IoT Connectivity" />
                <div className="card-image-overlay" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-glow">
                24/7
                </div>
                <div className="text-foreground/60">Intelligent Network Connectivity</div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Feature 2 */}
        <ScrollFadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div className="card-futuristic p-6 rounded-xl order-2 lg:order-1">
              <div className="card-image mb-4">
                <img src="/large-buildings-with-dome-lights.jpg" alt="Repair Services" />
                <div className="card-image-overlay" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2 animate-glow">
                180+
                </div>
                <div className="text-foreground/60">Countries & 680 Networks</div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-in-left delay-100 text-foreground">
              Reliable <span className="text-primary">Connectivity</span>
              </h3>
              <p>Our IoT SIMs connect to over 680 networks across 180+ countries, ensuring consistent, uninterrupted service wherever your devices operate. From high-density urban environments to remote locations, we deliver dependable connectivity that keeps your POS terminals online and ready at all times.</p>
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 animate-fade-in-up delay-300">
              <Link href="/contact">Request Service</Link> 
              </button>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Feature 3 */}
        <ScrollFadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-in-left delay-100 text-foreground">
              Real-Time <span className="text-primary">Diagnostics</span>
              </h3>
              <p>Our centralized platform provides instant access to network and device insights, enabling faster issue detection, proactive performance optimization, and stronger security controls. This visibility empowers your teams to resolve problems quickly, improve service reliability, and deliver a superior customer experience.</p>
            
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out hover:shadow-lg hover:shadow-accent/50 hover:-translate-y-1 animate-fade-in-up delay-300">
              <Link href="/quote">Request a Quote</Link>
              </button>
            </div>

            <div className="card-futuristic p-6 rounded-xl">
              <div className="card-image mb-4">
                <img src="/iot-connectivity-pos-devices-network.jpg" alt="Field Service" />
                <div className="card-image-overlay" />
              </div>
              <div className="text-center">
                
                <div className="text-foreground/60">Device Insights</div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
