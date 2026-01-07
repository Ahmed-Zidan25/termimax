"use client"

import { ScrollFadeIn } from "./scroll-animation"

export default function Features() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Feature 1 */}
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

            <div className="card-futuristic p-6 rounded-xl">
              <div className="card-image mb-4">
                <img src="/iot-network-connectivity-dashboard-monitoring.jpg" alt="IoT Connectivity" />
                <div className="card-image-overlay" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-glow">
                  500K+
                </div>
                <div className="text-foreground/60">Connected Devices</div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Feature 2 */}
        <ScrollFadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up">
            <div className="card-futuristic p-6 rounded-xl order-2 lg:order-1">
              <div className="card-image mb-4">
                <img src="/device-repair-maintenance-workshop-certification.jpg" alt="Repair Services" />
                <div className="card-image-overlay" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2 animate-glow">
                  150K+
                </div>
                <div className="text-foreground/60">Repair & Refurbishment</div>
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

        {/* Feature 3 */}
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

            <div className="card-futuristic p-6 rounded-xl">
              <div className="card-image mb-4">
                <img src="/field-service-technician-merchant-visit-deployment.jpg" alt="Field Service" />
                <div className="card-image-overlay" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 animate-glow">
                  800K+
                </div>
                <div className="text-foreground/60">Merchant Visits</div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
