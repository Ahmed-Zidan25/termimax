"use client"

export default function CTA() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Transform Your
          <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            POS Operations?
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
          Join banks and fintechs across the UAE who trust Termimax for end-to-end POS ecosystem excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-10 py-5 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transform">
            Request a Quote
          </button>
          <button className="px-10 py-5 border-2 border-primary text-primary rounded-lg font-bold text-lg hover:bg-primary/10 transition-all duration-300">
            Contact Sales
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-center items-center gap-8">
          <div>
            <div className="text-foreground/60 text-sm mb-1">Email</div>
            <div className="font-semibold text-primary">info@termimax.net</div>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div>
            <div className="text-foreground/60 text-sm mb-1">Phone</div>
            <div className="font-semibold text-primary">+971 (0) XXXX XXXX</div>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div>
            <div className="text-foreground/60 text-sm mb-1">Location</div>
            <div className="font-semibold text-primary">Office at Iris Bay - 901, Office No. 901-34, Business Bay, Dubai, United Arab Emirates.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
