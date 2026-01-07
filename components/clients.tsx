"use client"

export default function Clients() {
  return (
    <section id="clients" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Serving <span className="text-primary">Banks & Fintechs</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            We act as a single accountable partner for the full POS lifecycle, reducing operational complexity and
            enabling our clients to focus on their core business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Banks */}
          <div className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-primary">Regulated Financial Institutions</h3>
            <p className="text-foreground/70 mb-4">
              We support regulated banks with delivery models and SLAs tailored to meet stringent regulatory
              requirements and operational standards.
            </p>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Compliance-focused delivery
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Regulatory alignment
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Audit-ready processes
              </li>
            </ul>
          </div>

          {/* Fintechs */}
          <div className="p-8 bg-card border border-border rounded-lg hover:border-accent/50 hover:bg-card/80 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-accent">High-Growth Fintechs</h3>
            <p className="text-foreground/70 mb-4">
              We support fintechs with scalable, flexible delivery models that adapt to rapid growth and evolving
              operational needs.
            </p>
            <ul className="space-y-2 text-foreground/60 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Scalable infrastructure
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Agile operations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Fast deployment
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Whether you're a bank or fintech, we bring expertise, reliability, and accountability to your POS
            operations.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
          <Link href="/quote">Request a Quote</Link>
          </button>
        </div>
      </div>
    </section>
  )
}
