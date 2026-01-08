import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Wrench, Package, Headphones, Shield, Zap, Globe } from "lucide-react"
import LogoSwiper from "@/components/LogoSwipper";



export default function HomePage() {
  
const logos = [
  { src: "/logos/pax.PNG", alt: "PAX Logo" },
  { src: "/logos/ncr.svg", alt: "NCR Corporation Logo" },
  { src: "/logos/ingenico.svg", alt: "Ingenico Logo" },
  { src: "/logos/verifone.PNG", alt: "Verifone Logo", customSize: "h-15 w-42" },
  { src: "/logos/sunmi.PNG", alt: "Sunmi" },
  { src: "/logos/IMIN.svg", alt: "IMIN" },
  { src: "/logos/Feitian.png", alt: "Feitian" },
  { src: "/logos/NewPOS.png", alt: "NewPOS" },
  { src: "/logos/NEXGO.svg", alt: "NEXGO" },
];

  return (
    //@ts-ignore
    

      
      {/* Partners/Brands Section */}
      <section className="py-12 md:py-16">
         <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Authorized Partner of Leading Brands</h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <p className="text-sm text-muted-foreground">Trusted by the world's top POS manufacturers</p>
          </div>
          {/* تم استبدال النص بالشعارات */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <LogoSwiper logos={logos}/>
            </div> 
            
          
      </section>


      
    </div>
  )
}