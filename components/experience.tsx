"use client"

import { ScrollFadeIn } from "./scroll-animation"

export default function Experience() {
  const metrics = [
    { value: "500,000+", label: "POS Devices Connected via IoT" },
    { value: "150,000+", label: "Devices Repaired & Refurbished" },
    { value: "800,000+", label: "Merchant Visits Completed" },
    { value: "100%", label: "Authorized Partnership Coverage" },
  ]

  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        {/* ADD THE OPENING TAG HERE */}
        <ScrollFadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Proven <span className="text-primary">Experience & Scale</span>
            </h2>
            <p className="text-foreground/60 text-lg">Industry-leading operational capabilities across the UAE</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg text-center hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-foreground/60 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Feature Highlight */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nationwide Coverage</h3>
              <p className="text-foreground/70 mb-4">
                Our infrastructure spans across the United Arab Emirates, enabling us to provide consistent,
                high-availability services to financial institutions and fintechs of all sizes.
              </p>
              <ul className="space-y-2 text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  <span className="break-words">Authorized IoT partner with nationwide coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  <span className="break-words">Formal authorizations from leading providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  <span className="break-words">Established partnerships with regulated entities</span>
                </li>
              </ul>
            </div>
            <div className="card-futuristic p-6 rounded-xl">
              <div className="card-image mb-4">
                <img src="/global_network_10.jpg" alt="Field Service" />
                <div className="card-image-overlay" />
              </div>
              <div className="text-center">
                <div className="text-foreground/60">UAE Based</div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}