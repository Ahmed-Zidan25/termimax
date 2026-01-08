

import LogoSwiper from "@/components/LogoSwipper";

export default function HomePage() {
  
  const logos = [
    { src: "/logos/pax.PNG", alt: "PAX Logo" },
    { src: "/logos/topwise.jpg", alt: "TOPWISE" },
    { src: "/logos/pediapay_logo.jpg", alt: "PediaPay" },
    { src: "/logos/zoloon.webp", alt: "ZOLON" },
    { src: "/logos/Onomondo.png", alt: "Onomondo" },
  ];

  return (
    <div className="w-full"> {/* Added missing opening div */}
      {/* Partners/Brands Section */}
      <section className="py-12 md:py-16">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Authorized Partner of Leading Brands
            </h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted by the world&apos;s top POS manufacturers
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <LogoSwiper logos={logos}/>
        </div> 
      </section>
    </div>
  )
}