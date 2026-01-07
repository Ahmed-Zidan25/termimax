"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform">
              TermiMax
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
              Services
            </a>
            <a
              href="#experience"
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              Experience
            </a>
            <a href="#clients" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
              Clients
            </a>
            <a href="#products" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
              Products
            </a>
            <a href="/contact" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
              Contact Us
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-card hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-4">
            <a href="#services" className="block text-foreground/70 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#experience" className="block text-foreground/70 hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#clients" className="block text-foreground/70 hover:text-primary transition-colors">
              Clients
            </a>
            <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all">
            <Link href="/quote">Request a Quote</Link>
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
