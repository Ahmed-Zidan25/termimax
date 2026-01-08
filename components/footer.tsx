"use client"



export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">TermiMax</h3>
            <p className="text-foreground/60 text-sm">Enterprise POS enablement across the UAE. We support both regulated financial institutions and high-growth fintechs, adapting our delivery model, governance, and SLAs to meet differing regulatory, operational, and scalability requirements.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  IoT Connectivity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Hardware Distribution
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Field Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Maintenance & Repair
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Partnerships
                </a>
              </li>
            
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

                {/* Bottom Footer */}
                <div className="mt-8 border-t border-border pt-8">
                <div className="text-sm text-foreground/60 text-center">
  © {new Date().getFullYear()} Termimax. All rights reserved.</div>
  </div>
          {/* Social Links */}
          {/* <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
          </div> */}
        </div>
     
    </footer>
  )
}
